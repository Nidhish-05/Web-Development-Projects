function rollDie1(){
    let num = Math.floor((Math.random()*6));
    switch (num) {
        case 0:
            document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
            break;
        case 1:
            document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
            break;
        case 2:
            document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
            break;
        case 3:
            document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
            break;
        case 4:
            document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
            break;
        case 5:
            document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
            break;
        default:
            document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
            break;
    }
    return num;
}
function rollDie2(){
    let num = Math.floor((Math.random()*6));
    switch (num) {
        case 0:
            document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
            break;
        case 1:
            document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
            break;
        case 2:
            document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
            break;
        case 3:
            document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
            break;
        case 4:
            document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
            break;
        case 5:
            document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
            break;
        default:
            document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
            break;
    }
    return num;
}
function winner(){
    let num1 = rollDie1();
    let num2 = rollDie2();
    if(num1>num2 )
    {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if(num2>num1)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML = "🚩It's A Tie!!🚩";
    }
}
winner();