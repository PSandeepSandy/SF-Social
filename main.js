		var count = 0;
		var timedOut = 0;

		setTimeout(function(){
			timedOut = 0;
		},1600);

		$.keyframe.define([{
				   	name: 'scrollit',
				    '100%': {'transform' : 'translate(100vw,0)'}
					
				}]);	

				$.keyframe.define([{
				   	name: 'scrollit2',
				    '100%': {'transform' : 'translate(200vw,0)'}
					
				}]);				

				$.keyframe.define([{
				   	name: 'scrollthetext',
					'100%': {'transform' : 'translate(100vw,0)'}
				}]);

				$.keyframe.define([{
				   	name: 'scrollthetext2',
					'100%': {'transform' : 'translate(200vw,0)'}
				}]);

				$.keyframe.define([{
					name: "entering",
					"100%":{'transform' : 'translate(100vw,0)'}
				}]);
				
				$.keyframe.define([{
					name:"enteringtext",
					"100%":{'transform' : 'translate(100vw,0)'}
				}]);

		var direction=0;

		$('body').bind('wheel', function(e){
				        if(e.originalEvent.wheelDelta> 0) {
				            console.log('scrolling up !');
				            direction = 1; 
				        	
				        }
				        else{
				            direction = -1;
				            console.log('scrolling down !');
				        }
		});


		function scroller(){
				count++;
				console.log(count);	
	
				


				if(direction == -1){

					if(timedOut == 0){
						
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

							timedOut++;
						}

						else if(count==2){
							
							$(".grid-second-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
							$(".grid-second-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards initial');
							$(".grid-second-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards initial');
							$(".grid-second-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards initial');
							$(".grid-second-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards initial');	
							//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
							$(".main-second-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial' );

							$(".grid-third-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
							$(".grid-third-two").playKeyframe('entering 0.5s ease 0.2s normal forwards 1');
							$(".grid-third-three").playKeyframe('entering 1.2s ease-in 0.4s 1 normal forwards');
							$(".grid-third-four").playKeyframe('entering 0.2s ease 0.6s 1 normal forwards');
							$(".grid-third-five").playKeyframe('entering 0.6s ease-in 0.8s 1 normal forwards');
							
							timedOut++;
						}				
						
						else if(count==3){
							$(".grid-third-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
							$(".grid-third-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards initial');
							$(".grid-third-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards initial');
							$(".grid-third-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards initial');
							$(".grid-third-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards initial');	
							//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
							$(".main-third-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial');

							$(".grid-fourth-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
							$(".grid-fourth-two").playKeyframe('entering 0.5s ease 0.2s normal forwards 1');
							$(".grid-fourth-three").playKeyframe('entering 1.2s ease-in 0.4s 1 normal forwards');
							$(".grid-fourth-four").playKeyframe('entering 0.2s ease 0.6s 1 normal forwards');
							$(".grid-fourth-five").playKeyframe('entering 0.6s ease-in 0.8s 1 normal forwards');
							timedOut++;
						}			
					}
				}

				else if(direction == 1){
					//Just the reverse animations...
				}






			};

	function openNav() {
    	document.getElementById("myNav").style.height = "100%";
	}

	/* Close */
	function closeNav() {
	    document.getElementById("myNav").style.height = "0%";
	}