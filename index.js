  // Set database variable
  var database = firebase.database();



  function enviar() {
    var usuario = document.getElementById('usuario').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    var musica = document.getElementById('musica').value
    var filme = document.getElementById('filme').value
  
    database.ref('usuario/' + usuario).set({
      usuario : usuario,
      email : email,
      senha : senha,
      musica : musica,
      filme : filme
    })
  
    alert('Informções Salvas.')
  }
  