<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<title>Login Page</title>
        <link rel="stylesheet" type="text/css" href="login.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="scripts.js"></script>
        
        <style>
        .error{
            display: none;
            margin-left: 10px;
        }		

        .error_show{
            color: red;
            margin-left: 10px;
        } 
        </style>
	</head>
	<body>
		<h1>Infinity DTH Services</h1>
            <div id="loginForm">
            <form role="form" form id="login" name="login" action="Login123" method="POST">
                <label for="userName">User Name:</label>
                <input id="userName" type="text" name="UserName"><br>
                <div id="userNameError"></div>
                
                <label>Password:</label>
                <input id="password" type="password" name="Password"><br>
                <div id="passwordError"></div>
                <input id="submit" type="submit" value="Submit">
            </form>
            </div>
            <div id="createNewAccount">
                <a id="newAccountLink" href="Registration.html">Create New Account</a>
            </div>
	</body>
</html>
				
				
			