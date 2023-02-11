const headingColorChange = document.getElementsByTagName("h5");
for(const heading of headingColorChange) {
    heading.style.color = "tomato";
}

const changeBackground = document.getElementById("backpack");
changeBackground.style.backgroundColor = "#f7f7f7";

const changeRadius = document.getElementsByClassName("card");
for(const radius of changeRadius) {
    radius.style.borderRadius = "30px";
}

function clickBoom(event) {
    event.target.parentNode.removeChild(event.target);
}


document.getElementById("inputField").addEventListener("keyup", function(event){
    const buttonValue = document.getElementById("submit");
    const value = event.target.value
    if(value.endsWith("@gmail.com")){
        buttonValue.removeAttribute("disabled");
    }else {
        buttonValue.setAttribute("disabled", true);
    }
})

document.getElementById("submit").addEventListener("click", function(){
    const inputValue = document.getElementById("inputField");   
    inputValue.value = "";
})


document.getElementById("card-img-top").addEventListener("mouseover", function(){
    const cardImage = document.getElementById("card-img-top");
    for (const hover of cardImage) {
        console.log(hover);
    }
})