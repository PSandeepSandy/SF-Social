		var count = 0;
		var timedOut = 0;
		var direction=0;
		var lastLoc = 0;
		
		var date;

		setTimeout(function(){
			timedOut = 0;
		},1600);

		$.keyframe.define([{
				   	name: 'scrollit',
				    '100%': {'transform' : 'translate(100vw,0)'}
					
				}]);	

				$.keyframe.define([{
				   	name: 'scrollitrev',
				    '100%': {'transform' : 'translate(-100vw,0)'}
					
				}]);				

				$.keyframe.define([{
				   	name: 'scrollthetext',
					'100%': {'transform' : 'translate(100vw,0)'}
				}]);

				$.keyframe.define([{
				   	name: 'scrollthetextrev',
					'100%': {'transform' : 'translate(-100vw,0)'}
				}]);

				$.keyframe.define([{
					name: "entering",
					"100%":{'transform' : 'translate(100vw,0)'}
				}]);
				
				$.keyframe.define([{
					name:"enteringrev",
					"100%":{'transform' : 'translate(-100vw,0)'}
				}]);

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

		        $("body").on('touchstart', function(e) {
		            lastLoc = e.originalEvent.touches[0].clientX;
		        });

		        $("body").on('touchend', function(e) {
		            var newLoc = e.originalEvent.changedTouches[0].clientX;
		            if(newLoc-lastLoc>0){
		            	direction = -1;
		            }
		        	else if(newLoc-lastLoc<0){
		        		direction = 1
		        	}
		        	console.log(direction);

		        	scroller();

		        });


		function scroller(){
	
				setTimeout(function(){
					var curdate = new Date();
					curtime = curdate.getTime();
					
					if(!date){
						date = new Date();
						time = date.getTime();			
						
						if(direction === -1){
							$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
							$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards initial');
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

							count++;
						}

					}		

					if((curtime-time)>1600){ 

					time = curtime;					

					if(direction === -1){
						
						//if(timedOut == 0){
							
							if(count==0){

								$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
								$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
								$(".grid-first-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
								$(".grid-first-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
								$(".grid-first-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');	
								//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
								$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards');

								$(".grid-second-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards',complete(function(){$(".grid-second-one").css("animation","initial");}));
								$(".grid-second-two").playKeyframe('entering 0.5s ease 0.2s normal forwards',complete(function(){$(".grid-second-one").css("animation","initial");}));
								$(".grid-second-three").playKeyframe('entering 1.2s ease-in 0.4s 1 normal forwards',complete(function(){$(".grid-second-one").css("animation","initial");}));
								$(".grid-second-four").playKeyframe('entering 0.2s ease 0.6s 1 normal forwards',complete(function(){$(".grid-second-one").css("animation","initial");}));
								$(".grid-second-five").playKeyframe('entering 0.6s ease-in 0.8s 1 normal forwards',complete(function(){$(".grid-second-one").css("animation","initial");}));

								count++;
								//timedOut++;
								return;
							}

							else if(count==1){
								
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
								
								count++;
								//timedOut++;
								return;
							}				
							
							else if(count==2){
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
								//timedOut++;
								count++;
								return;
							}			
						
					}

					else if(direction === 1){
						console.log("count ".count);
						
						//Just the reverse animations...
						if(count==3){
							$(".grid-third-one").playKeyframe('scrollitrev 1s ease-in 0s 1 normal forwards initial');
							$(".grid-third-two").playKeyframe('scrollitrev 0.5s ease 0.2s normal forwards initial');
							$(".grid-third-three").playKeyframe('scrollitrev 1.2s ease-in 0.4s 1 normal forwards initial');
							$(".grid-third-four").playKeyframe('scrollitrev 0.2s ease 0.6s 1 normal forwards initial');
							$(".grid-third-five").playKeyframe('scrollitrev 0.6s ease-in 0.8s 1 normal forwards initial');	
							//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
							$(".main-third-content").playKeyframe('scrollthetextrev 1s ease 1 normal forwards initial');

							$(".grid-fourth-one").playKeyframe('enteringrev 1s ease-in 0s 1 normal forwards');
							$(".grid-fourth-two").playKeyframe('enteringrev 0.5s ease 0.2s normal forwards ');
							$(".grid-fourth-three").playKeyframe('enteringrev 1.2s ease-in 0.4s 1 normal forwards');
							$(".grid-fourth-four").playKeyframe('enteringrev 0.2s ease 0.6s 1 normal forwards');
							$(".grid-fourth-five").playKeyframe('enteringrev 0.6s ease-in 0.8s 1 normal forwards');
						
							$(".main-fourth-content").playKeyframe('scrollthetextrev 1s ease 1 normal forwards initial');

							count--;
							return;

						}	

						if(count==2){
							$(".grid-third-one").playKeyframe('enteringrev 1s ease-in 0s 1 normal forwards');
							$(".grid-third-two").playKeyframe('enteringrev 0.5s ease 0.2s normal forwards 1');
							$(".grid-third-three").playKeyframe('enteringrev 1.2s ease-in 0.4s 1 normal forwards');
							$(".grid-third-four").playKeyframe('enteringrev 0.2s ease 0.6s 1 normal forwards');
							$(".grid-third-five").playKeyframe('enteringrev 0.6s ease-in 0.8s 1 normal forwards');
								
							$(".main-third-content").playKeyframe('scrollthetextrev 1s ease 1 normal forwards initial' );
						
							$(".grid-second-one").playKeyframe('scrollitrev 1s ease-in 0s 1 normal forwards initial');
							$(".grid-second-two").playKeyframe('scrollitrev 0.5s ease 0.2s normal forwards initial');
							$(".grid-second-three").playKeyframe('scrollitrev 1.2s ease-in 0.4s 1 normal forwards initial');
							$(".grid-second-four").playKeyframe('scrollitrev 0.2s ease 0.6s 1 normal forwards initial');
							$(".grid-second-five").playKeyframe('scrollitrev 0.6s ease-in 0.8s 1 normal forwards initial');	
							//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
							$(".main-second-content").playKeyframe('scrollthetextrev 1s ease 1 normal forwards initial' );

							count--;
							return;

						}

						if(count==1){
							$(".grid-second-one").playKeyframe('enteringrev 1s ease-in 0s 1 normal forwards');
							$(".grid-second-two").playKeyframe('enteringrev 0.5s ease 0.2s normal forwards 1');
							$(".grid-second-three").playKeyframe('enteringrev 1.2s ease-in 0.4s 1 normal forwards');
							$(".grid-second-four").playKeyframe('enteringrev 0.2s ease 0.6s 1 normal forwards');
							$(".grid-second-five").playKeyframe('enteringrev 0.6s ease-in 0.8s 1 normal forwards');
								
							$(".main-second-content").playKeyframe('scrollthetextrev 1s ease 1 normal forwards initial' );
						
							/*$(".grid-first-one").playKeyframe('scrollitrev 1s ease-in 0s 1 normal forwards initial');
							$(".grid-first-two").playKeyframe('scrollitrev 0.5s ease 0.2s normal forwards initial');
							$(".grid-first-three").playKeyframe('scrollitrev 1.2s ease-in 0.4s 1 normal forwards initial');
							$(".grid-first-four").playKeyframe('scrollitrev 0.2s ease 0.6s 1 normal forwards initial');
							$(".grid-first-five").playKeyframe('scrollitrev 0.6s ease-in 0.8s 1 normal forwards initial');	
							//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
							$(".main-first-content").playKeyframe('scrollthetextrev 1s ease 1 normal forwards initial' );
*/
							count--;
							return;
						}
					}

				}

				else{
					return;
				}

				},100);	

		};
/*
	function openNav() {
    	document.getElementById("myNav").style.height = "100%";
	}

	
	function closeNav() {
	    document.getElementById("myNav").style.height = "0%";
	}
*/




/*
	var slideIndex = 1;
	showDivs(slideIndex);

	function plusDivs(n) {
	    showDivs(slideIndex += n);
	}

	function showDivs(n) {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    if (n > x.length) {slideIndex = 1} 
	    if (n < 1) {slideIndex = x.length} ;
	    for (i = 0; i < x.length; i++) {
	        x[i].style.display = "none"; 
	    }
	    x[slideIndex-1].style.display = "block"; 
	}

	function like_click(id,likes){
		alert("reached0");
		$.ajax({
			url: "likes.php",
			type: "post",
			data: {id:id,likes:likes},
			datatype: "html",
			success: function(response){
			$(".showlikes").html(response);
			alert(response);
			console.log(response);							
			}
								
		});
		alert("call complete");

	}

*/