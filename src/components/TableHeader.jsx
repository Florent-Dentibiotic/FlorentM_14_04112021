export default function TableHeader({ TableSize, search, handleSearch }) {
    return (
        <div className="flex justify-between">
            <div className="ml-4">
                <label htmlFor="show">
                    Show
                    <select
                        name="show"
                        className="border-2 border-green-900 border-opacity-70 rounded mx-2"
                        onChange={(e) => TableSize(e.target.value)}
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
                    value={search}
                ></input>
                {search.length > 0 ? (
                    <i
                        className="relative far fa-times-circle opacity-100 -left-6 cursor-pointer"
                        onClick={() => handleSearch('')}
                    ></i>
                ) : (
                    <i className="relative far fa-times-circle opacity-0 -left-6"></i>
                )}
            </div>
        </div>
    );
}
