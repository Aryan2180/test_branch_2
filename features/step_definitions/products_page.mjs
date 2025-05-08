import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_add_to_cart: {
    locators: [
      { css: "internal:text=/^{item}$/i", priority: 3 },
      { text: "{item}", climb: 2, css: { locator: "button[aria-label='Add to cart']", index: 0 }, priority: 1 },
    ],
    element_name: "Add to cart (Urban Backpack - Compact & Durable)",
  },
  button_go_to_cart: {
    locators: [
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="Go to cart"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="Go to cart"s]' },
      { strategy: "ID", css: "#cart", priority: 1 },
      { css: "[aria-label='Go to cart']", priority: 1 },
      { strategy: "ROLE", css: "internal:role=button", priority: 3 },
    ],
    element_name: "Go to cart",
  },
  button_add_to_cart_1: {
    locators: [{ text: "{product_name}", css: "button", climb: 3 }],
    element_name: "Add to cart button",
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
 * add to basket "<item>" 1
 * @param {string} _item  item
 * @ai
 */
async function add_to_basket_item_1(_item) {
  // source: ai
  // implemented_at: 2025-05-08T05:26:08.053Z
  const _params = { _item };
  // Click on Add to cart (Urban Backpack - Compact & Durable)
  await context.web.click(elements["button_add_to_cart"], _params, null, this);
}

Given("add to basket {string} 1", { timeout: 120000 }, add_to_basket_item_1);

/**
 * open basket 5
 * @ai
 */
async function open_basket_5() {
  // source: ai
  // implemented_at: 2025-05-08T05:26:08.099Z
  const _params = {};
  // Click on Go to cart
  await context.web.click(elements["button_go_to_cart"], _params, null, this);
}

When("open basket 5", { timeout: 120000 }, open_basket_5);

/**
 * The user context clicks on Add to cart button in the context of "<product_name>"
 * @param {string} _product_name  product name
 * @recorder
 * @path=/products
 */
async function the_user_context_clicks_on_add_to_cart_button_in_the_context_of_product_name(_product_name) {
  // source: recorder
  // implemented_at: 2025-05-07T11:32:34.675Z
  const _params = { _product_name };
  //  Click on button_add_to_cart_1 in the context of <product_name>
  await context.web.click(elements["button_add_to_cart_1"], _params, { context: _product_name }, this);
}

Then(
  "The user context clicks on Add to cart button in the context of {string}",
  { timeout: 60000 },
  the_user_context_clicks_on_add_to_cart_button_in_the_context_of_product_name
);
