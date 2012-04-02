# jQuery.scraggable

**jQuery.scraggable** is a plugin that enables single- and multi-dimensional (depending on browser) element dragging through the mouse's scroll wheel.

## Usage

    $(selector).scraggable([options]);

## Options

### `axis`

Constrains dragging to either the horizontal (x) or vertical (y) axis. Possible values:

    'x', 'y', false

Default `false`

### `parent`

A DOM element which will receive the `mousewheel` event. Possible values:

    'selector', $('selector'), document.getElementById('elementId')

Default: `window.document`

### `sensitivity`

An abstract `float` value for scroll sensitivity to regulate dragging speed. Default: `1`

### `inverted`

`Boolean` value to invert dragging axis. Default: `false`

### `containment`

Constrains dragging to within the bounds of the specified element or region. Possible values:

     'parent', 'document', [x1, y1, x2, y2], false

Default: `false`

## Events

### `dragstart`

This event is triggered when dragging starts (the scroll wheel begins to move).

### `drag`

This event is triggered during dragging (when the when the scroll wheel is moving).

### `dragstop`

This event is triggered when dragging stops (the scroll wheel finishes moving).

## Methods

### `enable`

Enable the scraggable.

### `disable`

Disable the scraggable.

## Compatibilty

Tested in:

* Chrome 9.0
* Firefox 3.6
* Opera 11 (single-dimensional)