<?php
	require 'dbconfig/config.php';
?>

<!DOCTYPE html>

<html lang="en">

<head>
	<meta charset = "UTF-8">
	<title>Mental-Health Awareness</title>
	<link rel="stylesheet" type="text/css" href="styling.css">
	<script type="text/javascript" src="jquery.js"></script>
	<script type="text/javascript" src="jquery.keyframes.min.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Arapey|Archivo+Black|Elsie+Swash+Caps|Playfair+Display|Anton|Rubik|Teko:600|Sacramento|Abril+Fatface|Cormorant+Garamond|Neucha|Unica+One|Old+Standard+TT" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/decolines.css" />
	<link rel="stylesheet" type="text/css" href="css/normalize.css" />
	<link rel="stylesheet" type="text/css" href="css/demo.css" />
	<link rel="stylesheet" type="text/css" href="css/lettereffect.css" />
	<link rel="stylesheet" type="text/css" href="css/pater.css" />

</head>

<body onwheel="scroller()">
	
	<div class="main-first-back">
		<div class="grids-first grid-first-one"></div>	
		<div class="grids-first grid-first-two"></div>
		<div class="grids-first grid-first-three"></div>
		<div class="grids-first grid-first-four"></div>
		<div class="grids-first grid-first-five"></div>
	</div>

	<div class="main-first-content" id="section3">
		<button onclick="openNav()" class="tab-bttn">EXPERIENCES</button>
		<!--<section class="content content--c3" id="section3">

				<div class="slideshow slideshow--3" data-effect="fx2">
					<div class="slide slide--current">
						<h2 class="title title--style-3 title--centered">Freedom</h2>
					</div>
					<div class="slide">
						<h2 class="title title--style-3 title--centered">Ba Ba Black Sheep, have you any wool ?</h2>
					</div>
					<div class="slide"><h2 class="title title--style-3 title--centered">Justice</h2></div>
					<div class="slide"><h2 class="title title--style-3 title--centered">Knowledge</h2></div>
				</div>
				a
				<nav class="actions">
					<button class="btn btn--trigger btn--prev">Previous</button>
					<button class="btn btn--trigger btn--next">Next</button>
				</nav>

		</section>-->
	</div>

	<div class="main-second-back">
		<div class="grids-second grid-second-one">First Scroll</div>	
		<div class="grids-second grid-second-two">First Scroll</div>
		<div class="grids-second grid-second-three">First Scroll</div>
		<div class="grids-second grid-second-four">First Scroll</div>
		<div class="grids-second grid-second-five">First Scroll</div>
	</div>	

	<div class="main-second-content">
		<p style="color:blue">aqw</p>
	</div>

	<div class="main-third-back">
		<div class="grids-third grid-third-one">Second Scroll</div>	
		<div class="grids-third grid-third-two">Second Scroll</div>
		<div class="grids-third grid-third-three">Second Scroll</div>
		<div class="grids-third grid-third-four">Second Scroll</div>
		<div class="grids-third grid-third-five">Second Scroll</div>
	</div>	

	<div class="main-third-content">
		<p style="color:blue">testing</p>
	</div>

	<div class="main-fourth-back">
		<div class="grids-fourth grid-fourth-one">Third Scroll</div>	
		<div class="grids-fourth grid-fourth-two">Third Scroll</div>
		<div class="grids-fourth grid-fourth-three">Third Scroll</div>
		<div class="grids-fourth grid-fourth-four">Third Scroll</div>
		<div class="grids-fourth grid-fourth-five">Third Scroll</div>
	</div>	

	<div class="main-fourth-content">
		<p style="color:blue">Let's see</p>
	</div>

	<!-- The overlay -->
	<div id="myNav" class="overlay">

  	<!-- Button to close the overlay navigation -->
  	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

  	<!-- Overlay content -->
  	<div class="overlay-content">
	    <div class="messages">
	    	<?php
				if(isset($_POST["addexp"])){
		    		$exp_message = $_POST["exptoadd"];
		    		$like_init = 0;
		    		$query = "INSERT into messages ";
		    		$query .="(messages,likes) ";
		    		$query .="VALUES ('{$exp_message}','{$like_init}')";
		    		$query_run=mysqli_query($con,$query);
		    		$_POST['exptoadd']=NULL;
	    		}

	    		$query = "select * from messages";
	    		$query_run=mysqli_query($con,$query);
				?>
				<div class="ind-exp">
			<?php
				while($result=mysqli_fetch_assoc($query_run)){
			?>
						<cite class="mySlides"><?php echo $result["messages"];?>
							<br>
							<?php
								if($result["likes"] !=0){
							?>
							<small><i><?php echo $result["likes"]?> people like this</i></small><?php }?>
							<button class="likes" onclick="increase_likes()">Like</button>
						</cite>
						
				<?php
				}
				?>	


					<button class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
					<button class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
	    
	    		</div>



	    <form action="index.php" method="POST" class="message-input">
			<textarea rows="4" cols="50" id="exptoadd" type="text" name="exptoadd" placeholder="Share your experience here"></textarea>
			<input id="submit_btn" type="submit" name="addexp" value="Submit"></input>	    
	    </form>

  	</div>

	</div>

	<!--Use any element to open/show the overlay navigation menu -->

	<script src="js/charming.min.js"></script>
	<script src="js/anime.min.js"></script>
	<script src="js/lineMaker.js"></script>
	<script src="js/imagesloaded.pkgd.min.js"></script>
	<script src="js/textfx.js"></script>
	<script type="text/javascript" src="main.js"></script>

</body>
	
</html>
