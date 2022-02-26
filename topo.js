
        jQuery(document).ready(function(){

        jQuery("#subirTopo").hide();

        jQuery('a#subirTopo').click(function () {
                 jQuery('body,html').animate({
                   scrollTop: 0
                 }, 1000);
                return false;
           });

        jQuery(window).scroll(function () {
                 if (jQuery(this).scrollTop() > 1000) {
                    jQuery('#subirTopo').fadeIn();
                 } else {
                    jQuery('#subirTopo').fadeOut();
                 }
             });
        });
