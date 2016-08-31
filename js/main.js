/**
 * Created by SergST on 29.08.2016.
 */

$(function () {
  //TABS
  // вкладки с контентом
  var $contentTabs = $('.tab-content .tab-item');

  //переключатели табов
  var $linkTabs = $('.tabs .tab');

  //линия сверху для активного таба переключателя
  $linkTabs.append('<div class="line"></div>');

  //активным после загрузки делаем первый переключатель
  $linkTabs.eq(0).addClass('active');
  $(".line:first").css("width", "100%");

  // прячем все вкладки с контентом кроме первой
  $contentTabs.not(':first').hide();

  //добавим обработчик клика на табы
  $linkTabs.click(function () {
    //удалим у всех табов класс active
    $linkTabs.removeClass('active');

    //убираем линию сверху активной табы
    $(".line").css("width", "0%");

    //спрячем все вкладки с контентом
    $contentTabs.hide();

    //добавим класс active табе по корой кликнули
    $(this).addClass('active');

    //отображаем линию на кликнутой табе
    $(this).find(".line").css("left","50%").animate({
      "width": "100%",
      "left": "0%"
    }, "slow");

    //отобразим  нужную вкладку с контентом по номеру кликнутой табы в колекции
    $contentTabs.eq($(this).index()).fadeIn('slow');
  });

  //Всплавающие подсказки
  //прячем все подсказки
  $('form em').hide();

  // показать подсказку
  function showHelp(){
    $(this).next("em").animate({opacity: "show", left: "270"}, "slow");
  }

  // спрятать подсказку
  function hideHelp() {
    $(this).next("em").animate({opacity: "hide", left: "300"}, "slow");
  }

  // обработчики на события focus и hover
  $("form input").hover(showHelp, hideHelp).focusin(showHelp).focusout(hideHelp);

  // обработчик на кнопку
  $('.show-help').click(function () {
    $('form em').animate({opacity: "show", left: "270"}, "slow");
  });
});