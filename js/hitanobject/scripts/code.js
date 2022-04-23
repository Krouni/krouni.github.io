let timerId=0;
const setup = () => {
    window.addEventListener("resize", updateSize);
    updateSize();

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", startGame);

    let geklikt = document.getElementsByClassName("sprite")[0];
    geklikt.addEventListener("click", aantalKeerGeraakt);
}

const startGame = () => {

    let button = document.getElementsByTagName("button")[0];
    button.style.display = 'none';

    timerId =setInterval(moveSprite,1000);

}


const updateSize = () => {
    let playfield=document.getElementById("playField");
    playfield.style.width=window.innerWidth+"px";
    playfield.style.height=window.innerHeight+"px";
}

const moveSprite = () => {


    let sprite=document.getElementsByClassName("sprite")[0];
    sprite.style.display = 'block';
    let getal = Math.floor(Math.random() * 5);
    sprite.setAttribute('src','images/' + getal +  '.png');
    let playfield=document.getElementById("playField");
    let maxLeft =playfield.clientWidth - sprite.offsetWidth;
    let maxHeight= playfield.clientHeight - sprite.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    sprite.style.left=left+"px";
    sprite.style.top=top+"px";

}


const aantalKeerGeraakt = () => {
    let cijfer = document.getElementsByTagName("span")[0];
    cijfer.innerHTML++;

    let foto = document.getElementsByClassName("sprite")[0];

    if(foto.getAttribute("src") == "images/0.png") {
        clearInterval(timerId);
        alert("GAME OVER");
    }
    else {
        cijfer.innerHTML++;
        foto.style.display = 'none';
    }
}

window.addEventListener("load", setup);


