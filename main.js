	
		function scroller(){
				
				$.keyframe.define([{
				   	name: 'scrollit',
				    '100%': {'transform' : 'translate(100%,0)'}
				}]);	

					$(".grid-one").playKeyframe('scrollit 1s ease 0s 1 normal forwards');
					$(".grid-two").playKeyframe('scrollit 1s ease 0.2s normal forwards 1');
					$(".grid-three").playKeyframe('scrollit 1s ease 0.4s 1 normal forwards');
					$(".grid-four").playKeyframe('scrollit 1s ease 0.6s 1 normal forwards');
					$(".grid-five").playKeyframe('scrollit 1s ease 0.8s 1 normal forwards');

					setTimeout( function(){														
					} , 1800);
		
				/*setTimeout( function(){ 
					$(".grid-one").css("animation","initial");
					$(".grid-two").css("animation","initial");
					$(".grid-three").css("animation","initial");
					$(".grid-four").css("animation","initial");
					$(".grid-five").css("animation","initial");

 										}  , 1800 );*/
				

		};

		

		

