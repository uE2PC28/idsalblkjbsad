document.getElementById('openPix').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
    document.body.classList.add('popup-open');
});
  
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-open');
}
  
function submitForm() {
    var input1Value = document.getElementById('nome').value;
    var input2Value = document.getElementById('email').value;
    var input3Value = document.getElementById('pix').value;
  
    // Limpa mensagens de erro
    document.getElementById('errorNome').classList.remove('active');
    document.getElementById('errorEmail').classList.remove('active');
    document.getElementById('errorPix').classList.remove('active');
  
    if (!input1Value) {
      document.getElementById('errorNome').classList.add('active');
    }
  
    if (!input2Value) {
      document.getElementById('errorEmail').classList.add('active');
    }
  
    if (!input3Value) {
      document.getElementById('errorPix').classList.add('active');
    }
  
    if (input1Value && input2Value && input3Value) {
      // Adicione aqui a lógica de envio do formulário se todos os campos estiverem preenchidos
      document.getElementById('openPix').classList.add('active');
      closePopup();
    }
  }
  
$("#withdrawBtn").click(function() {
  var input1Value = document.getElementById('nome').value;
  var input2Value = document.getElementById('email').value;
  var input3Value = document.getElementById('pix').value;
  if(input1Value == "" || input2Value == "" || input3Value == "") {
    alert("Preencha suas informações de PIX!");
    return;
  }

  $("#warning").css("display", "block");
});