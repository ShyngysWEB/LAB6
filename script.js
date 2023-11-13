document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentValue = '';

    function updateDisplay() {
        display.value = currentValue;
    }

    function clearDisplay() {
        currentValue = '';
        updateDisplay();
    }

    function appendValue(value) {
        currentValue += value;
        updateDisplay();
    }

    function deleteLastCharacter() {
        currentValue = currentValue.slice(0, -1);
        updateDisplay();
    }

    function squareRoot() {
        try {
            currentValue = Math.sqrt(parseFloat(currentValue)).toString();
            updateDisplay();
        } catch (error) {
            currentValue = 'Error';
            updateDisplay();
        }
    }

    function powerOfTwo() {
        try {
            currentValue = Math.pow(parseFloat(currentValue), 2).toString();
            updateDisplay();
        } catch (error) {
            currentValue = 'Error';
            updateDisplay();
        }
    }

    function divide() {
        if (currentValue.includes('/ 0')) {
            currentValue = 'Error';
            updateDisplay();
        } else {
            appendValue('/');
        }
    }

    function calculate() {
        try {
            currentValue = eval(currentValue).toString();
            updateDisplay();
        } catch (error) {
            currentValue = 'Error';
            updateDisplay();
        }
    }


    document.getElementById('btn-0').addEventListener('click', function () {
        appendValue('0');
    });

    document.getElementById('btn-1').addEventListener('click', function () {
        appendValue('1');
    });

    document.getElementById('btn-2').addEventListener('click', function () {
        appendValue('2');
    });

    document.getElementById('btn-3').addEventListener('click', function () {
        appendValue('3');
    });

    document.getElementById('btn-4').addEventListener('click', function () {
        appendValue('4');
    });

    document.getElementById('btn-5').addEventListener('click', function () {
        appendValue('5');
    });

    document.getElementById('btn-6').addEventListener('click', function () {
        appendValue('6');
    });

    document.getElementById('btn-7').addEventListener('click', function () {
        appendValue('7');
    });

    document.getElementById('btn-8').addEventListener('click', function () {
        appendValue('8');
    });

    document.getElementById('btn-9').addEventListener('click', function () {
        appendValue('9');
    });

    document.getElementById('btn-add').addEventListener('click', function () {
        appendValue('+');
    });

    document.getElementById('btn-subtract').addEventListener('click', function () {
        appendValue('-');
    });

    document.getElementById('btn-multiply').addEventListener('click', function () {
        appendValue('*');
    });

    document.getElementById('btn-divide').addEventListener('click', function () {
        divide();
    });

    document.getElementById('btn-delete').addEventListener('click', function () {
        deleteLastCharacter();
    });

    document.getElementById('btn-square-root').addEventListener('click', function () {
        squareRoot();
    });

    document.getElementById('btn-power-of-two').addEventListener('click', function () {
        powerOfTwo();
    });

    document.getElementById('btn-clear').addEventListener('click', function () {
        clearDisplay();
    });

    document.getElementById('btn-equals').addEventListener('click', function () {
        calculate();
    });

    document.getElementById('btn-1').click(); 
    document.getElementById('btn-add').click(); 
    document.getElementById('btn-2').click();  
    document.getElementById('btn-equals').click();  

});
