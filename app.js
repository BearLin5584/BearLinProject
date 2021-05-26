const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
    
}

const lasWord = document.querySelector("#fourteenth");
const animation = document.querySelector("div.animation");
lasWord.addEventListener("animationend", () => {
    animation.style = "transition: all 1s ease; opacity: 0; pointer-events: noen;";
})