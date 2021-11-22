export default function PageList({ nbrOfPages, setPage, page }) {
    const pages = [];
    for (let i = 1; i <= nbrOfPages; i++) {
        pages.push(
            <button
                key={page + i}
                value={i}
                onClick={(e) => setPage(e.target.value)}
                className="px-3"
            >
                {i}
            </button>
        );
    }

    return (
        <>
            <button onClick={() => page > 1 && setPage(page - 1)}>
                Previous
            </button>
            {pages}
            <button onClick={() => page < nbrOfPages && setPage(page + 1)}>
                Next
            </button>
        </>
    );
}
