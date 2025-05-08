import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  link_accounts: {
    locators: [
      { css: 'internal:role=link[name="Accounts"i]', priority: 1 },
      { css: 'internal:role=link[name="Accounts"s]', priority: 1 },
      { css: "a >> internal:has-text=/^Accounts$/", priority: 1 },
    ],
    element_name: "Accounts link",
  },
  button_new: {
    locators: [
      { css: 'internal:role=button[name="New"i]', priority: 1 },
      { css: 'internal:role=button[name="New"s]', priority: 1 },
      { css: 'internal:text="New"s >> xpath=..', priority: 1 },
      { css: "a >> internal:has-text=/^New$/", priority: 1 },
    ],
    element_name: "New button",
  },
  textbox_account_name: {
    locators: [
      { css: 'internal:label="*Account Name"i', priority: 1 },
      { css: 'internal:label="*Account Name"s', priority: 1 },
      { css: 'internal:role=textbox[name="*Account Name"i]', priority: 1 },
      { css: 'internal:role=textbox[name="*Account Name"s]', priority: 1 },
    ],
    element_name: "*Account Name textbox",
  },
  combobox_search_accounts_: {
    locators: [
      { css: 'internal:label="Parent Account"i', priority: 1 },
      { css: 'internal:label="Parent Account"s', priority: 1 },
    ],
    element_name: "Search Accounts... combobox",
  },
  option_billing: {
    locators: [
      { css: 'internal:role=option[name="Billing"i]', priority: 1 },
      { css: 'internal:role=option[name="Billing"s]', priority: 1 },
      { css: 'lightning-base-combobox-item >> internal:has-text="Billing"i', priority: 1 },
      { css: "lightning-base-combobox-item >> internal:has-text=/^Billing$/", priority: 1 },
    ],
    element_name: "Billing option",
  },
  button_save: {
    locators: [
      { css: 'internal:role=button[name="Save"s]', priority: 1 },
      { css: 'button.slds-button.slds-button_brand[name="SaveEdit"]', priority: 3 },
    ],
    element_name: "Save button",
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
 * The user creates a new account with account name "<account_name>" and saves it
 * @param {string} _account_name  account name
 * @recorder
 * @path=/lightning/page/home
 */
async function the_user_creates_a_new_account_with_account_name_account_name_and_saves_it(_account_name) {
  // source: recorder
  // implemented_at: 2025-05-07T11:46:37.072Z
  const _params = { _account_name };
  // Click on Accounts link
  await context.web.click(elements["link_accounts"], _params, null, this);
  // Click on New button
  await context.web.click(elements["button_new"], _params, null, this);
  // Fill *Account Name textbox with "_account_name"
  await context.web.clickType(elements["textbox_account_name"], _account_name, false, _params, null, this);
  // Click on Search Accounts... combobox
  await context.web.click(elements["combobox_search_accounts_"], _params, null, this);
  // Click on Billing option
  await context.web.click(elements["option_billing"], _params, null, this);
  // Click on Save button
  await context.web.click(elements["button_save"], _params, null, this);
}

When(
  "The user creates a new account with account name {string} and saves it",
  { timeout: 360000 },
  the_user_creates_a_new_account_with_account_name_account_name_and_saves_it
);
