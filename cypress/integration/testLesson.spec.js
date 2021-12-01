describe("Lesson page", () => {
  it("displays the modal page when the button of 'Page 2' is clicked", () => {
    cy.visit("/lesson/62-mapping");
    cy.get('[data-selector="stimulus"] > div > ul > :nth-child(1)').click();
    cy.get('[data-selector="react-modal-window"]').should("be.visible");
  });
});
