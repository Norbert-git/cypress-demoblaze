describe("Demoblaze", () => {
  it("Land on main page", () => {
    cy.visit("/")
  })

  const loginInfo = {
    userName: "cypress-testing",
    password: "cypress",
  }

  it("Login", () => {
    cy.get("#login2").click()
    cy.wait(1000)
    cy.get("#loginusername").type(loginInfo.userName)
    cy.get("#loginpassword").type(loginInfo.password)
    cy.get(".modal-footer").contains("Log in").click()
  })

  it("Check if login was succesful", () => {
    cy.get("#nameofuser").should("have.text", "Welcome cypress-testing")
  })
})
