const result = document.getElementById('result');
        const acButton = document.getElementById('ac');

        function addToResult(value) {
            result.value += value;
        }

        function calculateResult() {
                result.value = eval(result.value);
        }

        function clearResult() {
            result.value = '';
        }