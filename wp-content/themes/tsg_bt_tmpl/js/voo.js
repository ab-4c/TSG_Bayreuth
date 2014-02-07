// Flexslider
var voo = {};

(function($){

    if($('.slider').length>0) {

        voo.slider = $('#theSlider').flexslider({
            animation: "slide"
        });
    }  
    
})( window.jQuery );