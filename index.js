
var dice = document.querySelectorAll("img");
var p1 = rollDice(dice[0]);
var p2 = rollDice(dice[1]);
validate();
document.addEventListener("keypress",function () {
    p1 = rollDice(dice[0]);
    p2 = rollDice(dice[1]);
    validate();
})

document.querySelector(".img1").addEventListener("click", function () {
    p1 = rollDice(dice[0]);
    validate();

})
document.querySelector(".img2").addEventListener("click", function () {
    p2 = rollDice(dice[1]);
    validate();

})

function rollDice(die) {
    var n = Math.ceil(Math.random() * 6);
    die.setAttribute("src","images/"+"dice"+n+".png");
    return n;
}

function validate() {
    if (p1>p2) document.querySelector('h1').innerHTML = ("Player1 wins");
    else if (p2>p1) document.querySelector('h1').innerHTML = ("Player2 wins");
    else document.querySelector('h1').innerHTML = ("tie");
}
