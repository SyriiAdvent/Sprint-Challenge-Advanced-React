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
  it('Cards loaded', () => {
    cy.visit("");
    cy.contains('Alex Morgan')
    cy.contains('Mallory Pugh')
    cy.contains('Gaëtane Thiney')
    cy.contains('Delphine Cascarino')
  })
})