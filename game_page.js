player1score=0
player2score=0
question_turn="player1"
answer_turn="player2"
player1name=localStorage.getItem("player1name")
player2name=localStorage.getItem("player2name")
document.getElementById("player1_name").innerHTML=player1name+" : "
document.getElementById("player2_name").innerHTML=player2name+" : "
document.getElementById("player1_score").innerHTML=player1score
document.getElementById("player2_score").innerHTML=player2score
document.getElementById("player_question").innerHTML="Question Turn- "+player1name
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2name
function send(){
   get_number1=document.getElementById("number_enter").value 
   get_number2=document.getElementById("number_enter2").value 
   question_word="<h4 id='word_display'> question. "+ get_number1+" x "+get_number2+"</h4>"
    inputbox="<br> answer: <input type='text' id='input_check_box'>"
    check_button="<br> <br> <button onclick='check()' class='btn btn-info'> check </button>"
    row= question_word+inputbox+check_button 
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
} 

function check(){
    get_answer=document.getElementById("input_check_box").value
    answer1=get_number1*get_number2
    if (answer1==get_answer) {
        if (answer_turn == "player1") {
        player1score=player1score+1
        document.getElementById("player1_score").innerHTML=player1score
            
        } else {
            player2score=player2score+1
            document.getElementById("player2_score").innerHTML=player2score  
        }
    }
    if (question_turn=="player1") {
            question_turn="player2"
            document.getElementById("player_question").innerHTML="question turn - "+player2name
    } else {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn - "+player1name
    }

    if (answer_turn=="player1") {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn - "+player2name
} else {
    answer_turn="player1"
    document.getElementById("player_answer").innerHTML="answer turn - "+player1name
}
document.getElementById("output").innerHTML=""
}