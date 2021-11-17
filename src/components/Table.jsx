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
                        <td className="p-3">First&nbsp;Name</td>
                        <td className="p-3">Last&nbsp;Name</td>
                        <td className="p-3">Start Date</td>
                        <td className="p-3">Department</td>
                        <td className="p-3">Date&nbsp;of&nbsp;Birth</td>
                        <td className="p-3">Street</td>
                        <td className="p-3">City</td>
                        <td className="p-3">State</td>
                        <td className="p-3">Zip&nbsp;Code</td>
                    </tr>
                    {employeesList.map((employee) => (
                        <tr key={employee.id}>
                            <td className="p-3">{employee.firstName}</td>
                            <td className="p-3">{employee.lastName}</td>
                            <td className="p-3">{employee.startDate}</td>
                            <td className="p-3">{employee.department}</td>
                            <td className="p-3">{employee.birthdate}</td>
                            <td className="p-3">{employee.street}</td>
                            <td className="p-3">{employee.city}</td>
                            <td className="p-3">{employee.stateName}</td>
                            <td className="p-3">{employee.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
