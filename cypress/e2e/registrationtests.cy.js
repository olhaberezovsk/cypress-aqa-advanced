describe('Registration Form Validation', () => {
    beforeEach('Open Website', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
        cy.get('.btn-outline-white').click();
        cy.get('button.btn:nth-child(1)').click();
    })

    it('Verify that Registration form is presented to the user', () => {
        cy.contains('Registration').should('be.visible');
    })

    it('Field "Name": "Name is required" error message validation', () => {
        cy.get('#signupName').focus().blur();
        cy.contains('Name required').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');;
    })

    it('Field "Name": "Name is invalid" error message validation', () => {
        cy.get('#signupName').type('123').blur();
        cy.contains('Name is invalid').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Name": "Name has to be from 2 to 20 characters long" error message validation with 1 character', () => {
        cy.get('#signupName').type('1').blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Name": "Name has to be from 2 to 20 characters long" error message validation with 21 character', () => {
        cy.get('#signupName').type('123456789012345678901').blur();
        cy.contains('Name has to be from 2 to 20 characters long').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })
/////
    it('Field "Last Name": "Last name is required" error message validation', () => {
        cy.get('#signupLastName').focus().blur();
        cy.contains('Last name required').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Last Name": "Last name is invalid" error message validation', () => {
        cy.get('#signupLastName').type('123').blur();
        cy.contains('Last name is invalid').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Last Name": "Last name has to be from 2 to 20 characters long" error message validation with 1 character', () => {
        cy.get('#signupLastName').type('1').blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Last Name": "Last name has to be from 2 to 20 characters long" error message validation with 21 character', () => {
        cy.get('#signupLastName').type('123456789012345678901').blur();
        cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })
/////
    it('Field "Email": "Email is required" error message validation', () => {
        cy.get('#signupEmail').focus().blur();
        cy.contains('Email required').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Email": "Email is invalid" error message validation', () => {
        cy.get('#signupEmail').type('123').blur();
        cy.contains('Email is incorrect').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })
/////
    it('Field "Password": "Password is required" error message validation', () => {
        cy.get('#signupPassword').focus().blur();
        cy.contains('Password required').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Password": "Password has to be from 8 to 15 characters long..." error message validation with 7 character', () => {
        cy.get('#signupPassword').type('1234567').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })
    it('Field "Password": "Password has to be from 8 to 15 characters long..." error message validation with 16 character', () => {
        cy.get('#signupPassword').type('123456789012345').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Password": "Password has to be from 8 to 15 characters long..." error message validation with all small letters', () => {
        cy.get('#signupPassword').type('testtest').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Password": "Password has to be from 8 to 15 characters long..." error message validation with all capital letters', () => {
        cy.get('#signupPassword').type('TESTTEST').blur();
        cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })
/////
    it('Field "Re-enter Password": "Re-enter password required" error message validation', () => {
        cy.get('#signupRepeatPassword').focus().blur();
        cy.contains('Re-enter password required').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Field "Re-enter Password": "Password do not match" error message validation', () => {
        cy.get('#signupPassword').type('Test1234').blur();
        cy.get('#signupRepeatPassword').type('Test1235').blur();
        cy.contains('Passwords do not match').should('be.visible').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })
/////
    it('Button "Register": The button should be disabled when the form is empty', () => {
        cy.get('button.btn:nth-child(1)').should('be.disabled');
    })

    it('Button "Register": The button should be disabled when the data is incorrect', () => {
        cy.get('#signupName').type('123').blur();
        cy.get('#signupLastName').type('123').blur();
        cy.get('#signupEmail').type('123').blur();
        cy.get('#signupPassword').type('1234567').blur();
        cy.get('#signupRepeatPassword').type('Test1235').blur();
        cy.get('button.btn:nth-child(1)').should('be.disabled');
    })
})

describe('New User Registration', () => {
    beforeEach('Open Website', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
        cy.get('.btn-outline-white').click();
        cy.get('button.btn:nth-child(1)').click();
    })

    it('Creating New User with Valid Data', () => {
            const testEmail = "testRegistration@mailinator.com";
            const emailToRegistrate = testEmail.replace("@", `+${Date.now()}@`);

            Cypress.env('registeredEmail', emailToRegistrate);

            cy.get('#signupName').type('Olha');
            cy.get('#signupLastName').type('Berezovska');
            cy.get('#signupEmail').type(emailToRegistrate);
            cy.get('#signupPassword').type('Test12345');
            cy.get('#signupRepeatPassword').type('Test12345');
            cy.get('button.btn:nth-child(1)').click();
            cy.wait(11000);
    })
})

describe('Successful Log In', () => {

    it('Should log in successfully', () => {

            const registeredEmail = Cypress.env('registeredEmail');
            expect(registeredEmail).to.not.be.undefined;

            cy.login(registeredEmail, 'Test12345');
            cy.wait(15000);
    });
    
})

