document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Clear any previous errors
    document.getElementById('name-error').innerText = '';
    document.getElementById('email-error').innerText = '';
    document.getElementById('message-error').innerText = '';

    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate the form values
    if (name === '') {
        document.getElementById('name-error').innerText = 'Por favor, introduce tu nombre.';
    } else if (email === '') {
        document.getElementById('email-error').innerText = 'Por favor, introduce tu correo electrónico.';
    } else if (!email.includes('@')) {
        document.getElementById('email-error').innerText = 'Por favor, introduce un correo electrónico válido.';
    } else if (message === '') {
        document.getElementById('message-error').innerText = 'Por favor, escribe un mensaje.';
    } else {
        // Form is valid, you can submit it
        console.log('Formulario válido, se puede enviar.');
    }
});
