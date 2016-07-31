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

    $('#button12').on('click', function () {

        //$('#oculto').hide(2000);

        //alert('El párrafo se Ha oultado.!!');

        //función callback
        $('#oculto').hide(2000, function ()
        {
            alert('El párrafo se ha ocultado.');
        });
    });

    $('#boton13').on('click', function ()
    {
        $('#p').html('<i>El contenido ha sido cambiado.</i>');
    });

    $('#boton14').on('click', function () {
        $('#p').prepend('<b>Contenido agregado antes </b><img src="img/emily.jpg" /> ');
    });

    $('#boton15').on('click', function () {
        $('#p').append('</b>Contenido agregado después</b><input type="text" value="Hola" />');
    });

    $('#boton16').on('click', function () {
        $('#p').before('<div class="antes">Contenido agregado antes del selector.</div>');
        $('.antes').css('background-color','magenta');
    });

    $('#boton17').on('click', function () {
        $('#p').after('<div class="despues">Contenido agregado después del selector.</div>');
        $('.despues').css('background-color', 'cyan');
    });

    $('#boton18').on('click', function () {
        $('p').css('font-size', '2rem').css({backgroundColor:'skyblue'});
    });

    $('#boton19').on('click', function () {
        $('p').css({

            'backgroundColor': '#eee',
            borderRadius: '1rem',
            border: 'thick solid #222',
            fontsize: '3rem',
            padding: '1rem',
            'text-shadow':'.2rem .2rem .5rem #000'

        });
              
    });

    $('#enlace').on({
        click: function (evento) { 
        
            evento.preventDefault();
            alert('Se ha prevenido la acción por defecto del enlace');
            
        },
        mouseover: function () {

            //$('span').addClass('span-css');
            $('span').toggleClass('span-css');

        },
        mouseout: function () {

            //$('span').removeClass('span-css');
            $('span').toggleClass('span-css');
        }
    });

}
//Manejador Semantico
//$(document).ready(efector);
//Manejador Multiple:
$(document).on('ready', efector);