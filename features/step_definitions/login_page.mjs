import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { role: ["textbox", { name: "Username *" }] },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Username"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Username"s]' },
      { strategy: "ID", css: "#username", priority: 1 },
      { strategy: "NAME", css: 'internal:attr=[name="username"i]', priority: 1 },
    ],
    element_name: "Username",
  },
  textbox_password: {
    locators: [
      { role: ["textbox", { name: "Password *" }] },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Password"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Password"s]' },
      { strategy: "ID", css: "#password", priority: 1 },
      { strategy: "NAME", css: 'internal:attr=[name="password"i]', priority: 1 },
    ],
    element_name: "Password",
  },
  button_login: {
    locators: [
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="LOGIN"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="LOGIN"s]' },
    ],
    element_name: "LOGIN button",
  },
  textbox_username_1: {
    locators: [
      { css: 'internal:label="Username *"i', priority: 1 },
      { css: 'internal:label="Username *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username textbox",
  },
  textbox_password_1: {
    locators: [
      { css: 'internal:label="Password *"i', priority: 1 },
      { css: 'internal:label="Password *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password textbox",
  },
  button_login_1: {
    locators: [
      { css: 'internal:role=button[name="Login"i]', priority: 1 },
      { css: 'internal:role=button[name="Login"s]', priority: 1 },
      { css: 'internal:text="Login"i', priority: 1 },
      { css: 'internal:text="Login"s', priority: 1 },
      { css: 'button >> internal:has-text="Login"i', priority: 1 },
      { css: "button >> internal:has-text=/^Login$/", priority: 1 },
    ],
    element_name: "Login button",
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
 * login with "<username>" and "<password>"
 * @param {string} _username  username
 * @param {string} _password  password
 * @ai
 * @path=/login
 */
async function login_with_username_and_password(_username, _password) {
  // source: ai
  // implemented_at: 2025-05-07T10:20:08.831Z
  const _params = { _username, _password };
  // Fill Username with "_username"
  await context.web.clickType(elements["textbox_username"], _username, false, _params, null, this);
  // Fill Password with "_password"
  await context.web.clickType(elements["textbox_password"], _password, false, _params, null, this);
  // Click on LOGIN button
  await context.web.click(elements["button_login"], _params, null, this);
}

Given("login with {string} and {string}", { timeout: 240000 }, login_with_username_and_password);

/**
 * The user logs in with username "<username>" and password "<password>"
 * @param {string} _username  username
 * @param {string} _password  password
 * @recorder
 * @path=/login
 */
async function the_user_logs_in_with_username_username_and_password_password(_username, _password) {
  // source: recorder
  // implemented_at: 2025-05-07T11:32:34.556Z
  const _params = { _username, _password };
  // Fill Username textbox with "_username"
  await context.web.clickType(elements["textbox_username_1"], _username, false, _params, null, this);
  // Press Tab
  await context.web.clickType(elements["textbox_username_1"], "Tab", null, _params, { press: true }, this);
  // Fill Password textbox with "_password"
  await context.web.clickType(elements["textbox_password_1"], _password, false, _params, null, this);
  // Press Tab
  await context.web.clickType(elements["textbox_password_1"], "Tab", null, _params, { press: true }, this);
  // Press Enter
  await context.web.clickType(elements["button_login_1"], "Enter", null, _params, { press: true }, this);
}

Given(
  "The user logs in with username {string} and password {string}",
  { timeout: 300000 },
  the_user_logs_in_with_username_username_and_password_password
);
