Feature: feature6

  @regression @tag3
  Scenario Outline: buy item
    Given login with "<username>" and "<password>"
    Given add to basket "<item>" 1
    When open basket 5
    When checkout with first name "guy", last name "<firstname>", zip "100102" 1
    Then verify "Thank you for your order" can be found in the page

    Examples:
      | username   | password  | item                               | firstname |
      | blinq_user | let_me_in | Urban Backpack - Compact & Durable | {{data}}  |

  @regression
  Scenario Outline: jghj