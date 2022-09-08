describe("About us description", () => {
  //   const descreption = {
  //     p: "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.",
  //   }

  it("About us ", () => {
    cy.visit("/")
    cy.get("#fotcont").within(() => {
      cy.get("h4").should("exist")
      cy.get("p").should("exist")
    })
  })
  it("About us description", () => {
    cy.visit("/")
    cy.get(".row").within(() => {
      cy.get("h4").should(
        "contain.text",
        "About Us",
        "Get in Touch",
        "Product Store"
      )
    })
  })
  //   it("About us description p tag ", () => {
  //     cy.visit("/")
  //     cy.get(".row").within(() => {
  //       cy.get(".caption")
  //         .contains("p")
  //         .should(
  //           "contain.text",
  //           "We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality."
  //         )
  //     })
  //   })
})
