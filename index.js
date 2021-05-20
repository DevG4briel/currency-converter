const input = document.getElementById('myInput');

input.addEventListener('input', function(event){
    let convertido = event.target.value

    let usdValue = document.getElementById('usdId');
    let resultadousd
    resultadousd = convertido * 0.19;
    usdValue.innerHTML = `${resultadousd.toFixed(2)}`;

    let cadValue = document.getElementById('cadId');
    let resultadocad
    resultadocad = convertido * 0.23;
    cadValue.innerHTML = `${resultadocad.toFixed(2)}`;

    let eurValue = document.getElementById('eurId');
    let resultadoeur
    resultadoeur = convertido * 0.16;
    eurValue.innerHTML = `${resultadoeur.toFixed(2)}`;

})