const setup = () => {

   let tekstPrint = document.getElementById("normaal");
   tekstPrint.addEventListener("click",tekstUitPrinten);

   let uitprintenSpatie = document.getElementById("spaties");
   uitprintenSpatie.addEventListener("click",spaties);

   let uitprintenZonderSpatie = document.getElementById("geenSpaties");
   uitprintenZonderSpatie.addEventListener("click", geenSpaties);
}

const tekstUitPrinten = () => {
    let tekst = document.getElementById("tekst");
    let woorden = tekst.value;
    console.log(woorden);
}

const spaties = () => {
    let tekst = document.getElementById("tekst").value;
    console.log(maakMetSpaties(tekst));
}

const geenSpaties = () => {
    let tekst = document.getElementById("tekst").value;

    let result = tekst.split(' ').join('');
    console.log(result);
    return result;
}

const maakMetSpaties = (inputText) => {
    let result = "";
    let tekst2 = inputText.replaceAll(' ', '');
     result = tekst2.split('').join(' ');
    return result;
}
window.addEventListener("load", setup);