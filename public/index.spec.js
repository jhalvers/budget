//end-to-end testing for the app

describe('Home', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('should have Personal Budget in the title', () => {
      cy.get('title').contains('Personal Budget')
    })
  
    it('should have Personal Budget in the h1', () => {
      cy.get('h1').contains('Personal Budget')
    })
  
    //visual regression testing using apliTools
    it('should look the same', () => {
      cy.eyesOpen({
        appName: 'My App',
        testName: 'Homepage Check'
      });
      cy.eyesCheckWindow();
      cy.eyesClose();
    })
  })