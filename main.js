const form = document.getElementById('valid-form');

let formvalid = true;

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let campoA = parseFloat(document.getElementById('A').value);
    let campoB = parseFloat(document.getElementById('B').value);

    if (numbervalid(campoA, campoB)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});