<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="css/login.css">
</head>
<body>
	<div class="container">
		<div class="loginAll">
			<div class="loginCover">
				<input type="radio" id="tabOne" name="tab" class="loginFlag">
				<label for="tabOne" class="tab" id="loginF">登录</label>
				<div class="loginFormAll">
					<form action="/login" method="post">
						<div class="loginForm">
							<div class="group">
								<div class="groupTltle">USERNAME</div>
								<input type="text" id="user" class="groupInput" name="name">
							</div>
							<div class="group">
								<div class="groupTltle">PASSWORD</div>
								<input type="password" id="user" class="groupInput" name="password">
							</div>
							<div class="group">
								<input value="登录" type="submit"class="groupInputB" style="background: rgba(255,255,255,.96);" id="loginButton">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>



</body>
</html>
