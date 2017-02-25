$(document).ready(function () {

  $('#ingresar').on('click',function(){
    var id = $('#bomberoIngreso').val();

    var formIngresar = $('#form-ingresar');
    $('#ingresado').val(id);
    var url = formIngresar.attr('action');
    var data = formIngresar.serialize();
    $.post(url, data, function(result){
      alert("Se registro el ingreso");
    });

  });

  $('#egresar').on('click',function(){
    var id = $('#bomberoIngreso').val();
    var formDelete = $('#form-delete');
    var url = formDelete.attr('action').replace(':USER_ID', id);
    var data = formDelete.serialize();
    alert(url);
    $.post(url, data, function(result){
      alert("Se registro el egreso");
    });
  });

});