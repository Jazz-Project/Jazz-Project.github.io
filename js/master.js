$(document).ready(function()
{
    /* Start Function for scroll to top Btn */
    
    var navTop = $('#bodySection').offset().top;
    var scrollNav = function() {
        var scrollToTop = $(window).scrollTop();
        
        if(scrollToTop > navTop) 
        {
            $('#scrollTopBtn').addClass('show');
        }
        else
        {
            $('#scrollTopBtn').removeClass('show');
        }
    };
    scrollNav();
    
    $(window).scroll(function(){ scrollNav(); });
    
    $('#scrollTopBtn').click(function()
    {
        $('html, body').animate({ scrollTop:0 }, 600);
    });
    
    /* End Function for scroll to top Btn */
    
    
    /* Start add activeBtn for sideBtn */
    $('.sideBtn').click(function()
    {
        $(this).addClass('activeBtn');
    });
    
    
    
    $('.section1').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionOne').addClass('activeBtn');
        $('.leftSectionText').removeClass('fadeInLeftBig animated').css({ 'visibility':'hidden' });
        $('.rightSectionText').removeClass('fadeInRightBig animated').css({ 'visibility':'hidden' });
        $('.leftSectionText').addClass('fadeOutLeftBig');
        $('.rightSectionText').addClass('fadeOutRightBig');
        },
        {
            offset: '0%'
    });
    $('.section2').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionTwo').addClass('activeBtn');
        $('.section2 .leftSectionText').addClass('fadeInLeftBig animated').css({ 'visibility':'visible' });
        $('.section2 .rightSectionText').addClass('fadeInRightBig animated').css({ 'visibility':'visible' });
        $('.leftSectionText').removeClass('fadeOutLeftBig');
        $('.rightSectionText').removeClass('fadeOutRightBig');
        },
        {
            offset: '40%'
    });
    $('.section3').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionThree').addClass('activeBtn');
        $('.section3 .leftSectionText').addClass('fadeInLeftBig animated').css({ 'visibility':'visible' });
        $('.section3 .rightSectionText').addClass('fadeInRightBig animated').css({ 'visibility':'visible' });
        $('.leftSectionText').removeClass('fadeOutLeftBig');
        $('.rightSectionText').removeClass('fadeOutRightBig');
        },
        {
            offset: '40%'
    });
    $('.section4').waypoint(function() {
        $('.sideBtn').removeClass('activeBtn');
        $('.sectionFour').addClass('activeBtn');
        $('.section4 .leftSectionText').addClass('fadeInLeftBig animated').css({ 'visibility':'visible' });
        $('.section4 .rightSectionText').addClass('fadeInRightBig animated').css({ 'visibility':'visible' });
        $('.leftSectionText').removeClass('fadeOutLeftBig');
        $('.rightSectionText').removeClass('fadeOutRightBig');
        },
        {
            offset: '40%'
    });
         
    
    /* End add activeBtn for sideBtn */
    
    /* Start Mobile Nav */
    
    $('#mobileMenuBtn').click(function(e)
    {
        $('#mobileMenu, body, html').toggleClass('clicked');
    });
    
    /* End Mobile Nav */
    
});

function changeSection(e)
{
    var sectionName = $(e).attr('data-name');
    $('html, body').animate({
    scrollTop: $('.'+sectionName).offset().top - 50
    }, 500);
    $('.sideBtn').removeClass('activeBtn');
}
function changeMobileSection(e)
{
    var sectionName = $(e).attr('data-name');
    $('html, body').animate({
    scrollTop: $('.'+sectionName).offset().top - 50
    }, 500);
    $('#mobileMenu, body, html').toggleClass('clicked');
}

function changeImg(data)
{
	var imgPath = jQuery(data).attr('data-img');
	var largeDiv = jQuery(data).attr('data-change');
	var largeImg = jQuery('#data-largeImg' + largeDiv);

	largeImg.attr('src', imgPath);
}
