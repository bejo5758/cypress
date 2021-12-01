describe("Landing page", () => {
  it("verifies that the url has been updated and the modal page is displayed", () => {
    cy.visit("/");
    cy.get('[data-selector="btn-join-inquisitive"]').click();
    cy.url().should("include", "modal=join");
    cy.get('[data-selector="react-modal-window"]').should("be.visible");
  });
});
