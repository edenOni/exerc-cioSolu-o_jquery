$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
})

$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true,
        },
        telefone: {
            required: true,
            telefone: true,
        },
        cep: { 
            required: true,
        },
        cpf: {
            required: true,
        }
    },
    messages: {
        nome: {
            required: "Por favor, insira seu nome",
            minlength: "O nome deve ter pelo menos 3 caracteres"
        },
        email: {
            required: "Por favor, insira seu e-mail",
            email: "Por favor, insira um e-mail válido"
        },
        telefone: {
            required: "Por favor, insira seu telefone"
        },
        cep: {
            required: "Por favor, insira seu cep"
        },
        mensagem: {
            required: "Por favor, insira seu cpf"
        }
    },
    submitHandler: function(form) {
        alert('Formulário enviado com sucesso!');
        form.submit();
    },
    invalidHandler: function(event, validate) {
        let camposIncorretos = validate.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }
});