# jQuery.scraggable

**jQuery.scraggable** is a plugin that enables single- and multi-dimensional (depending on browser) element dragging through the mouse's scroll wheel.

## Usage

    $(selector).scraggable([options]);

## Options

### `axis`

Constrains dragging to either the horizontal (x) or vertical (y) axis. Possible values:

* `'x'`
* `'y'`
* `false`

Default `false`

### `parent`

A DOM element which will receive the `mousewheel` event. Possible values:

* `'selector'`
* `$('selector')`
* `document.getElementById('elementId')`

Default: `window.document`

### `sensitivity`

An abstract `float` value for scroll sensitivity to regulate dragging speed. Default: `1`

### `inverted`

`Boolean` value to invert dragging axis. Default: `false`

### `containment`

Constrains dragging to within the bounds of the specified element or region. Possible values:

* `'parent'`
* `'document'`
* `[x1, y1, x2, y2]`
* `false`

Default: `false`

## Events

### `dragstart`

This event is triggered when dragging starts (the scroll wheel begins to move).

### `drag`

This event is triggered during dragging (when the scroll wheel is moving).

### `dragstop`

This event is triggered when dragging stops (the scroll wheel finishes moving).

## Methods

### `enable`

Enable the scraggable.

### `disable`

Disable the scraggable.

## License 

(The MIT License)

Copyright (c) 2011-2012 Serge Borbit &lt;serge.borbit@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.