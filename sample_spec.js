describe('My First Test', function(){
	it('Visits Cypress Website', function(){
		cy.visit('https://www.google.co.in')
		cy.get('#lst-ib', {timeout: 2000})
		  .type('cypress')
		cy.get('input[type="submit"]:nth-child(1)')
		  .click()
		cy.get('div:nth-child(3)>div>div:nth-child(1)>div>div>div.r>a>h3')
		  .click()
		//expect(true).to.equal(true)
		//cy.get('a').contains('Sign in').click()
		//cy.get('input','email')
		// .type('shivamasawa96@gmail.com')
	})
})