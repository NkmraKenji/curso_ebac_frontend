const form = document.getElementById('form');
const limpar = document.getElementById('reset');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
});

limpar.addEventListener('click', function() {
    if (contatos.length >= 1) {
        window.location.reload();
    }
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome').value;
    const inputEmail = document.getElementById('email').value;
    const inputTel = document.getElementById('telefone').value;
    const inputCpf = document.getElementById('cpf').value;
    const inputCep = document.getElementById('cep').value;
    const inputAdress = document.getElementById('adress').value;

    contatos.push(inputNome, inputEmail, inputTel, inputCpf, inputCep, inputAdress);

    let linha = '<tr>';
    linha += `<td>${inputNome}</td>`;
    linha += `<td>${inputEmail}</td>`;
    linha += `<td>${inputTel}</td>`;
    linha += `<td>${inputCpf}</td>`;
    linha += `<td>${inputCep}</td>`;
    linha += `<td>${inputAdress}</td>`;
    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate( {
        rules: {
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required:true
            },
            cep: {
                required:true
            },
            adress: {
                required:true
            }
        },
        messages: {
            nome: '<span class="campoErrado">Por favor, insira o nome completo</span>',
            email: '<span class="campoErrado">Por favor, insira o seu email.</span>',
            telefone: '<span class="campoErrado">Por favor, insira o número de telefone</span>',
            cpf: '<span class="campoErrado">Por favor, insira o CPF</span>',
            cep: '<span class="campoErrado">Por favor, insira o nome completo</span>',
            adress: '<span class="campoErrado">Por favor, insira o endereço</span>',
            },
        SubmitHandler: function(form) {
            form.submit();
            alert("Formulário enviado com sucesso!")
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Há ${camposIncorretos} campos incorretos. Por favor, verifique-os e tente novamente!`)
            };
        }
    })
})