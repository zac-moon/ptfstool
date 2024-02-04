console.log('Site Launched')

function airportSelected() {
    event.preventDefault()
    console.log('Airport Selected');
    var airport = document.forms["airportSelectForm"]["airportSelect"].value;
    console.log('Selected :'+airport);
    window.location.href = 'tool.html';
    console.log('redirected')
}