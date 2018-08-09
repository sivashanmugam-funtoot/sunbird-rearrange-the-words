function ready() {
    let textarea = $('textarea');
    textarea.val('one two three four five');
    
    createSelection(textarea[0], 0, 7);
    setCaretToPos(textarea[0], 10);
    textarea[0].addEventListener("click", function () {
        console.log("Caret position: " + this.selectionStart);
    });
}


function backspace() {

}

function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}

function createSelection(field, start, end) {
    if (field.createTextRange) {
        var selRange = field.createTextRange();
        selRange.collapse(true);
        selRange.moveStart('character', start);
        selRange.moveEnd('character', end);
        selRange.select();
        field.focus();
    } else if (field.setSelectionRange) {
        field.focus();
        field.setSelectionRange(start, end);
    } else if (typeof field.selectionStart != 'undefined') {
        field.selectionStart = start;
        field.selectionEnd = end;
        field.focus();
    }
}
    function setCaretToPos(input, pos) {
        setSelectionRange(input, pos, pos);
    }

    document.addEventListener("DOMContentLoaded", ready);
