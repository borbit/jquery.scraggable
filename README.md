#About

**jQuery.scraggable** is a plugin that lets you drag elements by means of scrolling, single and multi dimensional (depends on browser). Implementation of this plugin was inspired by working on [HTML5 puzzle](http://puzzle.borbit.org) game you can [see now](http://puzzle.borbit.org). To see it in action just go to [the link](http://puzzle.borbit.com), wait until a puzzle is loaded (beware! puzzle can be > 3 mb) and try to scroll it (sure if your monitor is not bigger than a puzzle). Or you can go to the [plugin's site](http://sorry-no-link-yet) to see all possibilities in action.

To let your element(s) be scraggable just:

    $(expression).scraggable([options]);

## Options

* *axis*

    Constrains dragging to either the horizontal (x) or vertical (y) axis. Possible values:

        'x', 'y', false

    Default <code>false</code>

* *parent*

    A DOM element which will receive the <code>mousewheel</code> event. Possible values:

        'selector', $('selector'), document.getElementById('elementId')

    Default: <code>window.document</code>

* *sensitivity*

    An abstract <code>float</code> value for scroll sensitivity to regulate dragging speed. Default: <code>0</code>

* *inverted*

    <code>Boolean</code> value to invert dragging axis. Default: <code>false</code>

* *containment*

    Constrains dragging to within the bounds of the specified element or region. Possible values:

         'parent', 'document', [x1, y1, x2, y2], false

    Default: <code>false</code>

## Methods

* *enable*

    Enable the scraggable.

* *disable*

    Disable the scraggable.

* *update*

    Update location. Note: Dragging of an element depends on initial position of the element and its containment. So if any of this elements changed its position or size this method should be called.

## Compatibilty

Tested in:

* Chrome 9.0
* Firefox 3.6
* Opera 11 (single-dimensional)