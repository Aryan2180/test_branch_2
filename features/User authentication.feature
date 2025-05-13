Feature: User authentication
	
Scenario Outline: Login with username and password
	# fill Username with <username>, click on Login, fill Password with <password>, click on Login
	Given The user logs in with username "<username>" and password "<password>" 3
		Examples:
		| username | password |
		| hello    | world    |
