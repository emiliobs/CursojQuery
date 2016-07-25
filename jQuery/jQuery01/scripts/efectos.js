/// <reference path="jquery-2.2.3.min.js" />
/// <reference path="jquery-2.2.3.js" />

////jquery('selector') 0 $('seletor')
//Tipos de selectores: objetos jsm etiquetas html, id css y  clases css, pseudo clases y pseudo elemento css:

////Evento semántico:
//window.onload = Function()
//{
//    alert("Se ha cargado el documento con windows");
//};

//jQuery(window).load(function () {
//    alert("Se ha cargado el documento semánticamente desde window con jQuery");
//});


//document.onready = function()
//{
//    alert('Se ha cargado el documeto semánticamente con ready y document');
//}
//$(document).ready(function ()
//{
//    alert('Se ha cargado el documeto semánticamente con ready y document desde jQuery');
//});

////Eventos Multiples:
//window.addEventListener('load', function () {
//    alert('Se ha cargado el documento semáticamente con addEventListener y widows');
//});

//$(window).on('load', function ()
//{
//    alert('Se ha cargado el documento semáticamente con addEventListener y widows desde jQuery');
//});

//window.removeEventListener('load', function () {

//});

//$(window).off('load', function ()
//{

//});

//document.addEventListener('ready', function()
//    {
//        alert('Se ha cargado el documeto con listeer and docuemnt');
//});

//$(document).on('ready', function ()
//{
//    alert('Se ha cargado el documeto con listeer and docuemnt desde jQuery');
//});

//    document.removeEventListener('ready', function(){
    
//    });

//    $(document).off('ready', function()
//    {

//    });

function efector()
{
    //Manejador SEmantico
    // alert('Mamá ya se invocar jQuery.');
    //$('p').click(function () {

    //    $(this).hide();
    //});

    //Manejador Multiple:
    $('p').on('click', function ()
    {
        $(this).hide();
    });

    $('#boton').on('click', function ()
    {
        $('p').show();
    });

    $('p').css('background-color', 'white');

    $('#boton2').on('click', function ()
    {
        $('p').hide(2000);
    });

    $('#boton3').on('click', function () {
        $('p').show('slow');/*hay tres velocidades en jquery: fast, slow y  swing*/
    });

    $('#boton4').on('click', function ()
    {
        $('p').toggle();
    });

    $('#boton5').on('click', function ()
    {
        $('p').toggle('swing');
    });

    $('.mostrar').on('click', function ()
    {
        $('.deslizante').slideDown(1500);
    });

    $('.ocultar').on('click', function ()
    {
        $('.deslizante').slideUp('fast');
    });

    $('.mostrarOcultar').on('click', function ()
    {
        $('.deslizante').slideToggle();
    });

    $('#boton6').on('click', function ()
    {
        $('.cuadro').fadeTo(3000,.25);
    });

    $('#boton7').on('click', function ()
    {
        $('.cuadro').fadeTo('slow', 1);
    });

    $('#boton8').on('click', function ()
    {
        $('.cuadro').fadeOut(2000);
    });

    $('#boton9').on('click', function ()
    {
        $('.cuadro').fadeIn(2000);
    });

    $('#parpadea').on('click', function ()
    {
        $('.cuadro').fadeOut().fadeIn();
        //$('.cuadro').fadeIn();
       
    });

    $('#boton10').on('click', function ()
    {
        $('#animable').animate({ height: 300 }, 'slow')
                      .animate({ width: 300 }, 1500)
                      .animate({ height: 150, width: 100 }, 3000);
                      
    });

    $('#boton11').on('click', function () {
        $('#animable').animate({left:'50%'}, 'swing')
                      .animate({width:400}, 1000)
                      .animate({'font-size':'3rem'},'fast')
                      .animate({ fontSize: '2rem' }, 'slow')
            //http://plugins.jquery.com/color/
                      .animate({backgroundColor:'red'},500)
                      .animate({color:'black'},'swing')
                      .animate({top:-100},'1200')
                      .animate(
                      {
                          fontSize:'1rem',
                          left:0,
                          top:0,
                          width:150,
                          backgroundColor: 'black',
                          color:'white'
                      }, 5000);
    });

}
//Manejador Semantico
//$(document).ready(efector);
//Manejador Multiple:
$(document).on('ready', efector);