export default function tableSearchHelper(
    setSearch,
    words,
    employeesListTotal,
    setEmployeesListScreen,
    setEmployeesList,
    tableSize,
    page,
    setPages,
    setEmployeesListLength
) {
    setSearch(words);
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
}
