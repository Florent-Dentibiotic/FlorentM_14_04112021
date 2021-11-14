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
                            <tr key={employee.id}>
                                <td className="p-5">{employee.firstName}</td>
                                <td className="p-5">{employee.lastName}</td>
                                <td className="p-5">{employee.birthday}</td>
                                <td className="p-5">{employee.startDate}</td>
                                <td className="p-5">{employee.street}</td>
                                <td className="p-5">{employee.city}</td>
                                <td className="p-5">{employee.zipcode}</td>
                                <td className="p-5">{employee.state}</td>
                                <td className="p-5">{employee.department}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
