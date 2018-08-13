var SEQController = SEQController || {};

SEQController.onDomReady = function () {
    SEQController.isQuestionTextOverflow();
    $(document).ready(function () {
        $(".option-block-container").sortable();
        $(".option-block-container").disableSelection();
    })
}

SEQController.isQuestionTextOverflow = function () {
    if ($('.hiding-container').height() > $('.expand-container').height()) {
        $('.expand-button').css('display', 'none');
    } else {
        $('.expand-button').css('display', 'block');
    }
}

SEQController.toggleQuestionText = function(){
    if($('.hiding-container').hasClass('expanded')){
        $('.hiding-container').css('height', '50%');
        $('.hiding-container').removeClass('expanded')
        $(".expand-button img").toggleClass('flip');
        $('.hiding-container').css('padding-bottom', '0px');
        $('.expand-button').css('bottom', '5%');
    } else {
        var expandButtonBottom = parseFloat($('.expand-button').css('bottom'));
        $('.hiding-container').addClass('expanded')
        $('.hiding-container').css('height', 'auto');
        $(".expand-button img").toggleClass('flip');
        $('.hiding-container').css('padding-bottom', $(".expand-button").height()+'px');
        expandButtonBottom = expandButtonBottom - ($('.hiding-container').height() - $('.question-container').height());
        $('.expand-button').css('bottom', expandButtonBottom+'px')
    }
}

SEQController.onDomReady()

