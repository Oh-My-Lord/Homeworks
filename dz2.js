let rabotyaga = { 
    firstName : "Иван",
    lastName : "Иванов" ,
    middlename : "Иванович",
    yearOfBirth : "1990",
    currentYear : new Date().getFullYear(),
    age : 0,
    studying : true,
    working : false,
    }

    rabotyaga.age = (rabotyaga.currentYear) - parseInt(rabotyaga.yearOfBirth)

    console.table (rabotyaga)
