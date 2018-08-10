function ready() {
    textArea.elem = $('textarea')[0];
    $(textArea.elem).val('one two three four five');
    
    textArea.setSelectionRange(8, 13);
    textArea.elem.addEventListener("click", function () {
        console.log("Caret position: " + this.selectionStart);
    });
}

let textArea = {
    elem : {},
    deleteBetween: function(start, end){
        console.log(`delete Between ${start} and ${end}`);
        this.setVal($(this.elem).val().replace($(this.elem).val().slice(start, end), ''));
    },
    setSelectionRange : function(selectionStart, selectionEnd) {
        if (this.elem.setSelectionRange) {
            this.elem.focus();
            this.elem.setSelectionRange(selectionStart, selectionEnd);
        }
        else if (this.elem.createTextRange) {
            var range = this.elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    },
    setVal: function(str){
        $(this.elem).val(str);
    },
    backspace: function(){
        this.deleteBetween(this.elem.selectionStart - 5, this.elem.selectionStart) 
    },
    wordBeforeCaretPos: function(){
        let textAreaValue = $(this.elem).val();
        for(i = this.elem.selectionEnd-1;textAreaValue;i--){
            if(textAreaValue[i] == ' '){ // equal to space
                return ({ 'start' : i + 1, 'end' : this.elem.selectionEnd})
            }
        }
    },


}

document.addEventListener("DOMContentLoaded", ready);
