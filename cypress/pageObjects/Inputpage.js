class InputPage {

    static get url(){
        return "/automation-practice-form";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get firstName()
    {
        return cy.get("#firstName");
    }

    static get lastName()
    {
        return cy.get("#lastName");
    }

    static get email()
    {
        return cy.get('#userEmail');
    }

    static get number()
    {
        return cy.get('#userNumber');
    }

    static get adress()
    {
        return cy.get('#currentAddress');
    }

    static get birthField()
    {
        return cy.get('#dateOfBirthInput')
    }

    static get birthMonthField()
    {
        return cy.get('.react-datepicker__month-select')
    }

    static get birthYearField()
    {
        return cy.get('.react-datepicker__year-select')
    }

    static get birthDayField()
    {
        return cy.get('.react-datepicker__week')
    }
    
    static get inputGender()
    {
        return cy.get('.custom-control-label');
    }

    static get HobbieMusic()
    {
        return cy.get('[for="hobbies-checkbox-3"]');
    }

    static get subjectField()
    {
        return cy.get('#subjectsContainer');
    }

    static get stateField()
    {
        return cy.get('#state');
    }

    static get cityField()
    {
        return cy.get('#city');
    }

    static get submit()
    {
        return cy.get('#submit');
    }

    static get table()
    {
        return cy.get('table');
    }

}

export default InputPage;