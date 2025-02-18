class Expenses {
    open() {
      cy.get('.sidebar > a:nth-child(2)').click();
    }
  
    addExpense(amount, liters, cost) {
      cy.get('button.btn:nth-child(3)').click();
      cy.get('#addExpenseMileage').clear().type(amount);
      cy.get('#addExpenseLiters').type(liters);
      cy.get('#addExpenseTotalCost').type(cost);
      cy.get('button.btn:nth-child(2)').click();
    }
  
    verifyExpense(amount) {
      cy.contains('.panel-page_content', amount).should('be.visible'); 
    }
  }
  
  export default new Expenses();
  