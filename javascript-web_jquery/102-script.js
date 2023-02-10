#!/usr/bin/node
document.addEventListener('DOMContentLoaded', function () {
    const sayHi = function () {
      const lang = $('#language_code').val();
      $.get(`https://www.fourtonfish.com/hellosalut/hello/?lang=${lang}`, function (data) {
        $('DIV#hello')
          .text(data.hello);
        $('#language_code').val('');
      });
    };
    $('input').keypress(function (event) {
      if (event.which === 13) sayHi();
    });
    $('#btn_translate').click(sayHi);
  });
