import { useState } from 'react';
import { useStore } from 'react-redux';
import { tableHead } from '../assets/json/tableHead';
import sortTable from '../helpers/sortTable';
import setTablePage from '../helpers/setTablePage';
import { selectEmployee } from '../utils/selector';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import setTableSizeHelper from '../helpers/setTableSizeHelper';
import tableSearchHelper from '../helpers/tableSearchHelper';

export default function TableBody() {
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
    const [search, setSearch] = useState('');

    const handleSetPage = (page) => {
        setTablePage(
            setPage,
            page,
            setEmployeesList,
            employeesListScreen,
            tableSize
        );
    };

    const handleSetTableSize = (size) => {
        setTableSizeHelper(
            setTableSize,
            size,
            setEmployeesList,
            employeesListScreen,
            page,
            employeesListTotal,
            setPage,
            setPages
        );
    };

    const handleSearch = (words) => {
        tableSearchHelper(
            setSearch,
            words,
            employeesListTotal,
            setEmployeesListScreen,
            setEmployeesList,
            tableSize,
            page,
            setPages,
            setEmployeesListLength
        );
    };

    return (
        <div>
            <h1 className="text-center text-3xl m-4">Current Employees</h1>
            <TableHeader
                TableSize={handleSetTableSize}
                search={search}
                handleSearch={handleSearch}
            />
            <table className="m-4 table-fixed">
                <thead>
                    <tr>
                        {tableHead.map((element) => (
                            <th key={element.value} className="p-3 w-1/12">
                                <div className="flex justify-around items-center whitespace-nowrap">
                                    {element.text}
                                    <div className="ml-2 flex-col flex justify-center items-center opacity-25">
                                        <button
                                            type="button"
                                            aria-label="sort alphabetically"
                                            onClick={(e) =>
                                                sortTable(
                                                    e,
                                                    'down',
                                                    element.value,
                                                    employeesListScreen,
                                                    setEmployeesListScreen,
                                                    setEmployeesList,
                                                    tableSize,
                                                    page
                                                )
                                            }
                                        >
                                            <i className="fas fa-chevron-up text-xs"></i>
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="sort alphabetically reverse"
                                            onClick={(e) =>
                                                sortTable(
                                                    e,
                                                    'up',
                                                    element.value,
                                                    employeesListScreen,
                                                    setEmployeesListScreen,
                                                    setEmployeesList,
                                                    tableSize,
                                                    page
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
            <TableFooter
                tableSize={tableSize}
                employeesListLength={employeesListLength}
                employeesListTotalLength={employeesListTotal.length}
                nbrOfPages={pages}
                setPage={handleSetPage}
                page={page}
            />
        </div>
    );
}
