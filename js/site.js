(function($,tsparticles){"use strict";$=$&&Object.prototype.hasOwnProperty.call($,"default")?$["default"]:$;$.fn.particles=function(){var items=this;return{init:function init(params,callback){items.each(function(index,element){if(element.id===undefined){element.id="tsparticles"+Math.floor(Math.random()*1e3)}tsparticles.tsParticles.load(element.id,params).then(callback)})},ajax:function ajax(jsonUrl,callback){items.each(function(index,element){if(element.id===undefined){element.id="tsparticles"+Math.floor(Math.random()*1e3)}tsparticles.tsParticles.loadJSON(element.id,jsonUrl).then(callback)})}}}})(jQuery,window);
//# sourceMappingURL=jquery.particles.min.js.map

jQuery("#tsparticles")
  .particles()
  .init(
    {
      background: {
        color: {
          value: "",
        },
      },
      fpsLimit: 30,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
            speed: 1,
          },
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.8,
          },
        },
      },
      particles: {
        color: {
          value: "#668DD5",
        },
        links: {
          color: "#668DD5",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: .5,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: true,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    },
    function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    }
 );


jQuery(function () {
    window.addEventListener('scroll', function (e) {
        var el = $('.site-header').first();
        if (window.scrollY >= 1 && $(el).hasClass('site-header-scrolled') == false) {
            $(el).addClass("site-header-scrolled");
        }
        else if (window.scrollY < 1) {
            $(el).removeClass("site-header-scrolled");
        }
    });
});

jQuery('.hamburger').click(function(e) {
    if($('body').hasClass('menuwrap-opens')){
		$('body').removeClass('menuwrap-opens');
	}
	else{
		$('body').addClass('menuwrap-opens');
	}
});
jQuery('.menuwrap-close').click(function(e) {
    
		$('body').removeClass('menuwrap-opens');
});


var owlone = $('.owl-one');
owlone.owlCarousel({
    loop:false,
    nav:false,
    margin:0,
    mouseDrag:true,
    touchDrag:true,
    responsive:{
        0:{
            items:1.25
        },
        768:{
            items:2.5
        },            
        1024:{
            items:3.5
        },
        1200:{
            items:4.5
        }
    }
});

var owltwo = $('.owl-two');
owltwo.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    smartSpeed:500,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        },            
        1024:{
            items:6
        },
        1200:{
            items:8
        }
    }
});