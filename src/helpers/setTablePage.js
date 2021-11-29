export default function setTablePage(
    setPage,
    page,
    setEmployeesList,
    employeesListScreen,
    tableSize
) {
    setPage(page);
    setEmployeesList(
        employeesListScreen.slice(
            tableSize * page - tableSize,
            tableSize * page
        )
    );
}
