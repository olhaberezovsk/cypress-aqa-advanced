describe('Verify elements on LMS Hillel IT School Log In page', () => {

    beforeEach(() => {
        cy.visit('https://lms.ithillel.ua/auth');
    })

    it('Verify that website is load properly', () => {       
        cy.contains('Sign in').should('be.visible');
        cy.contains('Registration').should('be.visible');
    });

    it('Verify all elements on page Log In block', () => {       
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
        cy.get('.page-login__sso-link--google').should('be.visible');
        cy.get('.page-login__sso-link--apple').should('be.visible');
        cy.get('.hi-button.ng-star-inserted').should('be.visible');
    });

    it('Verify all elements in footer', () => {  
        cy.get('.page-access-shell__restore')  
        .should('be.visible')
        .and('have.attr', 'href');
        cy.get('.page-access-shell__support-text').should('be.visible')
        cy.get('.page-access-shell__copyright').should('be.visible');
        cy.get('footer a, footer button').each(($el) => {
            cy.wrap($el).should('be.visible')
        })
    });
});