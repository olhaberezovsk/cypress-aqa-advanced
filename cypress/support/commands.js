Cypress.Commands.add("login", (username, password) => {
    const baseUrl = Cypress.config('baseUrl');
    cy.visit(baseUrl)

    if (baseUrl.includes('qauto.forstudy.space')) {
      cy.get('.btn-outline-white').click();
      cy.get('#signinEmail').type(username);
      cy.get('#signinPassword').type(password, {sensitive: true});
      cy.get('button.btn-primary:nth-child(2)').click();
    } else {
      cy.get('.btn-outline-white').click();
      cy.get('#signinEmail').type(username);
      cy.get('#signinPassword').type(password, {sensitive: true});
      cy.get('button.btn-primary:nth-child(2)').click();
    }
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

Cypress.Commands.add('createExpense', (carId, expenseData) => {
  cy.request({
      method: 'POST',
      url: 'https://qauto.forstudy.space/api/expenses',
      body: {
          carId: carId,
          reportedAt: expenseData.reportedAt,
          mileage: expenseData.mileage,
          liters: expenseData.liters,
          totalCost: expenseData.totalCost,
          forceMileage: expenseData.forceMileage
      },
      failOnStatusCode: false 
  }).then((response) => {
      cy.log('Response body:', response.body); 
      cy.log('Response status:', response.status);
      cy.log('Response headers:', response.headers);
      expect(response.status).to.eq(200);  
      expect(response.body.data).to.have.property('id');
  });
});
  