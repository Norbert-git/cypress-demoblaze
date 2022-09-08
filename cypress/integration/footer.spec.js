describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Footer exist", () => {
    cy.get("footer").contains("p").should("exist")
  })

  it("Renders the correct footer text", () => {
    cy.get("footer")
      .contains("p")
      .should("contain.text", "Copyright © Product Store 2017")
  })
})
