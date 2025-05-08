Feature: feature2

  @tag3
  Scenario Outline: Logout Process 2
    Given navigate to the main menu
    When click on the logout button
    Then confirm logout "logout Process"

    Examples:
      | logout Process |
      | yes_off_course |