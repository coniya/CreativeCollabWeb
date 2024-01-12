CSS Styles for Web Page
=======================

Global Styles
-------------

.. code:: css

    * {
        box-sizing: border-box;
    }

    /*
    The universal selector (*) applies box-sizing: border-box to all elements.
    This ensures consistent box models by including padding and borders in the element's total width and height.
    */

    body {
        margin: 0;
    }

    /*
    The body element has margin: 0 to remove default margin.
    */

Container Styles
----------------

.. code:: css

    .container {
        margin: 1rem;
        text-align: center;
    }

    /*
    The .container class sets margin and text alignment for a central container.
    */

Navigation Bar Styles
---------------------

.. code:: css

    .nav {
        background-color: white;
        color: black;
        display: stretch;
        justify-content: space-between;
        gap: 4rem;
        padding: .5rem;
    }

    /*
    The .nav class styles the navigation bar.
    It sets background color, text color, display, justification, gap, and padding.
    */

    .site-title {
        font-size: 1rem;
    }

    /*
    The .site-title class styles the site title within the navigation bar.
    It sets the font size.
    */

    .nav ul {
        padding: 0;
        margin: 1px;
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    /*
    The .nav ul class styles the unordered list within the navigation bar.
    It sets padding, margin, list style, display, and gap.
    */

    .nav a {
        color: inherit;
        text-decoration: none;
        height: 100%;
        display: flex;
        align-items: center;
        padding: .1rem;
    }

    /*
    The .nav a class styles links within the navigation bar.
    It sets color, text decoration, height, display, alignment, and padding.
    */

    .nav li.active {
        background-color: #555;
    }

    /*
    The .nav li.active class styles the active list item within the navigation bar.
    It sets the background color.
    */

    .nav li:hover {
        background-color: #777;
    }

    /*
    The .nav li:hover class styles list items on hover within the navigation bar.
    It sets the background color.
    */
