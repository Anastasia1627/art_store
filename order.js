var dialog = document.querySelector('dialog');

      document.querySelector('#show').onclick = function() {
        $('#overlay').fadeIn(0);
        dialog.show();
      };
      document.querySelector('#close').onclick = function() {
        dialog.close();
        $('#overlay').fadeOut(1000);
      };

      function order(){
        var o = document.getElementById("window")
        o.innerHTML="Ваш заказ принят!"
        setTimeout(function(){$('.window').fadeOut('fast')},5000);
      }
