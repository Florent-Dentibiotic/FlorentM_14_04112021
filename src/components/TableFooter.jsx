export default function TableFooter({
    tableSize,
    employeesListLength,
    employeesListTotalLength,
    nbrOfPages,
    setPage,
    page,
}) {
    const pages = [];
    for (let i = 1; i <= nbrOfPages; i++) {
        page === i
            ? pages.push(
                  <button
                      key={'page' + i}
                      value={i}
                      onClick={() => setPage(i)}
                      className="m-1 h-8 w-8 text-center bg-gray-200 rounded hover:text-white hover:bg-gray-700 hover:border-gray-700"
                  >
                      {i}
                  </button>
              )
            : pages.push(
                  <button
                      key={page + i}
                      value={i}
                      onClick={() => setPage(i)}
                      className="m-1 h-8 w-8 text-center rounded hover:text-white hover:bg-gray-700 hover:border-gray-700"
                  >
                      {i}
                  </button>
              );
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="ml-4">
                    <p>
                        Showing {tableSize * page - tableSize + 1} to{' '}
                        {tableSize * page > employeesListLength
                            ? employeesListLength
                            : tableSize * page}{' '}
                        of {employeesListLength}{' '}
                        {employeesListLength < employeesListTotalLength &&
                            `(filtered from ${employeesListTotalLength} total entries)`}
                    </p>
                </div>
                <div className="mr-4">
                    <button
                        onClick={() => page > 1 && setPage(page - 1)}
                        className="m-1 h-8 w-24 rounded hover:text-white hover:bg-gray-700 hover:border-gray-700"
                    >
                        Previous
                    </button>
                    {pages}
                    <button
                        onClick={() => page < nbrOfPages && setPage(page + 1)}
                        className="m-1 h-8 w-24 rounded hover:text-white hover:bg-gray-700 hover:border-gray-700"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}
