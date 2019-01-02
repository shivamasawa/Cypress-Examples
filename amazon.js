describe('Amazon Website Testing', function(){
	before(function(){
		cy.visit('https://www.amazon.in')
	})
	it('Login Functionality', function(){
		//cy.clearCookies()
		//cy.visit('https://www.amazon.in')
		cy.get('#nav-link-yourAccount').click()
		cy.get('#ap_email').type('shivamasawa96@gmail.com')
		cy.get('#continue').click()
		cy.get('#ap_password').type('asawa61096')
		cy.get('#signInSubmit').click()
		//cy.get('#s-results-list-atf').children('.s-result-item.celwidget')
	})

	it('has correct title', function(){
    	cy.title().should('eq', 'Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
  	})

  	it('Hello, Your orders Part', function(){
  		cy.get('#nav-link-yourAccount').trigger('mouseover')
  		cy.get('#nav-flyout-yourAccount div a').its('length').should('eq', 12)
  		//cy.contains('Your Account').click()
  	})

  	it.only('Search for iPhone', function(){
  		cy.get('#twotabsearchtextbox').type('iphone').type('{enter}')
  		cy.get('.s-result-item.celwidget').should('have.length', 24)
  		cy.get('#low-price').type('20000')
  		cy.get('#high-price').type('30000').type('{enter}')
  		
  	})
})
