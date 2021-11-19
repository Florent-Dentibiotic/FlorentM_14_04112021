import { useStore } from 'react-redux';
import { selectEmployee } from '../utils/selector';

const tableHead = [
    'First Name',
    'Last Name',
    'Start Date',
    'Department',
    'Date of Birth',
    'Street',
    'City',
    'State',
    'Zip Code',
];

export default function Table() {
    const store = useStore();
    const employeesList = selectEmployee(store.getState()).data;

    return (
        <div>
            <h1 className="text-center text-3xl m-4">Current Employees</h1>
            <div className="flex justify-between">
                <div className="ml-4">
                    <label htmlFor="show">
                        Show
                        <select
                            name="show"
                            className="border-2 border-green-900 border-opacity-70 rounded mx-2"
                        >
                            <option value="show10">10</option>
                            <option value="show25">25</option>
                            <option value="show50">50</option>
                            <option value="show100">100</option>
                        </select>
                        entries
                    </label>
                </div>
                <div className="pr-2">
                    <label htmlFor="search">Search :</label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                        className="h-8 border-2 border-green-900 border-opacity-70 rounded pl-2 ml-2"
                    ></input>
                </div>
            </div>
            <table className="m-4 table-fixed">
                <thead>
                    <tr>
                        {tableHead.map((element) => (
                            <th key={`head-${element}`} className="p-3 w-1/12">
                                <div className="flex justify-between items-center whitespace-nowrap">
                                    {element}
                                    <div className="ml-2 flex-col flex justify-between items-center">
                                        <button>
                                            <i className="fas fa-chevron-up text-xs"></i>
                                        </button>
                                        <button>
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </button>
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {employeesList.map((employee) => (
                        <tr key={employee.id}>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.firstName}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.lastName}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.startDate}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.department}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.birthdate}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.street}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.city}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.stateName}
                            </td>
                            <td className="p-2 border border-emerald-500 text-center whitespace-nowrap">
                                {employee.zipcode}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
