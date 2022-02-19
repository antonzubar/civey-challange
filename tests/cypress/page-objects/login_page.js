export class LoginPage {
  get email() {
    return cy.get('input[type="email"]')
  }

  get further() {
    return cy.get('button[type="submit"]')
  }
}
