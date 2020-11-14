// voor de contactpagina

const verstuurd = document.getElementById('verstuurd');
const verzendknop = document.getElementById('verzendknop');
const berichtveld = document.getElementById('berichtveld');
const emailveld = document.getElementById('emailveld');
const image = document.getElementById('verstuurdimage');

verzendknop.addEventListener('click', (ea) => {

    if (emailveld.value !== '' && berichtveld.value !== '' && emailveld.value.indexOf('@') !== -1) {
        ea.preventDefault();
        verstuurd.className = 'green';
        verstuurd.innerText = 'Verstuurd!';
        image.className = 'show';
        setTimeout(hide, 3000);
    } else {
        ea.preventDefault();
        verstuurd.className = 'red';
        verstuurd.innerText = 'Vul minimaal e-mail adres en bericht in';
    }
})

function hide() {
    image.className = 'hide';
}