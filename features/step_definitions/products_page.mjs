import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_add_to_cart: {
    locators: [{ text: "{keyboard_product_name}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  button_add_to_cart_1: {
    locators: [{ text: "{bottle_product_name}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
  },
  button_go_to_cart: {
    locators: [
      { css: 'internal:label="Go to cart"i', priority: 1 },
      { css: 'internal:label="Go to cart"s', priority: 1 },
      { css: 'internal:role=button[name="Go to cart"i]', priority: 1 },
      { css: 'internal:role=button[name="Go to cart"s]', priority: 1 },
      { css: "div >> internal:has-text=/^2$/", priority: 1 },
      { css: 'internal:text="2"s >> xpath=../..', priority: 1 },
    ],
    element_name: "Go to cart button",
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
 * The user context clicks on Add to cart button in the context of "<keyboard_product_name>" and context clicks on Add to cart button in the context of "<bottle_product_name>" and navigates to the cart page
 * @param {string} _keyboard_product_name  keyboard product name
 * @param {string} _bottle_product_name  bottle product name
 * @recorder
 * @path=/products
 */
async function the_user_context_clicks_on_add_to_cart_button_in_the_context_of_keyboard_product_name_and_context_clicks_on_add_to_cart_button_in_the_context_of_bottle_product_name_and_navigates_to_the_cart_page(
  _keyboard_product_name,
  _bottle_product_name
) {
  // source: recorder
  // implemented_at: 2025-04-28T11:29:56.239Z
  const _params = { _keyboard_product_name, _bottle_product_name };
  //  Click on button_add_to_cart in the context of <keyboard_product_name>
  await context.web.click(elements["button_add_to_cart"], _params, { context: _keyboard_product_name }, this);
  //  Click on button_add_to_cart_1 in the context of <bottle_product_name>
  await context.web.click(elements["button_add_to_cart_1"], _params, { context: _bottle_product_name }, this);
  // Click on Go to cart button
  await context.web.click(elements["button_go_to_cart"], _params, null, this);
}

When(
  "The user context clicks on Add to cart button in the context of {string} and context clicks on Add to cart button in the context of {string} and navigates to the cart page",
  { timeout: 180000 },
  the_user_context_clicks_on_add_to_cart_button_in_the_context_of_keyboard_product_name_and_context_clicks_on_add_to_cart_button_in_the_context_of_bottle_product_name_and_navigates_to_the_cart_page
);
