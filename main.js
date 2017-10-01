		$(document).ready(function(){
			alert("Hello");	
		});

		function scroller(){
				alert("clicked");
				$.keyframe.define([{
				   	name: 'scrollit',
				    '20%': {'background-color': 'black'},
				    '30%': {'background-color': 'white'},
				    '60%': {'background-color': 'red'},
				    '100%': {'background-color': 'green'}
				}]);	

				$(".grid-one").playKeyframe('scrollit 1s ease 0s 1',complete);
				$(".grid-two").playKeyframe('scrollit 1s ease 0.2s 1',complete);
				$(".grid-three").playKeyframe('scrollit 1s ease 0.4s 1',complete);
				$(".grid-four").playKeyframe('scrollit 1s ease 0.6s 1',complete);
				$(".grid-five").playKeyframe('scrollit 1s ease 0.8s 1',complete);

				/*$(".grid-one").css("animation","initial");
				$(".grid-two").css("animation","initial");
				$(".grid-three").css("animation","initial");
				$(".grid-four").css("animation","initial");
				$(".grid-five").css("animation","initial");			*/
		};

		

		

