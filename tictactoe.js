<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        body {
            background-color: lightcyan;
            text-align: center;
        }
        .c {
            height: 70vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .g {
            height: 60vmin;
            width: 60vmin;
            display: flex;
            flex-wrap: wrap;
            gap: 1.5vmin;
            justify-content: center;
        }
        .b {
            height: 18vmin;
            width: 18vmin;
            border-radius: 1rem;
            border: none;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
            font-size: 8vmin;
            color: red;
            background-color: yellow;
        }
        #r {
            padding: 1rem;
            font-size: 1.25rem;
            background: #191913;
            color: white;
            border-radius: 1rem;
            border: none;
        }
        .b:hover {
            background-color: chocolate;
        }
        #n {
            padding: 1rem;
            font-size: 1.25rem;
            background: #191913;
            color: white;
            border-radius: 1rem;
            border: none;
        }
        #m {
            font-size: 8vmin;
        }
        .m-c {
            height: 30vmin;
        }
        .h {
            display: none;
        }
    </style>
</head>
<body>
    <div class="m-c h">
        <p id="m">Winner</p>
        <button id="n">New Game</button>
    </div>
    <main>
        <h1>Tic Tac Toe</h1>
        <div class="c">
            <div class="g">
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
                <button class="b"></button>
            </div>
        </div>
        <button id="r">Reset Game</button>
    </main>
    <script defer src="mains.js"></script>
</body>
</html>
