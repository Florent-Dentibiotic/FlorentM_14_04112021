export default class Employee {
    /**
     * Employee informations
     *
     * @param { string } firstName
     * @param { string } lastName
     * @param { string } birthdate
     * @param { string } startDate
     * @param { string } department
     * @param { string } street
     * @param { string } city
     * @param { string } state
     * @param { string } zipcode
     * @param { string } id
     */
    constructor(
        firstName,
        lastName,
        birthdate,
        startDate,
        department,
        street,
        city,
        stateName,
        zipcode,
        id
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.startDate = startDate;
        this.department = department;
        this.street = street;
        this.city = city;
        this.stateName = stateName;
        this.zipcode = zipcode;
        this.id = id;
    }
}
