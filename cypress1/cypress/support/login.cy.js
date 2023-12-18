describe("login page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should login with valid email and password", () => {
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("should not login with empty email", () => {
    cy.login(null, "123");
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("should not login with empty password", () => {
    cy.login("bropet@mail.ru", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("should book add to Favorites", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addBook(
      "Инферно",
      "Оказавшись в самом загадочном городе Италии – Флоренции, профессор Лэнгдон, специалист по кодам, символам и истории искусства, неожиданно попадает в водоворот событий, которые способны привести к гибели все человечество… И помешать этому может только разгадка тайны, некогда зашифрованной Данте в строках бессмертной эпической поэмы…",
      "Дэн Браун"
    );
    cy.contains("Add to favorite").click();
    cy.contains("Favorites").click();
    cy.contains("Дэн Браун").should("be.visible");
  });

  it("should book delete with Favorites", () => {
    cy.login("bropet@mail.ru", "123");
    cy.deleteBook("Инферно");
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });

  it("should book add not title on page", () => {
    cy.login("bropet@mail.ru", "123");
    cy.addBook(
      null,
      "Оказавшись в самом загадочном городе Италии – Флоренции, профессор Лэнгдон, специалист по кодам, символам и истории искусства, неожиданно попадает в водоворот событий, которые способны привести к гибели все человечество… И помешать этому может только разгадка тайны, некогда зашифрованной Данте в строках бессмертной эпической поэмы…",
      "Дэн Браун"
    );
    cy.get("#title").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
});
