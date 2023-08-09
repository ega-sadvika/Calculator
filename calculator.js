let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(value) {
        calculation += value;
        displayCalculator();
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculator() {
        document.querySelector('.js-display').innerHTML = /* `${calculation}` (or) */ calculation;
      }
