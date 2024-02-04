window.onload = function windowLoaded(){
    console.log('Window Launched')

    const urlParams = new URLSearchParams(window.location.search);
    var airport = urlParams.get('airport');
    console.log(airport)

    var toolHeading = document.getElementById('toolHeader');
    toolHeading.innerHTML = "PTFS ATC TOOL - " + airport;
}