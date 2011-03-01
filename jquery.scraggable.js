(function($) {

if (window.document.addEventListener) {
    window.document.addEventListener('mousewheel', scrag, false);
}

function scrag(event) {
    var deltaX = 0;
    var deltaY = 0;

    if (event.wheelDeltaX !== undefined) {
        deltaX = event.wheelDeltaX;
    }
    if (event.wheelDeltaY !== undefined) {
        deltaY = event.wheelDeltaY;
    }

    $(elements).each(function(index, element) {
        element.css({
            top: element.position().top + deltaY,
            left: element.position().left + deltaX
        });
    });

}

var elements = [];

$.fn.scraggable = function(options) {
     elements.push($(this));
};

})(jQuery);