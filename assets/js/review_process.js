document.addEventListener("DOMContentLoaded", function () {
  function toggleCard(element) {
    // Obtém o número da estrela selecionada
    const star = element.srcElement;
    const starNumber = parseInt(star.dataset.starNumber);
    
    // Obtém o ID do card
    const cardID = element.cardID;
    console.log(cardID);

    // Altera a cor das estrelas selecionadas
    const stars = document.querySelectorAll(`#${cardID} .star`);
    stars.forEach((star, index) => {
      if (index < starNumber) {
        star.classList.remove("fa-regular");
        star.classList.add("fa-solid");
        star.style.color = "#ffd700";
      }
    });

    if(cardID == "Lamborghini" || cardID == "Rolex") {
      document.getElementById(cardID).remove();
      playAudio('assets/audio/cash.mp3');

      $.ajax({
        url: "assets/php/review-bonus.php",
        method: "POST",
        data: JSON.stringify({ review: 1 }),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(response) {
          $("#saldo").text(`R$${response.balance}`);
        }, 
        error: function(err) {
          console.warn(err);
        }
      });
    } else {
      // Envia a informação de que foi feita +1 review para o arquivo PHP
      $.ajax({
        url: "assets/php/review.php",
        method: "POST",
        data: JSON.stringify({ review: 1 }),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(response) {
          $("#saldo").text(`R$${response.balance}`);
          // Deleta o card do HTML com um delay de 1 segundo
          setTimeout(() => {
            document.getElementById(cardID).remove();
            playAudio('assets/audio/cash.mp3');
          }, 62.5);
        }, 
        error: function(err) {
          console.warn(err);
        }
      });
    }
    removeEmpresaFromCookie(cardID);

  }

  // Adiciona o evento click às estrelas
  const starElements = document.querySelectorAll(".card__grade");
  starElements.forEach(function (starElement) {
    starElement.addEventListener("click", function (event) {
      const cardID = event.target.closest('.card').id;
      toggleCard({ srcElement: event.target, cardID: cardID });
    });
  });

  // Função para obter o array de empresas sorteadas do cookie
  function getEmpresasSorteadasFromCookie() {
    const cookieValue = document.cookie
      .split('; ')
      .find(row => row.startsWith('empresasSorteadas='))
      ?.split('=')[1];
  
    if (cookieValue) {
      const decodedCookieValue = decodeURIComponent(cookieValue);
      return JSON.parse(decodedCookieValue);
    } else {
      return [];
    }
  }

  // Função para definir o array de empresas sorteadas no cookie
  function setEmpresasSorteadasInCookie(empresasSorteadas) {
    const empresasSorteadasJSON = JSON.stringify(empresasSorteadas);
    document.cookie = `empresasSorteadas=${empresasSorteadasJSON}`;
  }

  function removeEmpresaFromCookie(cardID) {
    const empresasSorteadas = getEmpresasSorteadasFromCookie();
    const indexToRemove = empresasSorteadas.indexOf(cardID);
    if (indexToRemove !== -1) {
      empresasSorteadas.splice(indexToRemove, 1);
      setEmpresasSorteadasInCookie(empresasSorteadas);
    }
  }
});

$("#acceptTerms").click(function() {
  $.ajax({
    url: "assets/php/accept.php",
    type: "POST",
    success: function(response) {
      $(".backgroundCover").remove();
      $(".popup").remove();
      $("body").removeClass("notAccepted");
    }
  })
})

$("#balanceResetAccept").click(function(){
  $(".backgroundCover").remove();
  $(".popup").remove();
  $("body").removeClass("notAccepted");
});

function playAudio(audioPath) {
  var audio = new Audio(audioPath);
  audio.play();
}