export default function Table({ employeesList }) {
    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th colSpan="9" className="text-center">
                            Current Employees
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employeesList &&
                        employeesList.map((employee) => (
                            <tr key={employee.firstName}>
                                <td className="p-5">{employee.firstName}</td>
                                <td className="p-5">{employee.lastName}</td>
                                <td className="p-5">{employee.Birthday}</td>
                                <td className="p-5">{employee.startDate}</td>
                                <td className="p-5">{employee.Street}</td>
                                <td className="p-5">{employee.City}</td>
                                <td className="p-5">{employee.Zipcode}</td>
                                <td className="p-5">{employee.State}</td>
                                <td className="p-5">{employee.Department}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
