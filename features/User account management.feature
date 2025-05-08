Feature: User account management
	
Scenario Outline: User login and account creation
	# click on Username, fill Username with {{username}}, fill Password with {{password}}, click on Log In
	Given The user logs in with username "<username>" and password "<password>" 1
	# fill Verification Code with {{toooop}}, click on Verify
	Given The user verifies identity by entering verification code "<verification_code>" and clicking Verify
	# click on Accounts, click on New, fill *Account Name with <account_name>, click on Search Accounts..., click on Billing, click on Save
	When The user creates a new account with account name "<account_name>" and saves it
	# click on View profile : user avatar top right, click on View profile, click on Log Out
	When The user logs out from the application via the profile menu
		Examples:
		| username     | password     | verification_code | account_name |
		| {{username}} | {{password}} | {{toooop}}        | Test_acc     |
