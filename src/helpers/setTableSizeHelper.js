export default function setTableSizeHelper(
    setTableSize,
    size,
    setEmployeesList,
    employeesListScreen,
    page,
    employeesListTotal,
    setPage,
    setPages
) {
    setTableSize(size);
    setEmployeesList(
        employeesListScreen.slice(size * page - size, size * page)
    );
    setPages(Math.ceil(employeesListTotal.length / size));
    setPage(1);
    setEmployeesList(employeesListScreen.slice(0, size));
}
