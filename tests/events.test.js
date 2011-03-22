AsyncTestCase("events", {
    emulateMouseWheelEvent: function(element) {
        var event = document.createEvent('MouseEvents');

        event.initMouseEvent('mousewheel', true, true, window, 0, 0, 0, 0, 0,
                                false, false, false, false, 0, null);

        return !element.dispatchEvent(event);
    },

    testDragEventIsTriggered: function(queue) {
        var element = $('<div></div>')
            .appendTo(document.body)
            .scraggable();

        queue.defer(function(pool) {
            element.bind('drag', pool.add(function() {}))

            this.emulateMouseWheelEvent(element.get(0));
        });
    },

    testDragStartEventIsTriggered: function(queue) {
        var element = $('<div></div>')
            .appendTo(document.body)
            .scraggable();

        queue.defer(function(pool) {
            element.bind('dragstart', pool.add(function() {}))

            this.emulateMouseWheelEvent(element.get(0));
        });
    },

    testDragStopEventIsTriggered: function(queue) {
        var element = $('<div></div>')
            .appendTo(document.body)
            .scraggable();

        queue.defer(function(pool) {
            element.bind('dragstop', pool.add(function() {}))

            this.emulateMouseWheelEvent(element.get(0));
        });
    },

    testDragStartEventPassesPositionOfTheElement: function(queue) {
        var element = $('<div></div>')
            .appendTo(document.body)
            .scraggable();

        queue.defer(function(pool) {
            element.bind('dragstart', pool.add(function(event, ui) {
                assertNumber(ui.position.top);
                assertNumber(ui.position.left);
            }));

            this.emulateMouseWheelEvent(element.get(0));
        });
    },

    testDragEventPassesPositionOfTheElement: function(queue) {
        var element = $('<div></div>')
            .appendTo(document.body)
            .scraggable();

        queue.defer(function(pool) {
            element.bind('drag', pool.add(function(event, ui) {
                assertNumber(ui.position.top);
                assertNumber(ui.position.left);
            }));

            this.emulateMouseWheelEvent(element.get(0));
        });
    },

    testDragStopEventPassesPositionOfTheElement: function(queue) {
        var element = $('<div></div>')
            .appendTo(document.body)
            .scraggable();

        queue.defer(function(pool) {
            element.bind('dragstop', pool.add(function(event, ui) {
                assertNumber(ui.position.top);
                assertNumber(ui.position.left);
            }));

            this.emulateMouseWheelEvent(element.get(0));
        });
    }

});