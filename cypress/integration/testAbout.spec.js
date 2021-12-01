describe("About page", () => {
  it("should have the header", () => {
    cy.visit("/about");
    cy.contains("h2", "Inquisitive Differentiation").should("exist");
  });
});
