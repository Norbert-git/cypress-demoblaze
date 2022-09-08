describe("Header Links", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Home button", () => {
    cy.get(".navbar-collapse").contains("Home").click()
    cy.url().should("contains", "/index.html")
  })

  it("Contact button", () => {
    cy.get(".navbar-collapse").contains("Contact").click()
    cy.get(".modal-content")
      .contains("New message")
      .should("have.text", "New message")
  })

  it("About us button", () => {
    cy.get(".navbar-collapse").contains("About us").click()
    cy.get(".modal-content")
      .contains("About us")
      .should("have.text", "About us")
  })

  it("Cart button", () => {
    cy.get(".navbar-collapse").contains("Cart").click()
    cy.url().should("contains", "/cart.html")
  })

  it("Sign up button", () => {
    cy.get(".navbar-collapse").contains("Sign up").click()
    cy.get(".modal-content").contains("Sign up").should("have.text", "Sign up")
  })
})
