<?php
	$con=mysqli_connect("localhost","root","") or die("Unable to connect");
	mysqli_select_db($con,"social-messages");
	
	$connect=mysqli_connect("localhost","root","") or die("Unable to connect");
	mysqli_select_db($connect,"social-messages");
	
	/*$con=mysqli_connect("2a02:4780:bad:c0de::14","id2166999_webprojectro","Nestle%1") or die("Unable to connect");
	mysqli_select_db($con,"projectro");
	
	$connect=mysqli_connect("2a02:4780:bad:c0de::14","id2166999_webprojectro","Nestle%1") or die("Unable to connect");
	mysqli_select_db($connect,"projectro");*/
	
?>
