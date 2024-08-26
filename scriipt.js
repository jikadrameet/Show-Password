let eye = document.querySelector('.eye');
let input = document.querySelector('.input');

eye.onclick = function(){
    if (input.type === 'password') {
        input.type = 'text';
        eye.src="show-icon.png"
    } else {
        input.type = 'password';
        eye.src = 'hide-eye.png';
    }
}

