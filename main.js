$(document).ready(function(){

    $('#cpf').mask('000.000.000-00', {
        reverse: true,
        placeholder: '000.000.000-00'
    });


    $('#cep').mask('00000-000', {
        reverse: true,
        placeholder: '00000 - 000'
    });

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },

            cep: {
                required: true
            }
        },
        messages: {
            cpf: 'Seu CPF é requerido, por gentileza, insira-o',
            cep: 'Seu CEP é requerido, por gentileza, insira-o'
        }
    })

})