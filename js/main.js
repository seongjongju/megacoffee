/* 헤더 lnb 이벤트 */
$(function() {
    const header = $('header');
    const lnb = $('.lnb');
    const depth1 = $('.depth1');

    depth1.on('mouseover', () => {
        lnb.addClass('down');
        header.addClass('down');
    });

    header.on('mouseleave', () => {
        lnb.removeClass('down');
        header.removeClass('down');
    });
});
/* 헤더 lnb 이벤트 */