var dialog = document.querySelector('dialog');
      document.querySelector('#show').onclick = function() {
        dialog.show();
      };
      document.querySelector('#close').onclick = function() {
        dialog.close();
      };

      function order(){
        var o = document.getElementById("window")
        o.innerHTML="Ваш заказ принят!"
        setTimeout(function(){$('.window').fadeOut('fast')},5000);
      }