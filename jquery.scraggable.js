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
    containment: false
};

function process(element, options) {
    var width = element.outerWidth();
    var height = element.outerHeight();
    var position = element.position();
    var offset = element.offset();
    var parent = null;

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

        position = fixPosition(
            offset.left + (wheelDelta[0] * options.sensitivity),
            offset.top + (wheelDelta[1] * options.sensitivity));

        element.css({
            top: position.top,
            left: position.left
        });
    }

    function fixPosition(newLeft, newTop) {
        if (newLeft < bounds.left) {
            newLeft = bounds.left;
        }
        if (newLeft + width > bounds.right) {
            newLeft = bounds.right - width;
        }
        if (newTop < bounds.top) {
            newTop = bounds.top;
        }
        if (newTop + height > bounds.bottom) {
            newTop = bounds.bottom - height;
        }

        var newPos = {
            top: position.top + newTop - offset.top,
            left: position.left + newLeft - offset.left
        };

        offset.top = newTop;
        offset.left = newLeft;

        return newPos;
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