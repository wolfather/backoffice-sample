/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('should have login title as h1', () => {
        cy.get('h1').should('have.text', 'Login')
    })

    it('should have the signin button on screen', () => {
        const signinButton = cy.get('[data-cy=signin-button]');
        signinButton.should('have.text', 'Signin');

        signinButton.click();

    // })
    
    // it('should contain email field', () => {
        cy.clock(100);
        const loginForm = cy.get('[data-cy=login-form]')
        loginForm.should('be.visible')
    
        const emailField = loginForm.get('[data-cy=login-email-field]')

        emailField
            .should('be.visible')
            .should('have.attr', 'placeholder', 'Your e-mail')
            .invoke('val', '')
            .trigger('input')
            .should('have.value', '')
            .type('eve.holt@reqres.in')
            
            
        const passField = loginForm.get('[data-cy=login-pass-field]')
            
        passField
            .should('be.visible')
            .should('have.attr', 'type', 'password')
            .should('have.attr', 'placeholder', 'Your password')
            .invoke('val', '')
            .trigger('input')
            .should('have.value', '')
            .type('cityslicka')

        const submitButton = loginForm.get('[data-cy=login-submit-button]')

        submitButton
            .should('have.attr', 'value', 'Login')
            .click()

        cy
        .clock(4000)
        .location('pathname')
        .should('eq', '/dashboard')


        const dashboardLoading = cy.get('[data-cy=dashboard-loading]')
        dashboardLoading.should('be.visible')

        cy.clock(100)
        
        const dashboardTitle = cy.get('[data-cy=dashboard-title]')
        dashboardTitle
            .should('be.visible')
            .should('have.text', 'Dashboard')

        const usersComponent = cy.get('[data-cy=dashboard-user-component]')

        usersComponent
            .should('have.length.at.least', 6)
        
        cy.wait(2000)

        const headerLogoutButton = cy.get('[data-cy=header-logout-button]')
            headerLogoutButton
                .should('have.text', 'logout')
                .click()

        cy.clock(1500)

        const homeTitle = cy.get('[data-cy=login-title]')

        homeTitle
            .should('have.text', 'Login')
    })

    describe('Theme switcher', () => {
        beforeEach(() => {
            cy.window().then(w => {
                w.localStorage.clear()
            })
            cy.wait(100)
        })
        it('should assert the light theme by default', () => {
            cy.window().then(w => {
                expect(w.localStorage.getItem('theme')).to.eq('light')
            })
        })

        it('should assert the theme wil be changed to dark on theme click', () => {
            const themeDarkButton = cy.get('[data-cy=theme-dark-button]')

            themeDarkButton.click()

            cy.wait(100)

            cy.window().then(w => {
                expect(w.localStorage.getItem('theme')).to.eq('dark')
            })
        })
        
        it('should assert the theme wil be changed to light on theme click', () => {
            const themeLightButton = cy.get('[data-cy=theme-light-button]')

            themeLightButton.click()
            
            cy.wait(100)

            cy.window().then(w => {
                expect(w.localStorage.getItem('theme')).to.eq('light')
            })
        })
    })
})
