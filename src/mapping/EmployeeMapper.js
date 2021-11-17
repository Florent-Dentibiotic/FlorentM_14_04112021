import Employee from '../core/Employee';

export default class EmployeeMapper {
    /**
     * Convert received Json to new User type
     *
     * @param { object } json
     * @returns { new Employee }
     */
    static convertToEmployee(json) {
        return new Employee(
            json.firstName,
            json.lastName,
            json.birthdate,
            json.startDate,
            json.department,
            json.street,
            json.city,
            json.stateName,
            json.zipcode,
            json.id
        );
    }
}
