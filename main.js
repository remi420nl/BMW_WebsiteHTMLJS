// Deze JQuery is voor de Modellen pagina

$('#tabs-nav li:first-child').addClass('active');
$('.tab-inhoud').hide();
$('.tab-inhoud:first').show();


$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-inhoud').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});

//hieronder is voor de Nieuwsbrief pagina

const naam = document.getElementById('naam');
const email = document.getElementById('email');
const geboortedatum = document.getElementById('geboortedatum');
const form = document.getElementById('submit');
const foutmelding = document.getElementById('error');


form.addEventListener('click', (e) => {
    let melding = []
    foutmelding.innerText = ''
    foutmelding.className = '';
    if (naam.value === '' || naam.value == null) {
        melding.push('Naam invullen svp')
    }


    if (email.value.indexOf("@") === -1) {
        melding.push(' Geen geldig emailadres ingevuld ')
    }

    if (geboortedatum.value == '') {

        melding.push('Geboortedatum ongeldig ')
    }


    if (melding.length > 0) {
        e.preventDefault();
        foutmelding.className = 'red';
        foutmelding.innerText = melding.join(',')
    }

    if (melding.length == 0) {
        e.preventDefault();
        foutmelding.innerText = ''
    }

    if (naam.value !== '' && email.value !== '' && geboortedatum.value !== '' && email.value.indexOf("@") !== -1) {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td')
        let name = document.createTextNode(naam.value);
        let adres = document.createTextNode(email.value);
        let datum = document.createTextNode(geboortedatum.value);

        td1.appendChild(name)
        td2.appendChild(adres)
        td3.appendChild(datum)
        row.appendChild(td1)
        row.appendChild(td2)
        row.appendChild(td3)
        document.getElementById('uitvoer').appendChild(row);
        row.value = '';
        foutmelding.className = 'green';
        foutmelding.innerText = 'Aanmelding gelukt!';

    }
});


