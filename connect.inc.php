<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	//specify $dbname = "database_name" on file that includes this before inclide statement
	$dbname = "social-experiences";
	try{
		$conn = new PDO ("mysql:host=$servername;dbname=$dbname",$username,$password);

		//set PDO error mode to exception

		$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

		//echo "connected successfully!!";
	}
	catch(PDOException $e){
		echo "connection failed :".$e->getMessage();
	}
	
?>