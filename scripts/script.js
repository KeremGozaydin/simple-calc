let addToInput = (value) => {
    let input = $('input');
    input.val(input.val() + value);
}

let deleteFromInput = () => {
    let input = $('input');
    input.val(input.val().slice(0, input.val().length - 1));
}

let calculate = () => {
    let input = $('input');
    input.val(eval(input.val()));
}

let clearInput = () => {
    let input = $('input');
    input.val('');
}

let percentage = () => {
    let input = $('input');
    input.val(eval(input.val() / 100));
}

let operators = (value) => {
    let input = $('input');
    if (input.val().length > 0) {
        let lastChar = input.val().charAt(input.val().length - 1);
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            input.val(input.val().slice(0, input.val().length - 1) + value);
        } else {
            input.val(input.val() + value);
        }
    }
}

let main = () => {
    // Event listener for all buttons
    $('.box').on('click', (btn) => {
        let data = btn.currentTarget.getAttribute('data-value');
        if (data === '=') {
            calculate();
        } else if (data === 'ac') {
            clearInput();
        } else if (data === 'del') {
            deleteFromInput();
        } else if (data === '%') {
            percentage();
        } else if (data === '+' || data === '-' || data === '*' || data === '/') {
            operators(data);
        } else {
            addToInput(data);
        }
    });
    // Event listener for keyboard
}

$(document).ready(main);