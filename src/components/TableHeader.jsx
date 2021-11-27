import { tableSize } from '../assets/json/tableSize';
import Select from './Select';

export default function TableHeader({ TableSize, search, handleSearch }) {
    return (
        <div className="flex justify-between">
            <div className="ml-4">
                <div htmlFor="show" className="flex gap-3">
                    Show
                    <Select
                        name="show"
                        options={tableSize}
                        setElement={TableSize}
                    />
                    entries
                </div>
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
