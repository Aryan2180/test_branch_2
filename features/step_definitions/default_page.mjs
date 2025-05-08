import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { css: 'internal:label="Username"i', priority: 1 },
      { css: 'internal:label="Username"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password: {
    locators: [
      { css: 'internal:label="Password"i', priority: 1 },
      { css: 'internal:label="Password"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
  },
  button_log_in: {
    locators: [
      { css: 'internal:role=button[name="Log In"i]', priority: 1 },
      { css: 'internal:role=button[name="Log In"s]', priority: 1 },
      { css: 'internal:text="Log In"s', priority: 1 },
      { css: 'input >> internal:has-text="Log In"i', priority: 1 },
      { css: "input >> internal:has-text=/^Log In$/", priority: 1 },
    ],
    element_name: "Log In button",
  },
};

let context = null;
Before(async function () {
  if (!context) {
    context = await initContext(path, false, false, this);
  }
  await navigate(path);
});
After(async function () {
  await closeContext();
  context = null;
});
/**
 * The user logs in with username "<username>" and password "<password>" 1
 * @param {string} _username  username
 * @param {string} _password  password
 * @recorder
 * @path=/
 */
async function the_user_logs_in_with_username_username_and_password_password_1(_username, _password) {
  // source: recorder
  // implemented_at: 2025-05-07T11:46:36.855Z
  const _params = { _username, _password };
  // Click on Username textbox
  await context.web.click(elements["textbox_username"], _params, null, this);
  // Fill Username textbox with ""{{username}}""
  await context.web.clickType(elements["textbox_username"], "{{username}}", false, _params, null, this);
  // Fill Password textbox with ""{{password}}""
  await context.web.clickType(elements["textbox_password"], "{{password}}", false, _params, null, this);
  // Click on Log In button
  await context.web.click(elements["button_log_in"], _params, null, this);
}

Given(
  "The user logs in with username {string} and password {string} 1",
  { timeout: 240000 },
  the_user_logs_in_with_username_username_and_password_password_1
);
