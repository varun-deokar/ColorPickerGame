var colors = [];
var correctColor;
var n = 6;
var reset = document.querySelector("#reset");
var head = document.querySelector(".main");
var tryAgain = document.querySelector(".try");
var h1 = document.querySelector("h1");
var items = document.querySelectorAll(".griditem");
reset.addEventListener("click", newGame);
var easy = document.querySelector(".Easy");
var hard = document.querySelector(".Hard");
hard.classList.add("active");
easy.addEventListener("click", Easy);
function Easy()
{
    easy.classList.add("active");
    hard.classList.remove("active");
    for(var i = 0; i < 6; i++)
    {
        if(i > 2)
        {
            items[i].style.display = "none";
        }
    }
    n = 3;
    main();
}
hard.addEventListener("click", Hard);
function Hard()
{
    hard.classList.add("active");
    easy.classList.remove("active");
    for(var i = 0; i < 6; i++)
    {
        items[i].style.display = "grid";
    }
    n = 6;
    main();
}
function changeColor()
{
    for(var i = 0; i < items.length; i++)
    {
        items[i].style.backgroundColor = correctColor;
        items[i].style.border = "1px solid white";
    }
}

function selected()
{
    pickedColor = this.style.backgroundColor;
    if(pickedColor === correctColor)
    {
        changeColor();
        // tryAgain.classList.remove("try");
        tryAgain.textContent = "Correct!!"
        head.style.background = pickedColor;
    }
    else{
        this.style.backgroundColor = "#232323";
        this.style.border = "none";
        // this.classList.add("incorrect");
        // tryAgain.classList.remove("try");
        tryAgain.textContent = "Try Again"
    }
}

function blockColors(){
    for(var i = 0; i < colors.length; i++)
    {
    items[i].style.backgroundColor = colors[i];
    items[i].addEventListener("click", selected);
    }
}

function colorGenerator()
{
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b= Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorArray(){
    for(var i = 0; i < n; i++)
    {
    colors.push(colorGenerator());
    }
    correctColor = colors[Math.floor(Math.random() * n)];
    h1.textContent = "RGB" + correctColor.substring(3)
}

function newGame(){
    if(n === 3)
        Easy();
    else
        Hard();
    main();
}

function main()
{
    colors = [];
    head.style.background = "rgb(60, 132, 203)";
    tryAgain.textContent= "";
    colorArray();
    blockColors();
}

main();