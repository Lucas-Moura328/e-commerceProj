// Exemplo de JavaScript para desativar o envio do formulário, se tiver algum campo inválido.
(function() {
'use strict';

window.addEventListener('load', function() {
    // Selecione todos os campos que nós queremos aplicar estilos Bootstrap de validação customizados.
    var forms = document.getElementsByClassName('needs-validation');

    // Faz um loop neles e previne envio
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
    });
}, false);
})();
