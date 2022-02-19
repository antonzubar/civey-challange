import { LandingPage } from '../page-objects/landing_page'
import { LoginPage } from '../page-objects/login_page'
import { ExtendedSignupPage } from '../page-objects/extended_signup_page'
import { VotePage } from '../page-objects/vote_page'
import { TopNavBar } from '../page-objects/components/nav-bar'

describe('civey.com smoke test suite', () => {
  const landingPage = new LandingPage()
  const loginPage = new LoginPage()
  const signupPage = new ExtendedSignupPage()
  const votePage = new VotePage()
  const topNavBar = new TopNavBar()

  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('CIV-2: Successful registration with valid email.', () => {
    landingPage.open()

    cy.log('WHEN user clicks Register button')
    topNavBar.register.click()

    cy.log('THEN user sees Login page and fills email and sumbits form')
    loginPage.email.type('jakaga82811@submic.com') // email should be random
    loginPage.further.click()

    cy.log('Then user sees Lassen Sie Ihre Stimme zählen! form, fills the data and submit')
    signupPage.femaleGender.click()
    signupPage.yearOfBirth.type('1991')
    signupPage.zipCode.type(10178)
    signupPage.newsletterSubscribe.click()
    signupPage.agreeTermsOfUse.click()
    signupPage.register.click()

    cy.log('Then user sees final Check your inbox page')
    cy.url().should('eq', 'https://civey.com/extended-signup/verify')
  })

  it('CIV-6: Successful voting requires additional information for not registered user.', () => {
    landingPage.open()

    cy.log('WHEN user goes to Vote page and votes')
    topNavBar.vote.click()
    votePage.choice.first().click()

    cy.log('Then user sees Lassen Sie Ihre Stimme zählen! form')
    signupPage.maleGender.should('exist')
    signupPage.femaleGender.should('exist')
    signupPage.yearOfBirth.should('exist')
    signupPage.yearOfBirth.should('exist')
    signupPage.newsletterSubscribe.should('not.exist')
    signupPage.agreeTermsOfUse.should('exist')
    signupPage.showResults.should('exist')
    signupPage.register.should('not.exist')
  })
})
