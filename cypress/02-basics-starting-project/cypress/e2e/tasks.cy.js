/// <reference types="Cypress" />;

describe("tasks management", () => {
  it("should open and close the new task modal by clicking on the backdrop", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").should("be.visible");
    cy.get(".backdrop").click({ force: true });
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });

  it("should open and close the new task modal by clicking the cancel button", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").should("be.visible");
    cy.contains("Cancel").click();
    cy.get(".backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");
  });

  it("should create a new task", () => {
    cy.visit("http://127.0.0.1:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").should("be.visible");
    cy.get("#title").type("New Task");
    cy.get("#summary").type("New Task Description");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".modal").should("not.exist");
    cy.get(".backdrop").should("not.exist");
    cy.get(".task").should("have.have.length", 1);
    cy.get(".task h2").contains("New Task");
    cy.get(".task p").contains("New Task Description");
  });
});
