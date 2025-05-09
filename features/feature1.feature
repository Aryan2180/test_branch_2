Feature: feature3

  @regression
  Scenario Outline: Scene2
    When going to home and buying some stuff

  @tag1 @tag2
  Scenario Outline: Login and add to cart 2
	# fill Username with <username>, fill Password with <password>
    Given The user logs in with username "<username>" and password "<password>"
	# click on Add to cart in the context of <product_name>
    Then The user context clicks on Add to cart button in the context of "<product_name>"

    Examples:
      | username   | password  | product_name                    |
      | blinq_user | let_me_in | KeyX 3000 - Mechanical Keyboard |
	
Scenario Outline: scene45
	# fill Username with <username>, fill Password with <password>, click on Login
	Given The user logs in with username "<username>" and password "<password>" 2
		Examples:
		| username | password |
		| grdtf    | 875645   |
