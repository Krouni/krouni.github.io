const setup = () => {

    const lilist = document.querySelectorAll("li");
    for(let i = 0; i < lilist.length; i++) {
        lilist[i].setAttribute('class','listitem');
        lilist[i].style.color  = "red";
    }

    const img = document.createElement("img");
    img.src = "danku.jpg";
    document.body.appendChild(img);
}

window.addEventListener("load", setup);