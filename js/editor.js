document.getElementById('bold').addEventListener('click',function(){

    document.getElementById("text-field").style.fontWeight = "900";

})
document.getElementById('italic').addEventListener('click',function(){

    document.getElementById("text-field").style.fontStyle = "italic";

})
document.getElementById('underline').addEventListener('click',function(){

    document.getElementById("text-field").style.textDecoration = "underline";

})
document.getElementById('left').addEventListener('click',function(){

    document.getElementById("text-field").style.textAlign = "left";

})

document.getElementById('center').addEventListener('click',function(){

    document.getElementById("text-field").style.textAlign = "center";

})
document.getElementById('right').addEventListener('click',function(){

    document.getElementById("text-field").style.textAlign = "right";

})
