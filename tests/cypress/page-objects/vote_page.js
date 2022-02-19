export class VotePage {
  get choice() {
    return cy.get('section[data-test="vote-area-single-choice"] > button')
  }
}
