<?php
	require 'dbconfig/config.php';

	$query = "select * from messages where id = ";
	$query .= $_POST["id"];
	$query_run=mysqli_query($con,$query);

	while($result=mysqli_fetch_assoc($query_run)){
		$query = "UPDATE messages SET likes=";
		$query .= $_POST["likes"]+1; 
		$query .= "WHERE id = ";
		$query .=  $_POST["id"];
		$query .= ";";
	}
	echo mysqli_error($con);

	/*if(mysqli_affected_rows($con)==1){
		
		echo ($_POST["likes"]+1) ." people like this";
	}*/
?>