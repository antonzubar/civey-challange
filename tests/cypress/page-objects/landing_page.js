export class LandingPage {
  open() {
    cy.visit(`${Cypress.env('baseUrl')}`)
  }

  get firstPollVote() {
    return cy.get('section > footer > div > a')
  }
}
