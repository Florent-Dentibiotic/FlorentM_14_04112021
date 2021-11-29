export default function sortTable(
    e,
    direction,
    column,
    employeesListScreen,
    setEmployeesListScreen,
    setEmployeesList,
    tableSize,
    page
) {
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
        employeeListSorted.slice(tableSize * page - tableSize, tableSize * page)
    );
}
