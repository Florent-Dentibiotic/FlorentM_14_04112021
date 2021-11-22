import { useState } from 'react';
import { useStore } from 'react-redux';
import { selectEmployee } from '../utils/selector';
import PageList from './PagesList';

const tableHead = [
    { text: 'First Name', value: 'firstName' },
    { text: 'Last Name', value: 'lastName' },
    { text: 'Start Date', value: 'startDate' },
    { text: 'Department', value: 'department' },
    { text: 'Date of Birth', value: 'birthdate' },
    { text: 'Street', value: 'street' },
    { text: 'City', value: 'city' },
    { text: 'State', value: 'stateName' },
    { text: 'Zip Code', value: 'zipcode' },
];

export default function Table() {
    const store = useStore();
    const employeesListTotal = selectEmployee(store.getState()).data;
    const [employeesListLength, setEmployeesListLength] = useState(
        employeesListTotal.length
    );
    const [tableSize, setTableSize] = useState(10);
    const [pages, setPages] = useState(
        Math.ceil(employeesListTotal.length / tableSize)
    );
    const [page, setPage] = useState(1);
    const [employeesListScreen, setEmployeesListScreen] = useState(
        selectEmployee(store.getState()).data
    );
    const [employeesList, setEmployeesList] = useState(
        employeesListScreen.slice(0, tableSize)
    );
    //const [search, setSearch] = useState();

    const handleSort = (e, direction, column) => {
        e.preventDefault();
        e.stopPropagation();
        let employeeListSorted = [];
        if (direction === 'up') {
            employeeListSorted = Array.from(employeesListScreen).sort(function (
                a,
                b
            ) {
                if (a[column] < b[column]) {
                    return -1;
                }
                if (a[column] > b[column]) {
                    return 1;
                }
                return 0;
            });
        } else {
            employeeListSorted = Array.from(employeesListScreen).sort(function (
                a,
                b
            ) {
                if (a[column] > b[column]) {
                    return -1;
                }
                if (a[column] < b[column]) {
                    return 1;
                }
                return 0;
            });
        }
        setEmployeesListScreen(employeeListSorted);
        setEmployeesList(
            employeeListSorted.slice(
                tableSize * page - tableSize,
                tableSize * page
            )
        );
    };

    const handleSetPage = (page) => {
        setPage(page);
        setEmployeesList(
            employeesListScreen.slice(
                tableSize * page - tableSize,
                tableSize * page
            )
        );
    };

    const handleSetTableSize = (size) => {
        setTableSize(size);
        setEmployeesList(
            employeesListScreen.slice(size * page - size, size * page)
        );
    };

    const handleSearch = (words) => {
        let employeesListFiltered = [];
        Array.from(employeesListTotal).forEach((element) => {
            Object.values(element).some((e) =>
                e.toUpperCase().includes(words.toUpperCase())
            ) && employeesListFiltered.push(element);
        });
        console.log(employeesListFiltered);
        setEmployeesListScreen(employeesListFiltered);
        setEmployeesList(
            employeesListFiltered.slice(
                tableSize * page - tableSize,
                tableSize * page
            )
        );
        setPages(Math.ceil(employeesListFiltered.length / tableSize));
        setEmployeesListLength(employeesListFiltered.length);
    };

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
                            onChange={(e) => handleSetTableSize(e.target.value)}
                        >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
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
                        onChange={(e) => handleSearch(e.target.value)}
                    ></input>
                </div>
            </div>
            <table className="m-4 table-fixed">
                <thead>
                    <tr>
                        {tableHead.map((element) => (
                            <th key={element.value} className="p-3 w-1/12">
                                <div className="flex justify-between items-center whitespace-nowrap">
                                    {element.text}
                                    <div className="ml-2 flex-col flex justify-between items-center">
                                        <button
                                            onClick={(e) =>
                                                handleSort(
                                                    e,
                                                    'up',
                                                    element.value
                                                )
                                            }
                                        >
                                            <i className="fas fa-chevron-up text-xs"></i>
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                handleSort(
                                                    e,
                                                    'down',
                                                    element.value
                                                )
                                            }
                                        >
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
            <div className="flex justify-between">
                <div className="ml-4">
                    <p>
                        Showing {tableSize * page - tableSize + 1} to{' '}
                        {tableSize * page > employeesListLength
                            ? employeesListLength
                            : tableSize * page}{' '}
                        of {employeesListLength}{' '}
                        {employeesListLength < employeesListTotal.length &&
                            `(filtered from ${employeesListTotal.length} total entries)`}
                    </p>
                </div>
                <div className="mr-4">
                    <PageList
                        nbrOfPages={pages}
                        setPage={handleSetPage}
                        page={page}
                    />
                </div>
            </div>
        </div>
    );
}
