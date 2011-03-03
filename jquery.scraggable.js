(function($, undefined) {

$.fn.scraggable = function(options) {
    options = $.extend({}, $.fn.scraggable.defaults, options);

    return this.each(function() {
        process($(this), options);
    });
};

$.fn.scraggable.defaults = {
    axis: false,
    parent: false,
    sensitivity: 1,
    inverted: false,
    containment: false
};

function process(element, options) {
    var width = element.outerWidth(),
        height = element.outerHeight(),
        position = element.position(),
        offset = element.offset(),
        parent = null;

    if (options.containment == 'parent') {
        if (typeof(options.parent) == 'object' &&
            options.parent.jquery !== undefined) {
            parent = options.parent;
        }
        if (typeof(options.parent) == 'object' &&
            options.parent.tagName !== undefined) {
            parent = $(options.parent);
        }
        if (typeof(options.parent) == 'string') {
            parent = $(options.parent);
        }
        if (options.parent == false) {
            parent = element.parent();
        }
    }

    if (options.containment == false ||
        options.containment == 'document') {
        parent = $(window.document);
    }

    if (parent.get(0).addEventListener) {
        parent.get(0).addEventListener('mousewheel', onmousewhell, false);
        parent.get(0).addEventListener('DOMMouseScroll', onmousewhell, false);
    }

    var bounds = false;

    if (options.containment == 'document') {
        bounds = {
            top: 0, left: 0,
            bottom: parent.height(),
            right: parent.width()
        };
    } else if (options.containment) {
        var parentOffset = parent.offset();
        bounds = {
            top: parentOffset.top, left: parentOffset.left,
            bottom: parentOffset.top + parent.outerHeight(),
            right: parentOffset.left + parent.outerWidth()
        };
    }

    function onmousewhell(event) {
        var wheelDelta = getWheelDelta(event);
        var newOffset = {
            left: offset.left + (wheelDelta[0] * options.sensitivity),
            top: offset.top + (wheelDelta[1] * options.sensitivity)
        };

        if (bounds) {
            newOffset = fixOffset(newOffset);
        }

        setPosition(newOffset);
    }

    function fixOffset(newOffset) {
        if (newOffset.left < bounds.left) {
            newOffset.left = bounds.left;
        }
        if (newOffset.left + width > bounds.right) {
            newOffset.left = bounds.right - width;
        }
        if (newOffset.top < bounds.top) {
            newOffset.top = bounds.top;
        }
        if (newOffset.top + height > bounds.bottom) {
            newOffset.top = bounds.bottom - height;
        }
        return newOffset;
    }

    function setPosition(newOffset) {
        var diffTop = newOffset.top - offset.top;
        var diffLeft = newOffset.left - offset.left;
        
        if (!options.axis || options.axis == 'x') {
            position.left = position.left + (options.inverted ? diffTop : diffLeft);
        }
        if (!options.axis || options.axis == 'y') {
            position.top = position.top + (options.inverted ? diffLeft : diffTop);
        }

        element.css({
            top: position.top,
            left: position.left
        });

        offset = newOffset;
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
        if (event.wheelDeltaX != null && event.wheelDeltaY != null) {
            return [event.wheelDeltaX / 60, event.wheelDeltaY / 60];
        }
        // OPERA
        if (event.detail != null && event.axis == null) {
            return [0, -event.detail / 2];
        }

        return [0, 0];
    }
}

})(jQuery);