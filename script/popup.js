$(function(){
    $('.simg1').click(function(){
        $('.a7').fadeIn();//.show()
        $('.a1, .a6').fadeOut();//.hide()
    });
   
    $('.simg2').click(function(){
        $('.a1').fadeIn();//.show()
        $('.a7, .a6').fadeOut();//.hide()
    });

    $('.simg3').click(function(){
        $('.a6').fadeIn();//.show()
        $('.a1, .a7').fadeOut();//.hide()
    });
});