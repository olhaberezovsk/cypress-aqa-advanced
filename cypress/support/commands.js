Cypress.Commands.add("login", (username, password) => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
    cy.get('.btn-outline-white').click();
    cy.get('#signinEmail').type(username);
    cy.get('#signinPassword').type(password, {sensitive: true});
    cy.get('button.btn-primary:nth-child(2)').click();
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      options.log = false;
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      });
    }
    return originalFn(element, text, options);
  });
  