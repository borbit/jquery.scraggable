(function($, undefined) {

var defaultOptions = {
    axis: false,
    sensitivity: 1,
    containment: 'parent'
};

$.fn.scraggable = function(options) {
    options = $.extend(defaultOptions, options);

    if (options.parent === undefined) {
        options.parent = window.document;
    }

    if (options.parent.addEventListener) {
        options.parent.addEventListener('mousewheel', onmousewhell, false);
        options.parent.addEventListener('DOMMouseScroll', onmousewhell, false);
    }

    var element = $(this);
    var width = element.outerWidth();
    var height = element.outerHeight();
    var position = element.position();
    var bounds = false;
    
    if (options.containment == 'parent') {
        bounds = {
            top: 0, left: 0,
            bottom: $(options.parent).height(),
            right: $(options.parent).width()
        };
    }
    

    function onmousewhell(event) {
        var wheelDelta = getWheelDelta(event);

        position = fixNewPosition(
            position.left + (wheelDelta[0] * options.sensitivity),
            position.top + (wheelDelta[1] * options.sensitivity));

        element.css({
            top: position.top,
            left: position.left
        });
    }

    function fixNewPosition(newLeft, newTop) {
        if(newLeft < bounds.left) {
            newLeft = bounds.left;
        }
        if(newLeft + width > bounds.right) {
            newLeft = bounds.right - width;
        }
        if(newTop < bounds.top) {
            newTop = bounds.top;
        }
        if(newTop + height > bounds.bottom) {
            newTop = bounds.bottom - height;
        }

        return {top: newTop, left: newLeft};
    }

    function getWheelDelta(event) {
        // FIREFOX
        if (event.axis != null) {
            if (event.axis == event.HORIZONTAL_AXIS) {
                return [-event.detail / 2, 0];
            }
            if (event.axis == event.VERTICAL_AXIS) {
                return [0, -event.detail / 2];
            }
        }

        // WEBKIT
        if (event.wheelDeltaX != null &&
            event.wheelDeltaY != null) {
            return [event.wheelDeltaX / 60,
                    event.wheelDeltaY / 60];
        }

        // OPERA
        if (event.detail != null && event.axis == null) {
            return [0, -event.detail / 2];
        }

        return [0, 0];
    }
};

})(jQuery);