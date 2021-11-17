import { useStore } from 'react-redux';
import { selectEmployee } from '../Selectors/selector';

export default function Table() {
    const store = useStore();
    const employeesList = selectEmployee(store.getState()).data;

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
                    <tr>
                        <td className="p-5">First Name</td>
                        <td className="p-5">Last Name</td>
                        <td className="p-5">Start Date</td>
                        <td className="p-5">Department</td>
                        <td className="p-5">Date of Birth</td>
                        <td className="p-5">Street</td>
                        <td className="p-5">City</td>
                        <td className="p-5">State</td>
                        <td className="p-5">Zip Code</td>
                    </tr>
                    {employeesList.map((employee) => (
                        <tr key={employee.id}>
                            <td className="p-5">{employee.firstName}</td>
                            <td className="p-5">{employee.lastName}</td>
                            <td className="p-5">{employee.startDate}</td>
                            <td className="p-5">{employee.department}</td>
                            <td className="p-5">{employee.birthdate}</td>
                            <td className="p-5">{employee.street}</td>
                            <td className="p-5">{employee.city}</td>
                            <td className="p-5">{employee.stateName}</td>
                            <td className="p-5">{employee.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
