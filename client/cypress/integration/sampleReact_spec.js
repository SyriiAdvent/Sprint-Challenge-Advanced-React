import { App } from '../../src/App'
import React from 'react'

describe("First Test", () => {
  it("is working", () => {
    expect(true).to.equal(true);
  });
});

describe("Second Test", () => {
  it("Visit the app", () => {
    cy.visit("/");
  });
});

describe("Third Test", () => {
  it("Navbar loads", () => {
    cy.visit("/");
  });
  it('navbar Title Works', () => {
    cy.contains('Womens World Soccor Players')
  })
  it('navbar Theme Toggler works', () => {
    cy.contains('.toggle').click()
  })
});