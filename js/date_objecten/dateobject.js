
const setup = () => {
    let today = new Date();
    let verjaardag = new Date(2002, 3,21);
    let verschil =  today.getTime() - verjaardag.getTime();
    let verschil2 = Math.round(verschil / (1000*3600*24));
    console.log(verschil2);

}
window.addEventListener("load",setup);