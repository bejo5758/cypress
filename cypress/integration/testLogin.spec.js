describe("Login page", () => {
  const signInButton = '[data-selector="sign-in-button"]';
  const randomNumber = Math.floor(Math.random() * 10);
  const invalidEmail = [
    "plainaddress",
    "#@%^%#$@#$@#.com",
    "@example.com",
    "Joe Smith <email@example.com>",
    "email.example.com",
    "email@example@example.com",
    ".email@example.com",
    "email.@example.com",
    "email..email@example.com",
    "email@example.com (Joe Smith)",
    "email@example",
    "email@-example.com",
    "email@111.222.333.44444",
    "email@example..com",
    "Abc..123@example.com",
  ];
  const validEmail = [
    "email@example.com",
    "firstname.lastname@example.com",
    "email@subdomain.example.com",
    "firstname+lastname@example.com",
    "email@123.123.123.123",
    "email@example.com",
    "1234567890@example.com",
    "email@example-one.com",
    "_______@example.com",
    "email@example.name",
    "email@example.museum",
    "email@example.co.jp",
    "firstname-lastname@example.com",
  ];

  beforeEach(() => {
    cy.visit("/signin");
  });

  it("displays the error message when both fields are empty", () => {
    cy.get(signInButton).click();
    cy.get('[data-selector="error-email"]').should(
      "have.text",
      "Email is required."
    );
    cy.get('[data-selector="error-password"]').should(
      "have.text",
      "Password is required."
    );
  });

  it("validates the password field", () => {
    validEmail.forEach((validEmails) => {
      cy.get("#email").type(validEmails);
      cy.get("#password").type(randomNumber);
      cy.get(signInButton).click();
      cy.get('[data-selector="sign-in-error"]').should(
        "have.text",
        "Email or password is incorrect"
      );
      cy.get("#email").clear();
      cy.get("#password").clear();
    });
  });

  it("validates the email field", () => {
    invalidEmail.forEach((invalidEmails) => {
      cy.get("#email").type(invalidEmails);
      cy.get(signInButton).click();

      cy.get('[data-selector="error-email"]').should(
        "have.text",
        "Email address is not valid."
      );
      cy.get("#email").clear();
    });
  });
});
