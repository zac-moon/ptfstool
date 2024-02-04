console.log('Site Launched')

function airportSelected() {
    event.preventDefault()
    console.log('Airport Selected');
    var airport = document.forms["airportSelectForm"]["airportSelect"].value;
    console.log('Selected :'+airport);
    
    var nextWindow = "tool.html?airport=" + encodeURIComponent(airport);

    window.location.href = nextWindow;
    console.log('redirected')
}