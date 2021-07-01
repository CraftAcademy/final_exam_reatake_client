describe('user can see list of community Services', () => {
  beforeEach(() => {
    cy.intercept('Get', 'https://kcsc-api.herokuapp.com/api/services', {
      fixture: 'services.json',
    });
    cy.visit('/');
  });
  it('display a header', () => {
    cy.get('[data-cy=header]').should('contain', 'Community Services List')
  });
  
  it('is expected display information of community Services ', () => {
    cy.get('[data-cy=fech-data]').click();
    cy.get('[data-cy=name]').should('contain', 'Access Group');
    cy.get('[data-cy=description]').should(
      'contain',
      'A group of local disabled people who campaign to make Kensington and Chelsea a more accessible place.\n'
    );
    cy.get('[data-cy=emai]').should('contain', 'email');
  });
});
