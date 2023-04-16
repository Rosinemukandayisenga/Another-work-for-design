function lineDisappear(){
    document.getElementById("under").style.textDecoration="none"
}
function lineAppear(){
    document.getElementById("under").style.textDecoration="underline"
    document.getElementById("under").style.textDecorationColor="aqua"
}
function lineOut(){
    document.getElementById("left").style.textDecoration="underline"
    document.getElementById("left").style.textDecorationColor="aqua"
}
function lineOn(){
    document.getElementById("left").style.textDecoration="none"
}
function changeColor(){
    document.getElementById("btn").style.backgroundColor="skyblue"
}
function anotherColor(){
    document.getElementById("btn").style.backgroundColor="green"
}
function learnMore(){
    document.querySelector(".middle").style.display="block"
}
function onImage(){
this.setAttribute("src","./Images/nge1.png")
}
function outImage(){
    this.setAttribute("src","./Images/image-founder.webp")
}