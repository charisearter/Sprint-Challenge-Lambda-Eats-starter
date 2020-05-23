
describe('can type in fields', () => {
  it('can type first name', () => {
    cy.get('input[id="fnameInput"]')
    .type('Skittles')
    .should('have.value', 'Skittles')
  })

  it('can type last name', () => {
    cy.get('input[name="lname"]')
    .type('Rainbow')
    .should('have.value', 'Rainbow')
  })
})

describe('checkbox check', () => {
  it('can the checkbox be checked', () => {
    cy.get("input[name='addTopping']")
      .not("[disabled]")
      .check()
      .should("be.checked");
  })
})

describe('submit the form', () => {
  it("user can submit form", () => {
    cy.get("button.submit");
  })  
})