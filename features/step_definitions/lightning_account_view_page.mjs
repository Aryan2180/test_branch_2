import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  text_view_profile_user_avatar_top_right: {
    locators: [
      { css: "div.pointer.pointer-advanced.active", priority: 3 },
      { css: ".pointer.active" },
      { css: "div.pointer.pointer-advanced.active" },
      { css: ":root > :nth-child(2) > :nth-child(26) > :nth-child(2) > :nth-child(5) > :nth-child(1) > :nth-child(1)" },
    ],
    element_name: "View profile : user avatar top right Text",
  },
  button_view_profile: {
    locators: [
      { css: 'internal:role=button[name="View profile"i]', priority: 1 },
      { css: 'internal:role=button[name="View profile"s]', priority: 1 },
      { css: 'button >> internal:has-text="View profile"i', priority: 1 },
      { css: "button >> internal:has-text=/^View profile$/", priority: 1 },
    ],
    element_name: "View profile button",
  },
  link_log_out: {
    locators: [
      { css: 'internal:role=link[name="Log Out"i]', priority: 1 },
      { css: 'internal:role=link[name="Log Out"s]', priority: 1 },
      { css: 'internal:text="Log Out"i', priority: 1 },
      { css: 'internal:text="Log Out"s', priority: 1 },
      { css: 'a >> internal:has-text="Log Out"i', priority: 1 },
      { css: "a >> internal:has-text=/^Log Out$/", priority: 1 },
    ],
    element_name: "Log Out link",
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
 * The user logs out from the application via the profile menu
 * @recorder
 * @path=/lightning/r/Account/001dL000010dIZFQA2/view
 */
async function the_user_logs_out_from_the_application_via_the_profile_menu() {
  // source: recorder
  // implemented_at: 2025-05-07T11:46:37.151Z
  const _params = {};
  // Click on View profile : user avatar top right Text
  await context.web.click(elements["text_view_profile_user_avatar_top_right"], _params, null, this);
  // Click on View profile button
  await context.web.click(elements["button_view_profile"], _params, null, this);
  // Click on Log Out link
  await context.web.click(elements["link_log_out"], _params, null, this);
}

When(
  "The user logs out from the application via the profile menu",
  { timeout: 180000 },
  the_user_logs_out_from_the_application_via_the_profile_menu
);
