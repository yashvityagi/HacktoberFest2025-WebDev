let emojiMap = {};
let emojiList = [];
let dropdown = document.createElement("div");
dropdown.id = "emoji-dropdown";
document.body.appendChild(dropdown);
let currentTarget = null;
let currentWord = "";
let selectedIndex = 0;
(async () => {
  try {
    const response = await fetch(chrome.runtime.getURL("emoji-map.json"));
    emojiMap = await response.json();
    emojiList = Object.keys(emojiMap).map(k => ({ name: k, char: emojiMap[k] }));
  } catch (e) {
    console.error("Failed to load emoji map", e);
  }
})();
function showDropdown(target, word, rect) {
  dropdown.innerHTML = "";
  selectedIndex = 0;
  const matches = emojiList.filter(e => e.name.startsWith(word.toLowerCase())).slice(0, 20);
  if (!matches.length) {
    dropdown.style.display = "none";
    return;
  }
  matches.forEach((e, i) => {
    const item = document.createElement("div");
    item.className = "emoji-item";
    item.textContent = e.char;
    item.title = e.name;
    item.style.cursor = "pointer";
    item.style.fontSize = "20px";
    item.style.padding = "2px 5px";
    item.addEventListener("mousedown", ev => {
      ev.preventDefault(); 
      replaceText(target, e.char);
      hideDropdown();
    });
    item.addEventListener("mouseenter", () => {
      selectedIndex = i;
      highlightItem();
    });
    dropdown.appendChild(item);
  });
  dropdown.style.display = "flex";
  dropdown.style.flexDirection = "row";
  dropdown.style.background = "#fff";
  dropdown.style.border = "1px solid #ccc";
  dropdown.style.borderRadius = "8px";
  dropdown.style.padding = "5px";
  dropdown.style.gap = "5px";
  dropdown.style.zIndex = "9999";
  dropdown.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
  dropdown.style.maxWidth = "300px";
  dropdown.style.overflowX = "auto";
  dropdown.style.whiteSpace = "nowrap";
  const dropdownHeight = 50;
  const fitsBelow = rect.bottom + dropdownHeight < window.innerHeight;
  dropdown.style.top = (fitsBelow ? rect.bottom + 5 : rect.top - dropdownHeight - 5) + window.scrollY + "px";
  dropdown.style.left = rect.left + window.scrollX + "px";
  highlightItem();
  currentTarget = target;
}
function hideDropdown() {
  dropdown.style.display = "none";
  currentWord = "";
  currentTarget = null;
}
function highlightItem() {
  const items = dropdown.querySelectorAll(".emoji-item");
  items.forEach((el, i) => {
    el.style.background = i === selectedIndex ? "#eee" : "transparent";
    el.style.borderRadius = "4px";
  });
  const selected = items[selectedIndex];
  if (selected) {
    selected.scrollIntoView({ block: "nearest", inline: "nearest" });
  }
}
function replaceText(target, emoji) {
  if (!currentWord) return;
  try {
    if (target.isContentEditable) {
      const sel = window.getSelection();
      if (sel.rangeCount > 0) {
        let range = sel.getRangeAt(0);
        const node = range.endContainer;
        const offset = range.endOffset;
        const textBefore = node.textContent.slice(0, offset);
        const colonIndex = textBefore.lastIndexOf(":" + currentWord);
        if (colonIndex >= 0) {
          const before = textBefore.slice(0, colonIndex);
          const after = node.textContent.slice(offset);
          node.textContent = before + emoji + after;
          const newRange = document.createRange();
          newRange.setStart(node, before.length + emoji.length);
          newRange.collapse(true);
          sel.removeAllRanges();
          sel.addRange(newRange);
          triggerInputEvent(target, emoji);
        }
      }
    } else {
      const pos = target.selectionStart;
      const value = target.value;
      const colonIndex = value.lastIndexOf(":" + currentWord, pos);
      if (colonIndex >= 0) {
        const before = value.substring(0, colonIndex);
        const after = value.substring(pos);
        target.value = before + emoji + after;
        target.selectionStart = target.selectionEnd = before.length + emoji.length;   
        triggerInputEvent(target, emoji);
      }
    }
  } catch (err) {
    console.error("replaceText error:", err);
  }
}
function triggerInputEvent(target, emoji) {
  try {
    const event = new InputEvent("input", {
      bubbles: true,
      cancelable: true,
      data: emoji,
      inputType: "insertText"
    });
    target.dispatchEvent(event);
  } catch (err) {
    console.warn("Failed to dispatch InputEvent:", err);
  }
}
function handleInputEvent(e) {
  const target = e.target;
  if (!(target.isContentEditable || target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
  const sel = target.isContentEditable ? window.getSelection() : null;
  const text = target.isContentEditable
    ? sel.anchorNode?.textContent || ""
    : target.value.substring(0, target.selectionStart);
  const match = /:([a-z0-9_+-]+)$/.exec(text);
  if (match) {
    currentWord = match[1];
    const rect = target.getBoundingClientRect();
    showDropdown(target, currentWord, rect);
  } else {
    hideDropdown();
  }
}
document.addEventListener("keydown", e => {
  if (dropdown.style.display === "none") return;
  const items = dropdown.querySelectorAll(".emoji-item");
  if (!items.length) return;
  if (e.key === "Tab" || e.key === "ArrowRight") {
    e.preventDefault();
    selectedIndex = (selectedIndex + 1) % items.length;
    highlightItem();
  }
  else if (e.key === "ArrowLeft") {
    e.preventDefault();
    selectedIndex = (selectedIndex - 1 + items.length) % items.length;  
    highlightItem();
  }
  else if (e.key === "Enter") {
    if (!currentTarget || !items[selectedIndex]) return;
    e.preventDefault(); 
    const emoji = items[selectedIndex].textContent;
    replaceText(currentTarget, emoji);
    triggerInputEvent(currentTarget, emoji); 
    hideDropdown();
  }
});
document.addEventListener("click", e => {
  if (!dropdown.contains(e.target)) {
    hideDropdown();
  }
});
function attachListeners(root = document) {
  root.querySelectorAll("textarea, input[type='text'], [contenteditable='true']").forEach(input => {
    if (!input.dataset.emojiListener) {
      input.dataset.emojiListener = "true";
      input.addEventListener("input", handleInputEvent);
    }
  });
}
attachListeners();
const observer = new MutationObserver(() => attachListeners());
observer.observe(document.body, { childList: true, subtree: true });
