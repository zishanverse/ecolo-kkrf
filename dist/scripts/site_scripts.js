$(document).ready(function(){

    //flipsnack
    $(".fancybox-flipsnack").fancybox({
        type: 'iframe',
        padding: 0,
        maxWidth: 700,
        maxHeight: 900,
        helpers:  { 
            thumbs : {
                width: 100,
                height: 100
            },
            title : {
                type : 'outside',
                position : 'top'
            }
        },
        // beforeLoad : function() {
        //     this.title = $('.gallery-title').html();
        // }
    }); 
    //alert('hi');

    //check if the url contains the string 'industrial'
    if(window.location.href.indexOf('industrial') > -1){
        
        //hide the 30 day free trial call out in the indu side of the website
        $('.free-trial').hide();

        $('.footer').addClass('indu-footer');

        //add the indu green pill to the toggle button
        $('.pill').addClass('indu-green-pill');

        //check if there is an opening class in the page, if there isn't do not change the nav colours.
        if(document.querySelector('.opening') !== null){

            //switch the nav links colours after the opening div
            $(function(){
                $(document).scroll(function(){
                    var nav = $('.main-nav');
                    var opening = $('.opening');
                    var openingHeight = opening.height() + 75;
                    nav.toggleClass('indu-nav', $(this).scrollTop() > (opening.height()) - 0);
                    console.log(openingHeight);
                }); //end document.scroll
            }); //end function


            //switch the toggle colours after the opening div
            $(function(){
                $(document).scroll(function(){
                    var togglebtn = $('.toggle-btn');
                    var opening = $('.opening');
                    togglebtn.toggleClass('indu-toggle', $(this).scrollTop() > (opening.height()) - 0);
                }); //end document.scroll
            }); //end function
        }


    } //end of if statement to check the url for industrial

    //add the comm green pill to the toggle button
    $('.pill').addClass('comm-green-pill');

    //toggle hover stages
    $('.toggle-btn__switch--indus').hover(
            function(){
                $('.comm-green-pill').addClass('green-pill-right');
            },
            function(){
                $('.comm-green-pill').removeClass('green-pill-right');
            }
        );
        $('.toggle-btn__switch--comm').hover(
            function(){
                $('.indu-green-pill').addClass('green-pill-left');
            },
            function(){
                $('.indu-green-pill').removeClass('green-pill-left');
            }
    ); 


    //check if there is an opening class in the page, if there isn't do not change the nav colours.
    if(document.querySelector('.opening') !== null){


        //watch for the scrolling point of the site
        $(function(){
            $(document).scroll(function(){
                //vars
                var nav = $('.main-nav');
                var opening = $('.opening');
                var sidebar = $('.services-side-nav');
                var togglebtn = $('.toggle-btn');
                var navBg = $('.header__bg');


                //switch the nav links colours after the opening div
                //nav.toggleClass('comm-nav', $(this).scrollTop() > 10);
                nav.toggleClass('comm-nav', $(this).scrollTop() > (opening.height()) - 0);
                togglebtn.toggleClass('comm-toggle', $(this).scrollTop() > (opening.height()) - 0);

                //check if the opening div is gone and fade in the services sidebar.
                if($(this).scrollTop() > (opening.height()) - 50){
                    sidebar.fadeIn(100);
                    //navBg.show();
                } else {
                    sidebar.fadeOut(100);
                    //navBg.hide();
                }

                if($(this).scrollTop() > 10){
                    navBg.show();
                } else {
                    navBg.hide();
                }

                if($(this).scrollTop() > 10 && $(this).scrollTop() < (opening.height())){
                    navBg.addClass('dark');
                } else {
                    navBg.removeClass('dark');
                }
                if(window.location.href.indexOf('industrial') > -1 && $(this).scrollTop() > 10 && $(this).scrollTop() < (opening.height())){
                    navBg.addClass('indd-dark');
                } else {
                    navBg.removeClass('indd-dark');
                }
                if($(this).scrollTop() > 10 && $(this).scrollTop() < (opening.height())){
                    navBg.addClass('dark');
                } else {
                    navBg.removeClass('dark');
                }


            }); //end document.scroll
        }); //end function


    } //end of if statement to check for opening class


    $('body').addClass('page-ready');


}); //end document.ready
