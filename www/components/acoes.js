$(document).on('click','#cadastro',function(){
  var parametros = {
    "marca": $("#marca").val(),
    "modelo": $("#modelo").val(),
    "ano": $("#ano").val(),
    "cor": $("#cor").val(),
    "valor": $("#valor").val(),
  }

  $.ajax({
    type:"post",
    url:"https://includee-darknesshean.c9users.io/cadastra.php",
    data:parametros,
    success:function(data){
    $("#marca").val();
    $("#modelo").val();
    $("#ano").val();
    $("#cor").val();
    $("#valor").val();
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  });
    $("#marca").val("");
    $("#modelo").val("");
    $("#ano").val("");
    $("#cor").val("");
    $("#valor").val("");
});

$(document).on("click","#listar",function(){
  $(location).attr("href","listar.html");
});

function preencher (){
  $.ajax({
    type:"post",
    url:"https://includee-darknesshean.c9users.io/listar.php",
    dataType:"json",
    success:function(data){
      var item = "";
      $.each(data.carros, function(i, dados){
        item += "<option value='"+ dados.codigo +"'>"+dados.nome+"</option>";
      });
      $("#lstCarros").html(item);
    },
    error:function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
}

$(document).on("change","#lstCarros",function(){
  var codigo = $("option:selected",("#lstCarros")).val();
  $.ajax({
    type:"get",
    url:"https://includee-darknesshean.c9users.io/listar-um.php",
    data:"id=1",
    dataType:"json",
    success: function(data){
      $("#cod").val(data.carros.codigo);
      $("#modelo").val(data.carros.nome);
      $("#marca").val(data.carros.marca);
    },
    error:function(data){
      navigator.notification.alert(data);
    }
  })
})