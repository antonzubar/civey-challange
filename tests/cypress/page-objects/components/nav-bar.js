export class TopNavBar {
    get vote() {
        return cy.get('div.primary-navbar_primaryLinks_2NVzr > a:nth-child(2)')
    }

    get register() {
        return cy.get('div.primary-navbar_groupRight_1aeKg > div')
    }
}
