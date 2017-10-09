<?php
	require 'connect.inc.php';
	require 'core.inc.php';

	if(isset($_POST['firstname'])&&isset($_POST['msg'])&&isset($_POST['phone'])&&isset($_POST['age'])){
		
		$firstname = htmlspecialchars($_POST['firstname']);
		$message = htmlspecialchars($_POST['msg']);
		$phone = htmlspecialchars($_POST['phone']);
		$age = $_POST['age'];
		

			if(!empty($firstname)&&!empty($message)&&!empty($phone)&&!empty($age)){
				
				
						//inserting code goes here
						$insert = $conn->prepare("INSERT INTO register(firstname,message,phone,age) VALUES(:firstname,:message,:phone,:age)");

						//bind parameters
						
						$insert->bindParam(':firstname',$firstname);
						$insert->bindParam(':message',$message);
						$insert->bindParam(':phone',$phone);
						$insert->bindParam(':age',$age);

						$insert->execute();
			}
	}
?>