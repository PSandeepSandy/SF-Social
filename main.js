		
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

				$.keyframe.define([{
					name: "entering",
					"100%":{'transform' : 'translate(100vw,0)'}
				}]);
				
				$.keyframe.define([{
					name:"enteringtext",
					"100%":{'transform' : 'translate(100vw,0)'}
				}]);

					if(count==1){

						$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
						$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
						$(".grid-first-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-first-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
						$(".grid-first-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	
						//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
						$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');

						$(".grid-second-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
						$(".grid-second-two").playKeyframe('entering 0.5s ease 0.2s normal forwards 1');
						$(".grid-second-three").playKeyframe('entering 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-second-four").playKeyframe('entering 0.2s ease 0.6s 1 normal forwards');
						$(".grid-second-five").playKeyframe('entering 0.6s ease-in 0.8s 1 normal forwards');

						$(".main-second-content").playKeyframe('enteringtext 1s ease 1 normal forwards');
						
						setTimeout(function(){
							$(".main-second-back").css("left","-100vw");
							$(".main-second-content").css("left","-100vw");	
						},1800);
																	
						
					}

					else if(count==2){
						console.log("I am here");
						$(".grid-second-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
						$(".grid-second-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
						$(".grid-second-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-second-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
						$(".grid-second-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	
						alert("I did what was needed");
						//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
						$(".main-second-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');
						alert("Now text should have gone");
						
						$(".grid-third-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
						$(".grid-third-two").playKeyframe('entering 0.5s ease 0.2s normal forwards 1');
						$(".grid-third-three").playKeyframe('entering 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-third-four").playKeyframe('entering 0.2s ease 0.6s 1 normal forwards');
						$(".grid-third-five").playKeyframe('entering 0.6s ease-in 0.8s 1 normal forwards');
						alert("Now new grids should have entered");
						$(".main-third-content").playKeyframe('enteringtext 1s ease 1 normal forwards');	
						alert("Now new text should have entered");
						setTimeout(function(){
							$(".main-third-back").css("left","-200vw");
							$(".main-third-content").css("left","-200vw");	
						},1800);

					}				
					
					else if(count==3){
						$(".grid-third-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
						$(".grid-third-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
						$(".grid-third-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-third-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
						$(".grid-third-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	
						//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
						$(".main-third-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');

						$(".grid-fourth-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
						$(".grid-fourth-two").playKeyframe('entering 0.5s ease 0.2s normal forwards 1');
						$(".grid-fourth-three").playKeyframe('entering 1.2s ease-in 0.4s 1 normal forwards');
						$(".grid-fourth-four").playKeyframe('entering 0.2s ease 0.6s 1 normal forwards');
						$(".grid-fourth-five").playKeyframe('entering 0.6s ease-in 0.8s 1 normal forwards');

						setTimeout(function(){
							$(".main-fourth-back").css("left","-300vw");
							$(".main-fourth-content").css("left","-300vw");	
						},1800);
						

					}			

			};
