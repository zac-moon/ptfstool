console.log('Site Launched')

function airportSelected() {
    console.log('Airport Selected');
    var airport = document.forms["airportSelectForm"]["airportSelect"].value;
    console.log('Selected :'+airport);
    window.location.href = 'https://zac-moon.github.io/ptfstool/tool.html';
}