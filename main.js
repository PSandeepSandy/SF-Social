		
		var count = 0;

		function scroller(){
				count++;
				console.log(count);		
				$.keyframe.define([{
				   	name: 'scrollit',
				    '100%': {'transform' : 'translate(100%,0)'}
					
				}]);	

					
					$(".grid-first-one").playKeyframe('scrollit 1s ease-in 0s 1 normal forwards');
					$(".grid-first-two").playKeyframe('scrollit 0.5s ease 0.2s normal forwards 1');
					$(".grid-first-three").playKeyframe('scrollit 1.2s ease-in 0.4s 1 normal forwards');
					$(".grid-first-four").playKeyframe('scrollit 0.2s ease 0.6s 1 normal forwards');
					$(".grid-first-five").playKeyframe('scrollit 0.6s ease-in 0.8s 1 normal forwards');

					$("body").css("background","url('test2.png')");
					$("body").css("background-repeat","no-repeat");

					if(count==1){
						setTimeout(function(){
							$.ajax({
							url:"first.php",
							type:"post",
							data:{count:count},
							datatype:"html",
							success:function(response){
								$(".main-second-content").html(response);
								/*$("main-first-content").css("display","none");*/
							}	
						});
						},1500);
						
					}

					/*if(count==2){
						$.ajax({
							url:"",
							type:"post",
							data:{count:count},
							datatype:"html",
							success:function(response){
								$("body").html(response);
							}	
						});
					}*/					
								

			};
