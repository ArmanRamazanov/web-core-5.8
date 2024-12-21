//Wanted to have only one main__section-list-button remain active, while keeping the first one active as a default
const ActiveColor = "#B8FFEC";
const listButtons = document.querySelectorAll(".main__section-list-button");

function removeShadow(){
    listButtons.forEach(btn=>{
        btn.style.boxShadow = "none"
    })
}

listButtons.forEach((button)=>{
    button.addEventListener("click",event=>{
        removeShadow();
        let clickedButton = event.target;
        clickedButton.style.boxShadow = `0 0 0px 3px ${ActiveColor} inset`
    })
})
