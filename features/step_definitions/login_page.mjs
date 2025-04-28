import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { css: 'internal:label="Username *"i', priority: 1 },
      { css: 'internal:label="Username *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password: {
    locators: [
      { css: 'internal:label="Password *"i', priority: 1 },
      { css: 'internal:label="Password *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
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
 * The user logs in with admin username "<admin_username>", admin password "<admin_password>", and login username "<login_username>"
 * @param {string} _admin_username  admin username
 * @param {string} _admin_password  admin password
 * @param {string} _login_username  login username
 * @recorder
 * @path=/login
 */
async function the_user_logs_in_with_admin_username_admin_username_admin_password_admin_password_and_login_username_login_username(
  _admin_username,
  _admin_password,
  _login_username
) {
  // source: recorder
  // implemented_at: 2025-04-28T11:29:56.228Z
  const _params = { _admin_username, _admin_password, _login_username };
  // Fill Username textbox with "_admin_username"
  await context.web.clickType(elements["textbox_username"], _admin_username, false, _params, null, this);
  // Press Tab
  await context.web.clickType(elements["textbox_username"], "Tab", null, _params, { press: true }, this);
  // Fill Password textbox with "_admin_password"
  await context.web.clickType(elements["textbox_password"], _admin_password, false, _params, null, this);
  // Press Enter
  await context.web.clickType(elements["textbox_password"], "Enter", null, _params, { press: true }, this);
  // Fill Username textbox with "_login_username"
  await context.web.clickType(elements["textbox_username"], _login_username, false, _params, null, this);
  // Press Enter
  await context.web.clickType(elements["textbox_username"], "Enter", null, _params, { press: true }, this);
}

Given(
  "The user logs in with admin username {string}, admin password {string}, and login username {string}",
  { timeout: 360000 },
  the_user_logs_in_with_admin_username_admin_username_admin_password_admin_password_and_login_username_login_username
);
