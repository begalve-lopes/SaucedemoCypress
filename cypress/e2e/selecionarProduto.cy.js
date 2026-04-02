/// <reference types="cypress" /> 

describe("Selecionar Produto", () => {
  const massa = require("../fixtures/massa.js");
  beforeEach(() => {
    cy.visit("/");
  });

  it("Selecionar Sauce Labs Backpack", () => {
    cy.title().should("eq", "Swag Labs");

    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get('[name="login-button"]').click();

    cy.get('img[alt="Sauce Labs Backpack"]').click();
    cy.get('button[data-test="add-to-cart"]').click();

    cy.get('a[data-test="shopping-cart-link"]').should("have.text", "1");
    cy.get('a[data-test="shopping-cart-link"]').click();

    cy.get('span[data-test="title"]').should("have.text", "Your Cart");
  });

  massa.array.forEach((item)=>{
    it(`Selecionar ${item.productName}`, () => {
    cy.title().should("eq", "Swag Labs");

    cy.get("#user-name").type(item.username);
    cy.get("#password").type("secret_sauce");
    cy.get('[name="login-button"]').click();

    cy.get(`img[alt="${item.productName}"]`).click();
    cy.get('button[data-test="add-to-cart"]').click();

    cy.get('a[data-test="shopping-cart-link"]').should("have.text", "1");
    cy.get('a[data-test="shopping-cart-link"]').click();

    cy.get('span[data-test="title"]').should("have.text", "Your Cart");
    cy.get('.inventory_item_name').should("have.text", item.productName);
    cy.get('.inventory_item_price').should("have.text", item.productPrice);
  });
  })

  afterEach(() => {
    cy.get('[data-test^="remove"]').click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link",{timeout: 5000})
    .should("be.visible")
    .click();
  });
});
