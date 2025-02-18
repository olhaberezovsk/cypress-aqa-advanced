class Garage {
    open() {
        cy.get('.sidebar > a:nth-child(1)').click(); 
    }

    addCar(brand, model, mileage) {
        cy.get('.btn-primary').click();
        cy.get('#addCarBrand').select(brand);
        cy.get('#addCarModel').type(model);
        cy.get('#addCarMileage').type(mileage);
        cy.get('.modal-footer > button:nth-child(2)').click();
    }

    verifyCar(model) {
        cy.contains('.car-heading', model).should('be.visible')
    }
}

export default new Garage();