function addUser() {
        var player1 = document.getElementById("player1_name").value;
        var player2 = document.getElementById("player2_name").value;
    
        localStorage.setItem("1", player1);
        localStorage.setItem("2", player2);
    
        window.location = "quiz_game_page.html";
}