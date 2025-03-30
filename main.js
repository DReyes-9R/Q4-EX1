function calculateProduct() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            alert(`The product of a and b is ${num1 * num2}`);
        }

        function calculatePower() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            alert(`a raised to the power of b is ${Math.pow(num1, num2)}`);
        }

        function calculateRemainder() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            alert(`The remainder of a divided by b is ${num1 % num2}`);
        }

        function checkEquality() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            alert(`Is a equal to b? ${num1 === num2}`);
        }

        function reloadPage() {
            document.getElementById('num1').value = "";
            document.getElementById('fname').value = ""; 
            document.getElementById('guestName').innerHTML = "";
            alert(`are you sure you want to REFRESH?`);
        }
        
        function greet() {
            var name = document.getElementById('fname').value;

            document.getElementById('guestName').innerHTML = `Hello ${name}, My name is Astro.`;
            }


        function roundNumber() {
            let num = parseFloat(document.getElementById('num1').value);
            alert(`Rounded value of a: ${Math.round(num)}`);
        }

        function squareRoot() {
            let num = parseFloat(document.getElementById('num1').value);
            alert(`Square root of a: ${Math.sqrt(num)}`);
        }

        function power() {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            alert(`a raised to b: ${Math.pow(num1, num2)}`);
        }

    function randomNumber() {
            alert(`Random number between 0 and 1: ${Math.random()}`);
        }

    function randomRoundedNumber() {
            alert(`Random number between 0 and 10: ${Math.round(Math.random() * 10)}`);
        }
