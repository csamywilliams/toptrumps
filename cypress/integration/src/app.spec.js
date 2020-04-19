describe('Top trumps', () => {

    it('should successfully load', () => {
        cy.visit('/')
    });

    it('should contain a button called "select"', () => {
        cy.visit('/');

        cy.contains('SELECT').click();
    });
});