describe("Rooms", () => {
  it("Should list all rooms on the home page", () => {
    cy.visit("/");
    cy.get(`[datatype-cy="rooms"]`).children();
  });
});
