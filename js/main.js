$(function() {
    /* 헤더 lnb 이벤트 */
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
    /* 헤더 lnb 이벤트 */

    /* m_gnb */
    const gnbBtn = $('.gnb_btn');
    const m_gnb = $('.m_gnb');
    console.log(m_gnb)

    gnbBtn.on('click', ()=> {
        m_gnb.toggleClass('on');
        gnbBtn.toggleClass('on');
    });
});
