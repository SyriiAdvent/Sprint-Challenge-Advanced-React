/// <reference types="cypress" />

import React from 'react'

describe("First Test", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

describe("Application Page loads", () => {
  it("Visit the app", () => {
    cy.visit("");
  });
});

describe("Navigation Bar Works", () => {
  it("Navbar loads", () => {
    cy.visit("");
  });
  it('navbar Title Works', () => {
    cy.contains('Womens World Soccor Players')
  })
  it('navbar Theme Toggler changes to light mode & dark mode', () => {
    for (let index = 0; index <= 10; index++) {
      cy.get('button').click({ position: 'center' })
    }
  })
  it('navbar Theme Toggler changes to dark mode', () => {
    cy.get('button').click({ position: 'center' })
  })
});

describe('Player Cards Display', () => {
  it('Cards loaded - Alex Morgan', () => {
    cy.visit("");
    cy.contains('Alex Morgan')
  })
  it('Cards loaded - Wendie Renard', () => {
    cy.visit("");
    cy.contains('Wendie Renard')
  })
  it('Cards loaded - Daniëlle van de Donk', () => {
    cy.visit("");
    cy.contains('Daniëlle van de Donk')
  })
  it('Cards loaded - Cristiane Rozeira', () => {
    cy.visit("");
    cy.contains('Cristiane Rozeira')
  })
})