const setup = () => {
    let tekst = "{\"voornaam\":\"Jan\",\"familienaam\":\"Janssens\",\"geboorteDatum\":null,\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"},\"isIngeschreven\":true,\"namenVanExen\":[\"Sofie\",\"Berta\",\"Philip\",\"Albertoooo\"],\"aantalAutos\":2}";
    let student = JSON.parse(tekst);
    console.log(student.voornaam);
}
window.addEventListener("load",setup);