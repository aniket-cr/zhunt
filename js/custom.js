$(document).ready(function() {

    /* ==========================================================================
       EasyPieChart
   	   ========================================================================== */
	    
	    $(function() {
	        $('.chart').easyPieChart({
	            barColor: '#16a085',
	            scaleColor: false,
	            lineCap:'butt',
	            size: '170',
	            lineWidth: '10',
	            animate: 1000
	        });
	    });

    /* ==========================================================================
       Tabs
   	   ========================================================================== */

	    $('#myTab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});

	/* ==========================================================================
       Color Switcher
   	   ========================================================================== */

		$(document).ready(function() {

	    var switcher = $('#switcher');

		switcher.find('.switcher-btn').click(function(e) {
	        e.preventDefault();
	        switcher.toggleClass('switcher-active');
	    })

		switcher.find('.color .color-1').click(function() {
		    $('head').find('link[href*="color-2.css"]').remove(),
		    $('head').find('link[href*="color-3.css"]').remove(),
		    $('head').find('link[href*="color-4.css"]').remove(),
		    $('head').find('link[href*="color-5.css"]').remove();
			$('#chart .col-sm-6').remove();
			$('#chart').append('\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="90"><span class="percent">90</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>HTML/CSS</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="70"><span class="percent">70</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DEVELOPMENT</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="85"><span class="percent">85</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DESIGN</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="60"><span class="percent">60</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>GRAPHIC</h2>\
			</div>');
	        $('.chart').easyPieChart({
	            barColor: '#16a085',
	            scaleColor: false,
	            lineCap:'butt',
	            size: '170',
	            lineWidth: '10'
	        });
		})
	    switcher.find('.color .color-2').click(function() {
	        $('head').append('<link rel="stylesheet" href="css/themes/color-2.css">'),
			$('#chart .col-sm-6').remove();
			$('#chart').append('\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="90"><span class="percent">90</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>HTML/CSS</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="70"><span class="percent">70</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DEVELOPMENT</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="85"><span class="percent">85</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DESIGN</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="60"><span class="percent">60</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>GRAPHIC</h2>\
			</div>');
	        $('.chart').easyPieChart({
	            barColor: '#2980b9',
	            scaleColor: false,
	            lineCap:'butt',
	            size: '170',
	            lineWidth: '10'
	        });
	    })
	    switcher.find('.color .color-3').click(function() {
	        $('head').append('<link rel="stylesheet" href="css/themes/color-3.css">'),
			$('#chart .col-sm-6').remove();
			$('#chart').append('\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="90"><span class="percent">90</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>HTML/CSS</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="70"><span class="percent">70</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DEVELOPMENT</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="85"><span class="percent">85</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DESIGN</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="60"><span class="percent">60</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>GRAPHIC</h2>\
			</div>');
	        $('.chart').easyPieChart({
	            barColor: '#c0392b',
	            scaleColor: false,
	            lineCap:'butt',
	            size: '170',
	            lineWidth: '10'
	        });
	    })
	    switcher.find('.color .color-4').click(function() {
	        $('head').append('<link rel="stylesheet" href="css/themes/color-4.css">'),
			$('#chart .col-sm-6').remove();
			$('#chart').append('\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="90"><span class="percent">90</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>HTML/CSS</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="70"><span class="percent">70</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DEVELOPMENT</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="85"><span class="percent">85</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DESIGN</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="60"><span class="percent">60</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>GRAPHIC</h2>\
			</div>');
	        $('.chart').easyPieChart({
	            barColor: '#8e44ad',
	            scaleColor: false,
	            lineCap:'butt',
	            size: '170',
	            lineWidth: '10'
	        });
	    })
	    switcher.find('.color .color-5').click(function() {
	        $('head').append('<link rel="stylesheet" href="css/themes/color-5.css">'),
			$('#chart .col-sm-6').remove();
			$('#chart').append('\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="90"><span class="percent">90</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>HTML/CSS</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="70"><span class="percent">70</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DEVELOPMENT</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="85"><span class="percent">85</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>WEB DESIGN</h2>\
			</div>\
			<div class="col-md-3 col-sm-6 text-center">\
				<span class="chart" data-percent="60"><span class="percent">60</span>\
				<canvas height="170" width="170"></canvas>\
				<h2>GRAPHIC</h2>\
			</div>');
	        $('.chart').easyPieChart({
	            barColor: '#7f8c8d',
	            scaleColor: false,
	            lineCap:'butt',
	            size: '170',
	            lineWidth: '10'
	        });
	    })

	});


    /* ==========================================================================
	 * classie - class helper functions
	 * from bonzo https://github.com/ded/bonzo
	 * 
	 * classie.has( elem, 'my-class' ) -> true/false
	 * classie.add( elem, 'my-new-class' )
	 * classie.remove( elem, 'my-unwanted-class' )
	 * classie.toggle( elem, 'my-class' )
   	   ========================================================================== */

		/*jshint browser: true, strict: true, undef: true */
		/*global define: false */

		( function( window ) {

		'use strict';

		// class helper functions from bonzo https://github.com/ded/bonzo

		function classReg( className ) {
		  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}

		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;

		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    elem.classList.add( c );
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  hasClass = function( elem, c ) {
		    return classReg( c ).test( elem.className );
		  };
		  addClass = function( elem, c ) {
		    if ( !hasClass( elem, c ) ) {
		      elem.className = elem.className + ' ' + c;
		    }
		  };
		  removeClass = function( elem, c ) {
		    elem.className = elem.className.replace( classReg( c ), ' ' );
		  };
		}

		function toggleClass( elem, c ) {
		  var fn = hasClass( elem, c ) ? removeClass : addClass;
		  fn( elem, c );
		}

		var classie = {
		  // full names
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass,
		  toggleClass: toggleClass,
		  // short names
		  has: hasClass,
		  add: addClass,
		  remove: removeClass,
		  toggle: toggleClass
		};

		// transport
		if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( classie );
		} else {
		  // browser global
		  window.classie = classie;
		}

		})( window );

});