const companyLogo = ".navbar-brand"

describe("Logo", () => {
  it("Land on main page", () => {
    cy.visit("/")
  })

  it("The logo exist", () => {
    cy.get(companyLogo).should("be.visible")
  })
})
