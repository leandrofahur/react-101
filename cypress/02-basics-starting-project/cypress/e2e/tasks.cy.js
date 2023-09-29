/// <reference types="Cypress" />;

describe("tasks management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").should("be.visible");
    cy.get(".backdrop").click({ force: true });

    // cy.contains("Cancel").click();
    // cy.get(".modal").should("not.be.visible");
  });
});
