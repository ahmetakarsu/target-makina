$(document).on("click", ".f_ly", function () {
    $(".qili-universal").slideDown("400");
});
$(document).on("click", ".qili-universal .close", function () {
    $(".qili-universal").slideUp("400");
});
function GoTop() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
}