<?php
	include 'signup.php';
?>

<!doctype html>

<html>

	<head>
		<title>Register</title>
		<link rel="stylesheet" type="text/css" href="register.css">
		<script src="jquery-3.2.1.min.js"></script>
	</head>

	<body>

		

		<div id = "container">

			<div id = "field">

				<form action="signup.php" method="POST">

					<label class="detail">Firstname</label><br>
					<input type="text" name="firstname"  required>
					<br><br>
					<label class="detail">Message</label><br>
					<textarea rows="10" cols="35" type="text" name="msg"  required></textarea>
					<br><br>
					<label class="detail">Phone</label><br>
					<input type="text" maxlength="10" name="phone"  required>
					<br><br>
					<label class="detail">Age</label><br>
					<input type="text" name="age" id="age" required>
					<br><br>
					
					<input type="submit" value="Register" id="register">
					
					

					

				</form>


			</div>

		</div>


	</body>

</html>