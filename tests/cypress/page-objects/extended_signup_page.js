export class ExtendedSignupPage {
  get maleGender() {
    return cy.get('label[for="MALE"]')
  }

  get femaleGender() {
    return cy.get('label[for="FEMALE"]')
  }

  get yearOfBirth() {
    return cy.get('input[name="birth_year"]')
  }

  get zipCode() {
    return cy.get('input[name="zip"]')
  }

  get newsletterSubscribe() {
    return cy.get('input[name="subscribe_to_newsletter"] + span')
  }

  get agreeTermsOfUse() {
    return cy.get('input[name="agreed_with_terms_of_use"] + span')
  }

  get register() {
    return cy.get('div.signup-user-module_submit_QrdHb > button')
  }

  get showResults() {
    return cy.get('button.button-module_button_Z8rEw')
  }
}
