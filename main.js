		
		var count = 0;

		function scroller(){
				count++;
						
				$.keyframe.define([{
				   	name: 'scrollit',
				    '100%': {'transform' : 'translate(100%,0)'}
					
				}]);	

					$("body").css("background","url('test2.png')");

					$(".grid-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
					$(".grid-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
					$(".grid-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
					$(".grid-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
					$(".grid-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');
					
		};
