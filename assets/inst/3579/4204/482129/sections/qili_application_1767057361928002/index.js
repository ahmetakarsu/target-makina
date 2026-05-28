$(function(){
    $('.qili-iframe4 .row li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.qili-iframe4 .list .box').css('display', 'none');
        $('.qili-iframe4 .list .box:eq(' + $('.qili-iframe4 .row li').index(this) + ')').css('display', 'block');
    });
})