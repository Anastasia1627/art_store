$(document).ready(function() {
  var dialog = document.querySelector('dialog');
  document.querySelector('#show').onclick = function() {
    dialog.show();
    $('#overlay').fadeIn(0);
  };
  document.querySelector('#close').onclick = function() {
    dialog.close();
    $('#overlay').fadeOut(1500);
  };
  document.querySelector('#clo').onclick = function() {
    dialog.close();
    alert('Ваш заказ принят!');
    $('#overlay').fadeOut(2000);
  };
});
