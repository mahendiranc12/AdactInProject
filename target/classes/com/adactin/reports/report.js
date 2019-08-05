$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 2,
  "name": "AdactIn Hotel End to End to test case",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AdactInTesting"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "User able to select the hotel booking",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User able to select \u0027\u003cCheckindate\u003e\u0027 in the Checkin date box",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User able to select \u0027\u003cCheckoutdate\u003e\u0027 in the checkout date box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User able to click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;",
  "rows": [
    {
      "cells": [
        "Checkindate",
        "Checkoutdate"
      ],
      "line": 24,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;;1"
    },
    {
      "cells": [
        "04/08/2019",
        "02/08/2019"
      ],
      "line": 25,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 623296,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User able to launch the Browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User able to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the username \u0027mahesathya12\u0027 in Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the password \u0027121291\u0027 in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click the signin Button in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Verify the username \u0027Hello mahesathya12!\u0027 displayed in the header",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_launch_the_application()"
});
formatter.result({
  "duration": 2946833963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahesathya12",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_username_mahesathya_in_Login_Page(String)"
});
formatter.result({
  "duration": 573904328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121291",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_password_in_Login_Page(String)"
});
formatter.result({
  "duration": 264949519,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_Click_the_signin_Button_in_Login_Page()"
});
formatter.result({
  "duration": 3364771136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello mahesathya12!",
      "offset": 26
    }
  ],
  "location": "AdactinStepDef.user_Verify_the_username_Hello_mahesathya_displayed_in_the_header(String)"
});
formatter.result({
  "duration": 53506304,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User able to select the hotel booking",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AdactInTesting"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User able to select \u002704/08/2019\u0027 in the Checkin date box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User able to select \u002702/08/2019\u0027 in the checkout date box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User able to click the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_location()"
});
formatter.result({
  "duration": 311399044,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_hotel()"
});
formatter.result({
  "duration": 284698392,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Room_type()"
});
formatter.result({
  "duration": 278771362,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Number_of_rooms()"
});
formatter.result({
  "duration": 224349655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_Checkin_date_box(String)"
});
formatter.result({
  "duration": 548352767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_checkout_date_box(String)"
});
formatter.result({
  "duration": 405755476,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_click_the_search_button()"
});
formatter.result({
  "duration": 230923271,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_logout_the_application()"
});
formatter.result({
  "duration": 1082811848,
  "status": "passed"
});
formatter.after({
  "duration": 962772,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "User able to select the hotel booking and verify the name",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User able to select \u0027\u003cCheckindate\u003e\u0027 in the Checkin date box",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to select \u0027\u003cCheckoutdate\u003e\u0027 in the checkout date box",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User able to select the adult counts",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User able to click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User able to verify the hotelname as given",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;",
  "rows": [
    {
      "cells": [
        "Checkindate",
        "Checkoutdate"
      ],
      "line": 41,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;;1"
    },
    {
      "cells": [
        "04/08/2019",
        "06/08/2019"
      ],
      "line": 42,
      "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 153159,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User able to launch the Browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User able to launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enter the username \u0027mahesathya12\u0027 in Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter the password \u0027121291\u0027 in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click the signin Button in Login Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Verify the username \u0027Hello mahesathya12!\u0027 displayed in the header",
  "keyword": "Then "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_launch_the_application()"
});
formatter.result({
  "duration": 704503477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mahesathya12",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_username_mahesathya_in_Login_Page(String)"
});
formatter.result({
  "duration": 326863798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "121291",
      "offset": 25
    }
  ],
  "location": "AdactinStepDef.user_enter_the_password_in_Login_Page(String)"
});
formatter.result({
  "duration": 266836378,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_Click_the_signin_Button_in_Login_Page()"
});
formatter.result({
  "duration": 1538389119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hello mahesathya12!",
      "offset": 26
    }
  ],
  "location": "AdactinStepDef.user_Verify_the_username_Hello_mahesathya_displayed_in_the_header(String)"
});
formatter.result({
  "duration": 42068299,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User able to select the hotel booking and verify the name",
  "description": "",
  "id": "adactin-hotel-end-to-end-to-test-case;user-able-to-select-the-hotel-booking-and-verify-the-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AdactInTesting"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User able to select the location",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User able to select the hotel",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User able to select the Room type",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User able to select the Number of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User able to select \u002704/08/2019\u0027 in the Checkin date box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User able to select \u002706/08/2019\u0027 in the checkout date box",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User able to select the adult counts",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User able to click the search button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User able to verify the hotelname as given",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User able to logout the application",
  "keyword": "And "
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_location()"
});
formatter.result({
  "duration": 283089430,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_hotel()"
});
formatter.result({
  "duration": 311445624,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Room_type()"
});
formatter.result({
  "duration": 269646537,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_Number_of_rooms()"
});
formatter.result({
  "duration": 202110363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_Checkin_date_box(String)"
});
formatter.result({
  "duration": 401770175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "06/08/2019",
      "offset": 21
    }
  ],
  "location": "AdactinStepDef.user_able_to_select_in_the_checkout_date_box(String)"
});
formatter.result({
  "duration": 381149713,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_select_the_adult_counts()"
});
formatter.result({
  "duration": 369775658,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_click_the_search_button()"
});
formatter.result({
  "duration": 1494835805,
  "status": "passed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_verify_the_hotelname_as_given()"
});
formatter.result({
  "duration": 50006928,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cHotel []\u003e but was:\u003cHotel [Creek]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.adactin.stepdef.AdactinStepDef.user_able_to_verify_the_hotelname_as_given(AdactinStepDef.java:115)\r\n\tat ✽.Then User able to verify the hotelname as given(src/test/java/com/adactin/feature/Adactin.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AdactinStepDef.user_able_to_logout_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 745245448,
  "status": "passed"
});
});