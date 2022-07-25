function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta); // perigoso

        if (!conta) {
          alert('Conta inválida!');
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida!');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.split('').slice(0, -1).join('');
    },

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    cliqueBotoes() {
      document.addEventListener(
        'click',
        function (e) {
          const el = e.target;

          if (el.classList.contains('btn-num')) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains('btn-clear')) {
            this.clearDisplay();
          }

          if (el.classList.contains('btn-del')) {
            this.apagaUm();
          }

          if (el.classList.contains('btn-eq')) {
            this.realizaConta();
          }
        }.bind(this)
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
