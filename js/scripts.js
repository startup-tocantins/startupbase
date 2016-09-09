$(document).ready(function(){
  
  var ref = new Firebase("https://startupto.firebaseio.com/");

  $("#cadastro").submit(function(event) {
    console.log('submit');
    ref.push().set({
      nome: $("#nome").val(),
      phone: $("#phone").val(),
      url: $("#url").val(),
      email: $("#email").val(),
      mensagem: $("#mensagem").val(),
      data_cadastro: Firebase.ServerValue.TIMESTAMP
    });

    $("input[type=text], textarea").val("");
    event.preventDefault();
    alert("Cadastro realizado com sucesso!");
    return false;   
  });

});