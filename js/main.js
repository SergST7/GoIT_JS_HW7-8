/**
 * Created by SergST on 29.08.2016.
 */

$(function () {
  //TABS

  // вкладки с контентом
  var $contentTabs = $('.tab-content .tab-item');

  //переключатели табов
  var $linkTabs = $('.tabs .tab');

  //активным после загрузки делаем первый переключатель
  $linkTabs.eq(0).addClass('active');

  // прячем все вкладки с контентом кроме первой
  $contentTabs.not(':first').hide();

  //добавим обработчик клика на табы
  $linkTabs.click(function () {
    //удалим у всех табов класс active
    $linkTabs.removeClass('active');

    //спрячем все вкладки с контентом
    $contentTabs.hide();

    //добавим класс active табе по корой кликнули
    $(this).addClass('active');

    //отобразим  нужную вкладку с контентом по номеру кликнутой табы в колекции
    $contentTabs.eq($(this).index()).fadeIn('slow')
  });

});