import InputPage from "../pageObjects/Inputpage";

describe("Final_project", () => {
  beforeEach(() => {
    InputPage.visit();
  });

  it('Demoqa lauku aizpildišana', () => {
    //ievades lauki
    InputPage.firstName.type("Karlis");
    InputPage.lastName.type('Barons');
    InputPage.email.type('karlis.barons123@gmail.com');
    InputPage.number.type('26262626');
    InputPage.adress.type("Kalna 16");;

    // atzimet dzimumu
    InputPage.inputGender.contains('Male').click();

    // dzimšanas diena

    InputPage.birthField.click();
    InputPage.birthMonthField.select('February');
    InputPage.birthYearField.select('1930');
    InputPage.birthDayField.contains("28").click();

    // ievadit priekšmetu

    InputPage.subjectField.type("Economics{enter}");
  

    //atzime hobiju

    InputPage.HobbieMusic.click();

    // foto izvele
    // neizdevas

    // izveleties state un city
     InputPage.stateField.click().type('NCR{enter}');
     InputPage.cityField.click().type('Delhi{enter}');

    // submit poga
      InputPage.submit.click();

    // validēt
    InputPage.table.contains('td', 'Student Name').next().should('have.text', 'Karlis Barons');
    InputPage.table.contains('td', 'Student Email').next().should('have.text', 'karlis.barons123@gmail.com');
    InputPage.table.contains('td', 'Gender').next().should('have.text', 'Male');
    InputPage.table.contains('td', 'Mobile').next().should('have.text', '26262626');
    InputPage.table.contains('td', 'Date of Birth').next().should('have.text', '28 January,1930');
    InputPage.table.contains('td', 'Subjects').next().should('have.text', 'Economics');
    InputPage.table.contains('td', 'Hobbies').next().should('have.text', 'Music');
    InputPage.table.contains('td', 'Address').next().should('have.text', 'Kalna 16');
    InputPage.table.contains('td', 'State and City').next().should('have.text', 'NCR Delhi');
    
  });
});