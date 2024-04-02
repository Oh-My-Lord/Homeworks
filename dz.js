  function Rabotyaga (firstname, lastname, middlename, yearOfBirth, currentYear, age, studying, working){
    this.firstName = firstname;
    this.lastName = lastname;
    this.middlename = middlename;
    this.yearOfBirth = yearOfBirth;
    this.currentYear = currentYear;
    this.age = currentYear - yearOfBirth;
    this.studying = true;
    this.working = false;
  }
  var me = new Rabotyaga("Иван","Иванов","Иванович","1990","2024");
  console.table(me);
