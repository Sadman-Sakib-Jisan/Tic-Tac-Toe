var ids = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
}
var result = [[ids['one'], ids['two'], ids['three']], [ids['four'], ids['five'], ids['six']], [ids['seven'], ids['eight'], ids['nine']], [ids['one'], ids['four'], ids['seven']], [ids['two'], ids['five'], ids['eight']], [ids['three'], ids['six'], ids['nine']], [ids['one'], ids['five'], ids['nine']], [ids['three'], ids['five'], ids['seven']]];
var hit = "X";
var player = 0;
var counter = 0;
var gameover = false;
var player1 = prompt("Enter the name of Player 1:");
var player2 = 'Computer Bot';

document.getElementById("player").innerHTML = "Player 1: " + player1 + "<br>" + "Player 2: " + player2;

function play(userchoice) {
    if (!gameover) {
        var bcheck = true;
        if (ids[userchoice.id] !== "X" && ids[userchoice.id] !== "O") {
            ids[userchoice.id] = hit;
            counter++;
            userchoice.innerHTML = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "Computer Bots' Turn!"
            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }
        else {
            bcheck = false;
            alert("The box is already played, try again in a empty box");
        }

        var result = [[ids['one'], ids['two'], ids['three']], [ids['four'], ids['five'], ids['six']], [ids['seven'], ids['eight'], ids['nine']], [ids['one'], ids['four'], ids['seven']], [ids['two'], ids['five'], ids['eight']], [ids['three'], ids['six'], ids['nine']], [ids['one'], ids['five'], ids['nine']], [ids['three'], ids['five'], ids['seven']]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                bcheck = false;
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }

                document.getElementById("result").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("move").innerHTML = player + " has won the game";

                return 0;
            }
        }

        if (counter === 9) {
            bcheck = false;
            gameover = true;
            document.getElementById("result").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("move").innerHTML = "Match Drawn, No one has won the game";

        }

        if (bcheck) {
            
        }
        botchoice(userchoice);
    }
}

function botchoice(uservalue) {
    if (!gameover) {
        var dict = {
            one: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['three'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['two'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['five'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else if (ids['nine'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['four'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else if (ids['eight'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['six'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else { value = rand(); }

                return value;
            },
            three: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['one'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['two'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['five'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['six'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else if (ids['nine'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['four'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else if (ids['eight'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else { value = rand(); }
                return value;
            },
            seven: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['eight'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else if (ids['nine'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else if (ids['five'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['three'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['four'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['one'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else if (ids['six'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['two'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else { value = rand(); }

                return value;
            },
            nine: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['eight'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else if (ids['five'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['one'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['six'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['three'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['four'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['two'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else { value = rand(); }

                return value;
            },
            two: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['one'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['three'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['five'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else if (ids['eight'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['six'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else if (ids['four'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['nine'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else { value = rand(); }

                return value;
            },
            four: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['one'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['five'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['six'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['two'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else if (ids['eight'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['nine'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['three'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else { value = rand(); }

                return value;
            },
            six: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['three'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else if (ids['nine'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['five'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else if (ids['four'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['two'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else if (ids['eight'] === 'X' && (ids['two'] !== 'O' && ids['nine'] !== 'X')) { value = 'two'; }
                else if (ids['one'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else { value = rand(); }

                return value;
            },
            eight: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['seven'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else if (ids['nine'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['five'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['two'] === 'X' && (ids['five'] !== 'O' && ids['five'] !== 'X')) { value = 'five'; }
                else if (ids['six'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else if (ids['four'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['three'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['one'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else { value = rand(); }

                return value;
            },
            five: function () {
                var value;
                var wlist = winbot();
                if (wlist[0]) { value = wlist[1]; }
                else if (ids['one'] === 'X' && (ids['nine'] !== 'O' && ids['nine'] !== 'X')) { value = 'nine'; }
                else if (ids['nine'] === 'X' && (ids['one'] !== 'O' && ids['one'] !== 'X')) { value = 'one'; }
                else if (ids['three'] === 'X' && (ids['seven'] !== 'O' && ids['seven'] !== 'X')) { value = 'seven'; }
                else if (ids['seven'] === 'X' && (ids['three'] !== 'O' && ids['three'] !== 'X')) { value = 'three'; }
                else if (ids['six'] === 'X' && (ids['four'] !== 'O' && ids['four'] !== 'X')) { value = 'four'; }
                else if (ids['four'] === 'X' && (ids['six'] !== 'O' && ids['six'] !== 'X')) { value = 'six'; }
                else if (ids['eight'] === 'X' && (ids['two'] !== 'O' && ids['two'] !== 'X')) { value = 'two'; }
                else if (ids['two'] === 'X' && (ids['eight'] !== 'O' && ids['eight'] !== 'X')) { value = 'eight'; }
                else { value = rand(); }
                return value;
            }
        };
        var botplay;
        if (counter === 1 && ids['five'] != 'X') {
            botplay = 'five';
        } else {
            botplay = dict[uservalue.id]();
        }

        console.log(botplay);

        if (ids[botplay] !== "X" && ids[botplay] !== "O") {
            ids[botplay] = hit;
            counter++;
            document.getElementById(botplay).innerHTML = hit;
            if (hit === "X") {
                hit = "O";
                document.getElementById("move").innerHTML = "Computer Bots' Turn!"
            }
            else {
                hit = "X";
                document.getElementById("move").innerHTML = "1st Player's Turn!"

            }

        }

        var result = [[ids['one'], ids['two'], ids['three']], [ids['four'], ids['five'], ids['six']], [ids['seven'], ids['eight'], ids['nine']], [ids['one'], ids['four'], ids['seven']], [ids['two'], ids['five'], ids['eight']], [ids['three'], ids['six'], ids['nine']], [ids['one'], ids['five'], ids['nine']], [ids['three'], ids['five'], ids['seven']]];


        for (var i = 0; i <= 7; i++) {
            if (result[i][0] === result[i][1] && result[i][1] === result[i][2]) {
                gameover = true;
                if (hit === "X") {
                    hit = "O";
                    player = player2;
                }
                else {
                    hit = "X";
                    player = player1;
                }

                document.getElementById("result").innerHTML = "Game over! Restart the game to play again.";

                document.getElementById("move").innerHTML = player + " has won the game";

                return 0;
            }
        }

        if (counter === 9) {
            gameover = true;
            document.getElementById("result").innerHTML = "Game over! Restart the game to play again.";

            document.getElementById("move").innerHTML = "Match Drawn, No one has won the game";

        }

        console.log(ids[botplay]);

    }
}

function winbot() {

    var value;
    var ck = true;

    if ((ids['one'] === 'O' && ids['two'] === 'O') && ids['three'] !== 'X') { value = 'three'; }
    else if ((ids['one'] === 'O' && ids['three'] === 'O') && ids['two'] !== 'X') { value = 'two'; }
    else if ((ids['two'] === 'O' && ids['three'] === 'O') && ids['one'] !== 'X') { value = 'one'; }

    else if ((ids['one'] === 'O' && ids['five'] === 'O') && ids['nine'] !== 'X') { value = 'nine'; }
    else if ((ids['one'] === 'O' && ids['nine'] === 'O') && ids['five'] !== 'X') { value = 'five'; }
    else if ((ids['five'] === 'O' && ids['nine'] === 'O') && ids['one'] !== 'X') { value = 'one'; }

    else if ((ids['one'] === 'O' && ids['four'] === 'O') && ids['seven'] !== 'X') { value = 'seven'; }
    else if ((ids['one'] === 'O' && ids['seven'] === 'O') && ids['four'] !== 'X') { value = 'four'; }
    else if ((ids['four'] === 'O' && ids['seven'] === 'O') && ids['one'] !== 'X') { value = 'one'; }

    else if ((ids['three'] === 'O' && ids['six'] === 'O') && ids['nine'] !== 'X') { value = 'nine'; }
    else if ((ids['three'] === 'O' && ids['nine'] === 'O') && ids['six'] !== 'X') { value = 'six'; }
    else if ((ids['six'] === 'O' && ids['nine'] === 'O') && ids['three'] !== 'X') { value = 'three'; }

    else if ((ids['three'] === 'O' && ids['five'] === 'O') && ids['seven'] !== 'X') { value = 'seven'; }
    else if ((ids['three'] === 'O' && ids['seven'] === 'O') && ids['five'] !== 'X') { value = 'five'; }
    else if ((ids['five'] === 'O' && ids['seven'] === 'O') && ids['three'] !== 'X') { value = 'three'; }

    else if ((ids['seven'] === 'O' && ids['eight'] === 'O') && ids['nine'] !== 'X') { value = 'nine'; }
    else if ((ids['seven'] === 'O' && ids['nine'] === 'O') && ids['eight'] !== 'X') { value = 'eight'; }
    else if ((ids['eight'] === 'O' && ids['nine'] === 'O') && ids['seven'] !== 'X') { value = 'seven'; }

    else if ((ids['four'] === 'O' && ids['five'] === 'O') && ids['six'] !== 'X') { value = 'six'; }
    else if ((ids['four'] === 'O' && ids['six'] === 'O') && ids['five'] !== 'X') { value = 'five'; }
    else if ((ids['five'] === 'O' && ids['six'] === 'O') && ids['four'] !== 'X') { value = 'four'; }

    else if ((ids['two'] === 'O' && ids['five'] === 'O') && ids['eight'] !== 'X') { value = 'eight'; }
    else if ((ids['two'] === 'O' && ids['eight'] === 'O') && ids['five'] !== 'X') { value = 'five'; }
    else if ((ids['five'] === 'O' && ids['eight'] === 'O') && ids['two'] !== 'X') { value = 'two'; }

    else { ck = false; value = null; }

    var ulist = [ck, value];

    console.log(ulist);

    return ulist;
}

function rand() {
    var value;
    var lrand = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (var i = 0; i < 9; i++){
        if(ids[lrand[i]] !== 'X' && ids[lrand[i]] !== 'O')
        {
            value = lrand[i];
            break;
        }
    }

    return value;
}
