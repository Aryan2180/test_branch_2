Feature: Ecommerce checkout flow

  Scenario Outline: Admin login and checkout
	# fill Username with <admin_username>, fill Password with <admin_password>, fill Username with <login_username>
    Given The user logs in with admin username "<admin_username>", admin password "<admin_password>", and login username "<login_username>"
	# click on Add to cart in the context of <keyboard_product_name>, click on Add to cart in the context of <bottle_product_name>, click on Go to cart
    When The user context clicks on Add to cart button in the context of "<keyboard_product_name>" and context clicks on Add to cart button in the context of "<bottle_product_name>" and navigates to the cart page
	# click on Checkout, fill First name with <first_name>, fill Last name with <last_name>, fill Zip/Postal code with <zip_code>, click on Checkout, click on Back home
    When The user completes the checkout process by entering first name "<first_name>", last name "<last_name>", and zip code "<zip_code>" and navigates back to the products page
    When logout-2

    Examples:
      | admin_username | admin_password | login_username | keyboard_product_name           | bottle_product_name              | first_name | last_name | zip_code |
      | blnq_admin     | let_me_in      | blinq_admin    | KeyX 3000 - Mechanical Keyboard | Mizu Bottle - Durable Hot & Cold | Aryan      | Goel      |      678 |