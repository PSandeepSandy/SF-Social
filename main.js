<script type="text/javascript">
		$(document).ready(function(){
			alert("Hello");
			
			function scroller(){
				$(".grid-one").css("animation","scrollit 1s ease 0s 1");
				$(".grid-two").css("animation","scrollit 1s ease 0.2s 1");
				$(".grid-three").css("animation","scrollit 1s ease 0.4s 1");
				$(".grid-four").css("animation","scrollit 1s ease 0.6s 1");
				$(".grid-five").css("animation","scrollit 1s ease 0.8s 1");

				$(".grid-one").css("animation","initial");
				$(".grid-two").css("animation","initial");
				$(".grid-three").css("animation","initial");
				$(".grid-four").css("animation","initial");
				$(".grid-five").css("animation","initial");			
			};


			$(window).scroll(function(){
				alert("Checking");
				scroller();
			});

		});
</script>	