function relogio() {
    function criaHoraDosSegundos(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC",
      });
    }
  
    const relogio = document.querySelector(".relogio");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");
    let segundos = 0;
    let timer;
  
    function iniciaRelogio() {
      timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
      }, 1000);
      relogio.classList.add('pulsando'); // Adiciona a animação quando iniciar
    }
  
    iniciar.addEventListener("click", function () {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    });
  
    pausar.addEventListener("click", function () {
      clearInterval(timer);
      relogio.classList.add('pausado');
      relogio.classList.remove('pulsando'); // Remove a animação quando pausado
    });
  
    zerar.addEventListener("click", function () {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      relogio.classList.remove('pulsando'); // Remove a animação quando zerado
      segundos = 0;
    });
  }
  
  relogio();
  