const setup =() => {
    let elementen = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < elementen.length;i++) {
        elementen[i].className="opvallend belangrijk";
    }
}
window.addEventListener("load", setup);