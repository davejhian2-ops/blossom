// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        loading.style.opacity = "0";
        loading.style.pointerEvents = "none";

        setTimeout(() => {
            loading.style.display = "none";
        }, 800);

    }, 1800);

});

// ===============================
// FALLING PETALS
// ===============================

const petalsContainer = document.getElementById("petals");

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";


    const size =
    Math.random()*15+10;


    petal.style.width=size+"px";
    petal.style.height=size+"px";


    petal.style.left =
    Math.random()*window.innerWidth+"px";


    petal.style.animationDuration =
    Math.random()*5+8+"s";


    petal.style.transform =
    `rotate(${Math.random()*360}deg)`;


    petal.style.opacity =
    Math.random();


    petalsContainer.appendChild(petal);


    setTimeout(()=>{

        petal.remove();

    },13000);

}
setInterval(createPetal,300);

// ===============================
// OPEN LETTER
// ===============================

const button = document.getElementById("openBtn");

const letter = document.getElementById("letterSection");

const bouquet = document.getElementById("bouquetImage");

button.addEventListener("click",()=>{

button.disabled=true;

const bouquet=document.getElementById("bouquet");

const ribbon=document.getElementById("ribbon");

const paper=document.querySelector(".paper");

bouquet.classList.add("open");

setTimeout(()=>{

ribbon.classList.add("open");

},700);

setTimeout(()=>{

letter.style.visibility="visible";

letter.style.opacity="1";


const envelope =
document.querySelector(".envelope");


envelope.classList.add("open");


setTimeout(()=>{

paper.classList.add("show");

typeWriter();

},800);


},1600);

button.style.opacity="0";

});

// ===============================
// SWEET MESSAGE
// ===============================

const message =

`Good morning, Langga Lydell.

Before you start your day, I wanted to leave these flowers for you.

I know your tummy is hurting today, and if I could, I would be beside you, making sure you're comfortable, reminding you to rest whenever you can, and doing everything I could to make the pain a little easier.

Even though you still have classes tomorrow, please don't push yourself too hard. Take little breaks whenever you can, drink some warm water if possible, and remember that it's okay to slow down for a moment.

I hope these flowers can keep you company while I'm not there.

Every flower here carries a quiet reminder that someone loves you deeply, cares about you endlessly, and is wishing for your day to become lighter little by little.

I'm so proud of you for showing up even on days that don't feel easy.

I hope today treats you gently.

Take care of yourself for me.

I'll be thinking about you all day.

Good luck with your classes, Langga Lydell.

I love you always.`;

let index = 0;

function typeWriter(){

    const typing =
    document.getElementById("typing");

    typing.innerHTML = "";

    index = 0;

    function write(){

        if(index < message.length){

            typing.innerHTML += message.charAt(index);

            index++;

            setTimeout(write,28);

        } else {

            // Show signature after message finishes

            const signature =
            document.getElementById("signature");

            signature.classList.add("show");

        }

    }

    write();

}
// ===============================
// PARALLAX EFFECT
// ===============================

document.addEventListener("mousemove",(e)=>{

    const glow = document.querySelector(".glow");

    const x = (e.clientX/window.innerWidth - .5)*30;

    const y = (e.clientY/window.innerHeight - .5)*30;

    glow.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

});

const sparkleContainer=document.getElementById("sparkles");

function sparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*innerWidth+"px";
s.style.top=Math.random()*innerHeight+"px";

s.style.animationDuration=
(Math.random()*2+2)+"s";

sparkleContainer.appendChild(s);

setTimeout(()=>{

s.remove();

},4000);

}

setInterval(sparkle,250);

// ===============================
// BOUQUET BREATHING EFFECT
// ===============================

const bouquetImage = document.getElementById("bouquetImage");

let scale = 1;
let growing = true;

setInterval(()=>{

    if(!bouquetImage) return;

    if(growing){

        scale += 0.002;

        if(scale >= 1.03){
            growing = false;
        }

    }else{

        scale -= 0.002;

        if(scale <= 1){
            growing = true;
        }

    }

    bouquetImage.style.transform =
    `scale(${scale})`;

},30);

