$(function(){
    $('.qili-iframe2 .row li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.qili-iframe2 .list .box').css('display', 'none');
        $('.qili-iframe2 .list .box:eq(' + $('.qili-iframe2 .row li').index(this) + ')').css('display', 'block');
    });
})