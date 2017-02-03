(function() {
  var linkUsuario = $('#linkUsuario');
  var linkProfissional = $('#linkProfissional');
  var formUsuario = $('#frmUsuario');
  var formProfissional = $('#frmProfissional');
  var verificarEndereco = $('#chkConsultorio');

  linkUsuario.on("click", function() {
    formUsuario.show();
    formProfissional.hide();
  });

  linkProfissional.on("click", function() {
    formProfissional.show();
    formUsuario.hide();
  });

  verificarEndereco.on("change", function() {
    var self = this;
    var enderecoComercial = $("#enderecoComercial");

    if (self.checked) {
      enderecoComercial.show();
    } else {
      enderecoComercial.hide();
    }
  });

})();
