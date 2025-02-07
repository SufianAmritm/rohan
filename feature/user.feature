Feature: User API Testing

  Scenario: Verify Home Page Response
    Given the API server is running
    When I send a GET request to "/"
    Then the response status should be 200
    And the response should contain "<h1>Hello I'm Awais</h1>"

  Scenario: Get All Users
    Given the API server is running
    When I send a GET request to "/users"
    Then the response status should be 200
    And the response should contain a list of users
