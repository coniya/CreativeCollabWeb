CSS Styles for LoginSignup Component
====================================

Container Styles
----------------

.. code:: css

    /* Container styles */
    .container {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 200px;
        width: 600px;
        background: #fff;
        padding-bottom: 30px;
    }

Header Styles
-------------

.. code:: css

    /* Header styles */
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9px;
        width: 100%;
        margin-top: 30px;
    }

Text Styles
-----------

.. code:: css

    /* Text in the header */
    .text {
        color: #3c009d;
        font-size: 48px;
        font-weight: 700;
    }

Underline Styles
----------------

.. code:: css

    /* Underline beneath the text */
    .underline {
        width: 61px;
        height: 6px;
        background: #3c009d;
        border-radius: 9px;
    }

Inputs Section Styles
---------------------

.. code:: css

    /* Input section styles */
    .inputs {
        margin-top: 55px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

Individual Input Styles
-----------------------

.. code:: css

    /* Individual input field styles */
    .input {
        display: flex;
        align-items: center;
        margin: auto;
        width: 480px;
        height: 80px;
        background: #eaeaea;
        border-radius: 6px;
    }

Icon within Input Styles
-----------------------

.. code:: css

    /* Icon within the input field */
    .input img {
        margin: 0px 30px;
        width: 20px;
    }

Text Input Styles
-----------------

.. code:: css

    /* Text input within the field */
    .input input {
        height: 50px;
        width: 400px;
        background: transparent;
        border: none;
        outline: none;
        color: #797979;
        font-size: 19px;
    }

Forgot Password Link Styles
---------------------------

.. code:: css

    /* Forgot password link styles */
    .forgot-password {
        padding-left: 62px;
        margin-top: 27px;
        color: #797979;
        font-size: 18px;
    }

Span within Forgot Password Link Styles
---------------------------------------

.. code:: css

    /* Span within the forgot password link */
    .forgot-password span {
        color: #4c00b4;
        cursor: pointer;
    }

Submit Container Styles
-----------------------

.. code:: css

    /* Container for submit buttons */
    .submit-container {
        display: flex;
        gap: 30px;
        margin: 60px auto;
    }

Submit Button Styles
--------------------

.. code:: css

    /* Submit button styles */
    .submit {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 220px;
        height: 59px;
        color: #fff;
        background: #4c00b4;
        border-radius: 50px;
        font-size: 19px;
        font-weight: 700;
        cursor: pointer;
    }

Grayed-out Submit Button Styles
-------------------------------

.. code:: css

    /* Grayed-out submit button styles */
    .gray {
        background: #EAEAEA;
        color: #676767;
    }
