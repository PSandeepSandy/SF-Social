		$(document).ready(function(){
			alert("Hello");	
		});

		function scroller(){
				alert("clicked");
				$.keyframe.define([{
				   	name: 'scrollit',
				    /*'20%': {'transform' : 'matrix(1,0,0,1,0,0)'},
				    '30%': {'background-color': 'white'},
				    '60%': {'background-color': 'red'},
				    '100%': {'background-color': 'green'}*/
				    '50%': {'transform' : 'rotate(30deg)'}
				}]);	

					$(".grid-one").playKeyframe('scrollit 1s ease 0s 1');
					$(".grid-two").playKeyframe('scrollit 1s ease 0.2s 1');
					$(".grid-three").playKeyframe('scrollit 1s ease 0.4s 1');
					$(".grid-four").playKeyframe('scrollit 1s ease 0.6s 1');
					$(".grid-five").playKeyframe('scrollit 1s ease 0.8s 1');

		
				setTimeout( function(){ 
					$(".grid-one").css("animation","initial");
					$(".grid-two").css("animation","initial");
					$(".grid-three").css("animation","initial");
					$(".grid-four").css("animation","initial");
					$(".grid-five").css("animation","initial");
 										}  , 1800 );


		};

		

		

