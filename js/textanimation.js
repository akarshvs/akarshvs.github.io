const text = document.querySelector('.main-head');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++)
{
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 40);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
clearInterval(timer);
text.classList.add('pulse3');
timer = null;
}