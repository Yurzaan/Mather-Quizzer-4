var player_1name = localStorage.getItem("1");
var player_2name = localStorage.getItem("2");

document.getElementById("player_1name").innerHTML = player_1name + ":";
document.getElementById("player_2name").innerHTML = player_2name + ":";

var score_1 = 0;
var score_2 = 0;

document.getElementById("player_1score").innerHTML = score_1;
document.getElementById("player_2score").innerHTML = score_2;

document.getElementById("Question_turn").innerHTML = "Question Turn :" + player_1name;
document.getElementById("Answer_turn").innerHTML = "Answer Turn :" + player_2name;

function Send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

Question_turn = "player1";
answer_turn = "player2";

function Check() {
    get_answer = document.getElementById("input_check_box").value;

    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            score_1 = score_1 + 1;
            document.getElementById("player_1score").innerHTML = score_1;
        } else {
            score_2 = score_2 + 1;
            document.getElementById("player_2score").innerHTML = score_2;
        }
    }

    if (Question_turn == "player1") {
        Question_turn = "player2";
        document.getElementById("Question_turn").innerHTML = "Question Turn - " + player_2name;
    } else {
        Question_turn = "player1";
        document.getElementById("Question_turn").innerHTML = "Question Turn - " + player_1name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("Answer_turn").innerHTML = "Answer Turn - " + player_2name;
    } else {
        answer_turn = "player1";
        document.getElementById("Answer_turn").innerHTML = "Answer Turn - " + player_1name;
    }
    document.getElementById("output").innerHTML = "";
}