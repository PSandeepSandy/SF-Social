<?php
	require 'connect.inc.php';
	require 'core.inc.php';

	if(isset($_POST['msg'])&&isset($_POST['gender'])&&isset($_POST['age'])){
		
		
		$message = htmlspecialchars($_POST['msg']);
		$gender = $_POST["gender"];
		$age = $_POST['age'];
		

			if(!empty($gender)&&!empty($message)&&!empty($age)){
				
				
						//inserting code goes here
						$insert = $conn->prepare("INSERT INTO experiences(message,gender,age) VALUES(:message,:gender,:age)");

						//bind parameters
						
						$insert->bindParam(':message',$message);
						$insert->bindParam(':gender',$gender);
						$insert->bindParam(':age',$age);

						$insert->execute();
			}
	}

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
	<link href="https://fonts.googleapis.com/css?family=Merriweather|Special+Elite" rel="stylesheet">
	<!-- <link rel="stylesheet" type="text/css" href="materialize.min.css" />
 -->
</head>

<body onwheel="scroller()">
	
	<div class="main-first-back">
		<div class="grids-first grid-first-one boostKeyframe tray-center-1"></div>	
		<div class="grids-first grid-first-two boostKeyframe tray-center-2"></div>
		<div class="grids-first grid-first-three boostKeyframe tray-center-3"></div>
		<div class="grids-first grid-first-four boostKeyframe tray-center-4"></div>
		<div class="grids-first grid-first-five boostKeyframe tray-center-5"></div>
	</div>

	<div class="main-first-content tray-center boostKeyframe" id="section3">
		<!--<button onclick="openNav()" class="tab-bttn">EXPERIENCES</button>-->
		
		<img class="umang main-text-1" src="umang.png"></img>
		<a href="2018.beta.springfest.in"><img src="sf.png" class="sf main-text-1"></img></a>
		<a href="iitkgp.ac.in"><img src="iitkgp.png" class="insti main-text-1"></img></a>
		<a href="https://www.znetlive.com"><img src="zlogo.png" class= "znet main-text-1"></img></a>
		

		<p class="main-text main-text-1 quote-1-1">Mental illnesses affect 19% of the adult population, 46% of teenagers and 13% of children each year..However, only half of those affected receive treatment, often because of the stigma attached to mental health.</p>

		<p class="main-text main-text-1 quote-1-2">This year we at Spring Fest,IIT Kharagpur want to break the barriers and the stigma that engulfs mental health issues.Our aim is to make the maximum number of people aware of the fact that there is nothing to be ashamed of if you are suffering from mental health issues. Spring Fest brings together the exuberance of youth from all over India.</p>

		<video width="65%" height="40%" controls autoplay class="quote-1-3 main-text-1">
			<source src="videotest.mp4" type="video/mp4" />
		</video>

		<!-- <div id="video" class="quote-1-3 main-text-1">
	         <iframe id="frame" width="640" height="300" src="videotest.mp4" frameborder="0" allowfullscreen></iframe>       
	         
      	</div> -->



		<p class="main-text main-text-1 quote-1-4"><i>“Never give up on someone with mental illness.When ‘i’ becomes ‘we’ illness becomes wellness.”</i></p>

	</div>

	<div class="main-second-back">
		<div class="grids-second grid-second-one boostKeyframe tray-left-1"></div>	
		<div class="grids-second grid-second-two boostKeyframe tray-left-2"></div>
		<div class="grids-second grid-second-three boostKeyframe tray-left-3"></div>
		<div class="grids-second grid-second-four boostKeyframe tray-left-4"></div>
		<div class="grids-second grid-second-five boostKeyframe tray-left-5"></div>
	</div>	

	<div class="main-second-content tray-left boostKeyframe">
			
		<img class="umang main-text-2" src="umang.png"></img>
		<a href="2018.beta.springfest.in"><img src="sf.png" class="sf main-text-2"></img></a>
		<a href="iitkgp.ac.in"><img src="iitkgp.png" class="insti main-text-2"></img></a>
		<a href="https://www.znetlive.com"><img src="zlogo.png" class= "znet-2 main-text-2"></img></a>


		<p class="main-text-2 quote-2-1">First and foremost it's very important to understand why mental health is an issue at all. In the recent decades there has been a huge rise in depression or anxiety, this has been observed mostly in youth, which is even more frightening.</p> 
		<p class="main-text-2 quote-2-2">Next how do we tackle this situation? There are different types of mental health problems, depression, OCD, PTSD, etc.</p>
			<ul class="main-text-2 quote-2-3">
				<li><b>OCD</b>- OCD or obsessive compulsion disorder is a mental health condition, not a disease.The main symptoms are frequent agitations,mood swings,nightmares,repetition of same thing again and again,over thinking of small thing</li>
				<br />
				<li><b>PTSD</b>-PTSD or post traumatic stress disorder is a mental health condition. It mainly occurs due to an incident, a really bad incident, which occurred in the past. </li>
			</ul>
			
	</div>

	<div class="main-third-back">
		<div class="grids-third grid-third-one boostKeyframe tray-left-1"></div>	
		<div class="grids-third grid-third-two boostKeyframe tray-left-2"></div>
		<div class="grids-third grid-third-three boostKeyframe tray-left-3"></div>
		<div class="grids-third grid-third-four boostKeyframe tray-left-4"></div>
		<div class="grids-third grid-third-five boostKeyframe tray-left-5"></div>
	</div>	

	<div class="main-third-content tray-left boostKeyframe">
		
		<img class="umang main-text-3" src="umang.png"></img>
		<a href="2018.beta.springfest.in"><img src="sf.png" class="sf main-text-3"></img></a>
		<a href="iitkgp.ac.in"><img src="iitkgp.png" class="insti main-text-3"></img></a>
		<a href="https://www.znetlive.com"><img src="zlogo.png" class= "znet-3 main-text-3"></img></a>

		<ul class="main-text-3 quote-3-1">
			<li><b>Bipolar Disorder</b>-Bipolar disorder, also known as manic-depressive illness, is a brain disorder that causes unusual shifts in mood, energy, activity levels, and the ability to carry out day-to-day tasks.</li>
			<br />
			<li><b>Schizophrenia</b>-Schizophrenia is a chronic and severe mental disorder that affects how a person thinks, feels, and behaves. People with schizophrenia may seem like they have lost touch with reality. </li>
		</ul>
		
		<p class="main-text-3 quote-3-2">Finally what can you do? Firstly it's important to identify the type of problem the person has, which makes it a lot easier to help. We humans are social animals, so our best shot would be socializing. So, try to be friendly with every person irrespective of whether he/she is your friend or not. Be kind, be social and last but not least help them.</p>
	
	</div>

	<div class="main-fourth-back">
		<div class="grids-fourth grid-fourth-one boostKeyframe tray-left-1"></div>	
		<div class="grids-fourth grid-fourth-two boostKeyframe tray-left-2"></div>
		<div class="grids-fourth grid-fourth-three boostKeyframe tray-left-3"></div>
		<div class="grids-fourth grid-fourth-four boostKeyframe tray-left-4"></div>
		<div class="grids-fourth grid-fourth-five boostKeyframe tray-left-5"></div>
	</div>	

	<div class="main-fourth-content tray-left boostKeyframe">
		
		<img class="umang main-text-4" src="umang.png"></img>
		<a href="2018.beta.springfest.in"><img src="sf.png" class="sf main-text-4"></img></a>
		<a href="iitkgp.ac.in"><img src="iitkgp.png" class="insti main-text-4"></img></a>
		<a href="https://www.znetlive.com"><img src="zlogo.png" class= "znet-4 main-text-4"></img></a>


		<p class="main-text-4 quote-4-1">The stigma that surrounds mental health treatment can be done away with if we ourselves take up small activities to help those around us mentally fit and cheerful. Two of the ways in which we can do that are:</p>

		<ol class="main-text-4 quote-4-2">
			<li><b>Tap Left Tap Right</b>-Fix a time of the day when you are free every day and at that time go to your neighbour who lives to the left of you.Talk with him/her about how his day has been.Ask him if anything is bothering him and listen to him patiently.After that repeat the exercise for your neighbour who lives to your right.</li>
			<br />
			<li><b>Check the Bucket Level</b>-Choose any close acquaintance of yours and ask him/her to partner you in this activity. Every day randomly one of you will ask the other how full their bucket is. The level of the bucket is supposed to indicate how much stressed one is. If the bucket is full both of you need to sit down and discuss your problems until and unless the bucket is empty.</li>
		</ol>

		<p class="main-text-4 quote-4-3">These are only a few activities. We encourage you to come up with your own set of such activities and help us make the world a more cheerful place.</p>

		<div id="myNav" class="overlay main-text-4">

		  <!-- Button to close the overlay navigation -->
		  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

		  <!-- Overlay content -->
		  <div class="overlay-content main-text-4">
		    
		  		<p class="anonymous">We assure you complete anonymity.</p>

		    <form action="index.php" method="POST" class="experience">

		    		<input type="text" name="age" id="age" placeholder="Age" required>
					<br><br>
					<input type="radio" name="gender" value="male" checked> Male<br>
					<input type="radio" name="gender" value="female"> Female<br>
					<input type="radio" name="gender" value="other"> Other
					<br><br>
					<textarea rows="10" cols="35" type="text" name="msg" placeholder="Lighten your heart with us" required></textarea>
					<br><br>
					  
					
					
					<input type="submit" value="Submit" id="register">			

				</form>

		
		  </div>

		</div>

		<!-- Use any element to open/show the overlay navigation menu -->
		<button onclick="openNav()" class="main-text-4 share">Lighten your heart with us !</button>

	</div>

	<script type="text/javascript" src="main.js"></script>
	<script type="text/javascript" src="fade-in-effect.js"></script>
	<!-- <script src="materialize.min.js"></script> -->

</body>
	
</html>
