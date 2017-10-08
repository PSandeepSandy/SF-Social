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
					
					var threshold = 20;
				        if (e.originalEvent.wheelDelta > threshold) {
				            
				            direction = 1; 
				        		
				        }
				        else if(e.originalEvent.wheelDelta < -threshold){
				            direction = -1;
				           
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

								$(".grid-second-one").removeClass("tray-center-1");
								$(".grid-second-two").removeClass("tray-center-2");
								$(".grid-second-three").removeClass("tray-center-3");
								$(".grid-second-four").removeClass("tray-center-4");
								$(".grid-second-five").removeClass("tray-center-5");
								
								$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
								$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0s 1 normal forwards initial');
								$(".grid-first-three").playKeyframe('scrollit 1.2s ease-in 0s 1 normal forwards initial');
								$(".grid-first-four").playKeyframe('scrollit 0.2s ease 0s 1 normal forwards initial');
								$(".grid-first-five").playKeyframe('scrollit 0.6s ease-in 0s 1 normal forwards initial');	
								//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
								$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial');

								$(".grid-second-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
								$(".grid-second-two").playKeyframe('entering 0.5s ease 0s normal forwards');
								$(".grid-second-three").playKeyframe('entering 1.2s ease-in 0s 1 normal forwards');
								$(".grid-second-four").playKeyframe('entering 0.2s ease 0s 1 normal forwards');
								$(".grid-second-five").playKeyframe('entering 0.6s ease-in 0s 1 normal forwards');

								$(".grid-first-one").removeClass("tray-right-1");
								$(".grid-first-two").removeClass("tray-right-2");
								$(".grid-first-three").removeClass("tray-right-3");
								$(".grid-first-four").removeClass("tray-right-4");
								$(".grid-first-five").removeClass("tray-right-5");

								$(".grid-first-one").addClass("tray-center-1");
								$(".grid-first-two").addClass("tray-center-2");
								$(".grid-first-three").addClass("tray-center-3");
								$(".grid-first-four").addClass("tray-center-4");
								$(".grid-first-five").addClass("tray-center-5");




								count++;
								return;
						}

					}		

					if((curtime-time)>1600){ 

									time = curtime;					

									if(direction === -1){
										
										//if(timedOut == 0){
											
											if(count==0){		

												$(".grid-second-one").removeClass("tray-center-1");
												$(".grid-second-two").removeClass("tray-center-2");
												$(".grid-second-three").removeClass("tray-center-3");
												$(".grid-second-four").removeClass("tray-center-4");
												$(".grid-second-five").removeClass("tray-center-5");
												
												$(".grid-first-one").playKeyframe('');
												$(".grid-first-two").playKeyframe('');
												$(".grid-first-three").playKeyframe('');
												$(".grid-first-four").playKeyframe('');
												$(".grid-first-five").playKeyframe('');
												
												$(".grid-second-one").playKeyframe('');
												$(".grid-second-two").playKeyframe('');
												$(".grid-second-three").playKeyframe('');
												$(".grid-second-four").playKeyframe('');
												$(".grid-second-five").playKeyframe('');

												setTimeout(function(){
												$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
												$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0s 1 normal forwards initial');
												$(".grid-first-three").playKeyframe('scrollit 1.2s ease-in 0s 1 normal forwards initial');
												$(".grid-first-four").playKeyframe('scrollit 0.2s ease 0s 1 normal forwards initial');
												$(".grid-first-five").playKeyframe('scrollit 0.6s ease-in 0s 1 normal forwards initial');		
												},10);
												
												//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
												// $(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial');
												setTimeout(function(){
												$(".grid-second-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
												$(".grid-second-two").playKeyframe('entering 0.5s ease 0s normal forwards');
												$(".grid-second-three").playKeyframe('entering 1.2s ease-in 0s 1 normal forwards');
												$(".grid-second-four").playKeyframe('entering 0.2s ease 0s 1 normal forwards');
												$(".grid-second-five").playKeyframe('entering 0.6s ease-in 0s 1 normal forwards');
												},10);
												

												$(".grid-first-one").removeClass("tray-right-1");
												$(".grid-first-two").removeClass("tray-right-2");
												$(".grid-first-three").removeClass("tray-right-3");
												$(".grid-first-four").removeClass("tray-right-4");
												$(".grid-first-five").removeClass("tray-right-5");

												$(".grid-first-one").addClass("tray-center-1");
												$(".grid-first-two").addClass("tray-center-2");
												$(".grid-first-three").addClass("tray-center-3");
												$(".grid-first-four").addClass("tray-center-4");
												$(".grid-first-five").addClass("tray-center-5");




												count++;
												return;
											}

											else if(count==1){

												// $(".grid-second-one").removeClass("tray-left-1");
												// $(".grid-second-two").removeClass("tray-left-2");
												// $(".grid-second-three").removeClass("tray-left-3");
												// $(".grid-second-four").removeClass("tray-left-4");
												// $(".grid-second-five").removeClass("tray-left-5");

												$(".grid-second-one").addClass("tray-center-1");
												$(".grid-second-two").addClass("tray-center-2");
												$(".grid-second-three").addClass("tray-center-3");
												$(".grid-second-four").addClass("tray-center-4");
												$(".grid-second-five").addClass("tray-center-5");

												$(".grid-second-one").playKeyframe('');
												$(".grid-second-two").playKeyframe('');
												$(".grid-second-three").playKeyframe('');
												$(".grid-second-four").playKeyframe('');
												$(".grid-second-five").playKeyframe('');

												$(".grid-third-one").playKeyframe('');
												$(".grid-third-two").playKeyframe('');
												$(".grid-third-three").playKeyframe('');
												$(".grid-third-four").playKeyframe('');
												$(".grid-third-five").playKeyframe('');


												setTimeout(function(){
												$(".grid-second-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
												$(".grid-second-two").playKeyframe('scrollit 0.5s ease 0s normal forwards initial');
												$(".grid-second-three").playKeyframe('scrollit 1.2s ease-in 0s 1 normal forwards initial');
												$(".grid-second-four").playKeyframe('scrollit 0.2s ease 0s 1 normal forwards initial');
												$(".grid-second-five").playKeyframe('scrollit 0.6s ease-in 0s 1 normal forwards initial');	
												
												$(".main-second-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial' );

												$(".grid-third-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
												$(".grid-third-two").playKeyframe('entering 0.5s ease 0s normal forwards ');
												$(".grid-third-three").playKeyframe('entering 1.2s ease-in 0s 1 normal forwards');
												$(".grid-third-four").playKeyframe('entering 0.2s ease 0s 1 normal forwards');
												$(".grid-third-five").playKeyframe('entering 0.6s ease-in 0s 1 normal forwards');
												

												},10);
						
												count++;
												//timedOut++;
												return;
											}				
											
											else if(count==2){
												console.log("i aint here");
												$(".grid-third-one").addClass("tray-center-1");
												$(".grid-third-two").addClass("tray-center-2");
												$(".grid-third-three").addClass("tray-center-3");
												$(".grid-third-four").addClass("tray-center-4");
												$(".grid-third-five").addClass("tray-center-5");
												console.log("Told u, I aint here");

												$(".grid-third-one").addClass("tray-right-1");
												$(".grid-third-two").addClass("tray-right-2");
												$(".grid-third-three").addClass("tray-right-3");
												$(".grid-third-four").addClass("tray-right-4");
												$(".grid-third-five").addClass("tray-right-5");

												$(".grid-third-one").playKeyframe('');
												$(".grid-third-two").playKeyframe('');
												$(".grid-third-three").playKeyframe('');
												$(".grid-third-four").playKeyframe('');
												$(".grid-third-five").playKeyframe('');

												$(".grid-fourth-one").playKeyframe('');
												$(".grid-fourth-two").playKeyframe('');
												$(".grid-fourth-three").playKeyframe('');
												$(".grid-fourth-four").playKeyframe('');
												$(".grid-fourth-five").playKeyframe('');

												setTimeout(function(){
												$(".grid-third-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards initial');
												$(".grid-third-two").playKeyframe('scrollit 0.5s ease 0s normal forwards initial');
												$(".grid-third-three").playKeyframe('scrollit 1.2s ease-in 0s 1 normal forwards initial');
												$(".grid-third-four").playKeyframe('scrollit 0.2s ease 0s 1 normal forwards initial');
												$(".grid-third-five").playKeyframe('scrollit 0.6s ease-in 0s 1 normal forwards initial');	
												
												$(".main-third-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial');

												$(".grid-fourth-one").playKeyframe('entering 1s ease-in 0s 1 normal forwards');
												$(".grid-fourth-two").playKeyframe('entering 0.5s ease 0s normal forwards ');
												$(".grid-fourth-three").playKeyframe('entering 1.2s ease-in 0s 1 normal forwards');
												$(".grid-fourth-four").playKeyframe('entering 0.2s ease 0s 1 normal forwards');
												$(".grid-fourth-five").playKeyframe('entering 0.6s ease-in 0s 1 normal forwards');
												},10);
												
												//timedOut++;
												count++;
												return;
											}			
										
									}

									else if(direction === 1){
										
										//Just the reverse animations...
										if(count==3){
											/*$(".grid-third-one").removeClass("tray-center-1");
											$(".grid-third-two").removeClass("tray-center-2");
											$(".grid-third-three").removeClass("tray-center-3");
											$(".grid-third-four").removeClass("tray-center-4");
											$(".grid-third-five").removeClass("tray-center-5");*/

											$(".grid-third-one").addClass("tray-right-1");
											$(".grid-third-two").addClass("tray-right-2");
											$(".grid-third-three").addClass("tray-right-3");
											$(".grid-third-four").addClass("tray-right-4");
											$(".grid-third-five").addClass("tray-right-5");

											$(".grid-fourth-one").addClass("tray-center-1");
											$(".grid-fourth-two").addClass("tray-center-2");
											$(".grid-fourth-three").addClass("tray-center-3");
											$(".grid-fourth-four").addClass("tray-center-4");
											$(".grid-fourth-five").addClass("tray-center-5");

											$(".grid-third-one").playKeyframe('');
											$(".grid-third-two").playKeyframe('');
											$(".grid-third-three").playKeyframe('');
											$(".grid-third-four").playKeyframe('');
											$(".grid-third-five").playKeyframe('');


											$(".grid-fourth-one").playKeyframe('');
											$(".grid-fourth-two").playKeyframe('');
											$(".grid-fourth-three").playKeyframe('');
											$(".grid-fourth-four").playKeyframe('');
											$(".grid-fourth-five").playKeyframe('');

											setTimeout(function(){
												$(".grid-third-one").playKeyframe('scrollit 1s ease-in 0s 1 reverse forwards initial');
												$(".grid-third-two").playKeyframe('scrollit 0.5s ease 0s reverse forwards initial');
												$(".grid-third-three").playKeyframe('scrollit 1.2s ease-in 0s 1 reverse forwards initial');
												$(".grid-third-four").playKeyframe('scrollit 0.2s ease 0s 1 reverse forwards initial');
												$(".grid-third-five").playKeyframe('scrollit 0.6s ease-in 0s 1 reverse forwards initial');	
											},10);
											
											//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
											$(".main-third-content").playKeyframe('scrollthetext 1s ease 1 reverse forwards initial');

											setTimeout(function(){
												$(".grid-fourth-one").playKeyframe('entering 1s ease-in 0s 1 reverse forwards');
												$(".grid-fourth-two").playKeyframe('entering 0.5s ease 0s reverse forwards ');
												$(".grid-fourth-three").playKeyframe('entering 1.2s ease-in 0s 1 reverse forwards');
												$(".grid-fourth-four").playKeyframe('entering 0.2s ease 0s 1 reverse forwards');
												$(".grid-fourth-five").playKeyframe('entering 0.6s ease-in 0s 1 reverse forwards');
											},10);
											
										
											$(".main-fourth-content").playKeyframe('scrollthetext 1s ease 1 reverse forwards initial');

											count--;
											return;

										}	

										else if(count==2){

											$(".grid-third-one").removeClass("tray-right-1");
											$(".grid-third-two").removeClass("tray-right-2");
											$(".grid-third-three").removeClass("tray-right-3");
											$(".grid-third-four").removeClass("tray-right-4");
											$(".grid-third-five").removeClass("tray-right-5");

											$(".grid-third-one").addClass("tray-center-1");
											$(".grid-third-two").addClass("tray-center-2");
											$(".grid-third-three").addClass("tray-center-3");
											$(".grid-third-four").addClass("tray-center-4");
											$(".grid-third-five").addClass("tray-center-5");

											/*$(".grid-second-one").addClass("tray-right-1");
											$(".grid-second-two").addClass("tray-right-2");
											$(".grid-second-three").addClass("tray-right-3");
											$(".grid-second-four").addClass("tray-right-4");
											$(".grid-second-five").addClass("tray-right-5");*/

											$(".grid-second-one").playKeyframe('');
											$(".grid-second-two").playKeyframe('');
											$(".grid-second-three").playKeyframe('');
											$(".grid-second-four").playKeyframe('');
											$(".grid-second-five").playKeyframe('');

											$(".grid-third-one").playKeyframe('');
											$(".grid-third-two").playKeyframe('');
											$(".grid-third-three").playKeyframe('');
											$(".grid-third-four").playKeyframe('');
											$(".grid-third-five").playKeyframe('');

											setTimeout(function(){
												$(".grid-third-one").playKeyframe('entering 1s ease-in 0s 1 reverse forwards');
												$(".grid-third-two").playKeyframe('entering 0.5s ease 0s reverse forwards 1');
												$(".grid-third-three").playKeyframe('entering 1.2s ease-in 0s 1 reverse forwards');
												$(".grid-third-four").playKeyframe('entering 0.2s ease 0s 1 reverse forwards');
												$(".grid-third-five").playKeyframe('entering 0.6s ease-in 0s 1 reverse forwards');
											
												$(".main-third-content").playKeyframe('scrollthetext 1s ease 1 reverse forwards initial' );
										
												$(".grid-second-one").playKeyframe('scrollit 1s ease-in 0s 1 reverse forwards initial');
												$(".grid-second-two").playKeyframe('scrollit 0.5s ease 0s reverse forwards initial');
												$(".grid-second-three").playKeyframe('scrollit 1.2s ease-in 0s 1 reverse forwards initial');
												$(".grid-second-four").playKeyframe('scrollit 0.2s ease 0s 1 reverse forwards initial');
												$(".grid-second-five").playKeyframe('scrollit 0.6s ease-in 0s 1 reverse forwards initial');	
												//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
												$(".main-second-content").playKeyframe('scrollthetext 1s ease 1 reverse forwards initial' );

											},10);

												
											

											count--;
											return;

										}

										else if(count==1){
																
											$(".grid-second-one").removeClass("tray-center-1");
											$(".grid-second-two").removeClass("tray-center-2");
											$(".grid-second-three").removeClass("tray-center-3");
											$(".grid-second-four").removeClass("tray-center-4");
											$(".grid-second-five").removeClass("tray-center-5");




											$(".grid-second-one").playKeyframe('');
											$(".grid-second-two").playKeyframe('');
											$(".grid-second-three").playKeyframe('');
											$(".grid-second-four").playKeyframe('');
											$(".grid-second-five").playKeyframe('');

											setTimeout(function(){
												
												$(".grid-second-one").playKeyframe('entering 1s ease-in 0s 1 reverse forwards');
												$(".grid-second-two").playKeyframe('entering 0.5s ease 0s reverse forwards 1');
												$(".grid-second-three").playKeyframe('entering 1.2s ease-in 0s 1 reverse forwards');
												$(".grid-second-four").playKeyframe('entering 0.2s ease 0s 1 reverse forwards');
												$(".grid-second-five").playKeyframe('entering 0.6s ease-in 0s 1 reverse forwards');
													
											},10);

											$(".main-second-content").playKeyframe('scrollthetext 1s ease 1 reverse forwards initial' );
										
											setTimeout(function(){

											$(".grid-first-one").playKeyframe('scrollitrev 1s ease-in 0s 1 reverse forwards initial');
											$(".grid-first-two").playKeyframe('scrollitrev 0.5s ease 0s reverse forwards initial');
											$(".grid-first-three").playKeyframe('scrollitrev 1.2s ease-in 0s 1 reverse forwards initial');
											$(".grid-first-four").playKeyframe('scrollitrev 0.2s ease 0s 1 reverse forwards initial');
											$(".grid-first-five").playKeyframe('scrollitrev 0.6s ease-in 0s 1 reverse forwards initial');	

										},10);
											//TO BE CHANGED AND TO INCORPORATE GRADUAL SCROLL
											$(".main-first-content").playKeyframe('scrollthetext 1s ease 1 normal forwards initial' );

											/*$(".grid-first-one").addClass("tray-right-1");
											$(".grid-first-two").addClass("tray-right-2");
											$(".grid-first-three").addClass("tray-right-3");
											$(".grid-first-four").addClass("tray-right-4");
											$(".grid-first-five").addClass("tray-right-5");
				*/
											count--;
											return;
										}
									}
								}	
								else {
									return;
								}

				},300);	

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