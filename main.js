		
		var count = 0;

		function scroller(){
				count++;
				console.log(count);		
				$.keyframe.define([{
				   	name: 'scrollit',
				    '100%': {'transform' : 'translate(100vw,0)'}
					
				}]);	

				$.keyframe.define([{
				   	name: 'scrollthetext',
					'100%': {'transform' : 'translate(100vw,0)'}
				}]);
					/*$("body").css("background","url('test2.png')");
					$("body").css("background-repeat","no-repeat");*/

					if(count==1){
						$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
						$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
						$(".grid-first-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-first-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
						$(".grid-first-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	
						//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
						$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');

						
						setTimeout(function(){
							$(".main-second-back").css("left","0");
							$(".main-second-content").css("left","0");	
						},1800);
						
													
						
					}

					if(count==2){
						$(".grid-second-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
						$(".grid-second-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
						$(".grid-second-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-second-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
						$(".grid-second-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	

						//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
						$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');

						setTimeout(function(){
							$(".main-third-back").css("left","0");
							$(".main-third-content").css("left","0");	
						},1800);

					}				
					
					if(count==3){
						$(".grid-third-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
						$(".grid-third-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
						$(".grid-third-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-third-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
						$(".grid-third-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	

						//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
						$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');

						setTimeout(function(){
							$(".main-fourth-back").css("left","0");
							$(".main-fourth-content").css("left","0");	
						},1800);
						

					}			

			};
