$(function(){
    $('.qili-iframe3 .row li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.qili-iframe3 .list .box').css('display', 'none');
        $('.qili-iframe3 .list .box:eq(' + $('.qili-iframe3 .row li').index(this) + ')').css('display', 'block');
    });
})