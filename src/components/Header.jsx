import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header() {
    return (
        <>
            <div className="flex justify-between p-5">
                <div>
                    <h1 className="text-center text-2xl font-bold m-2">
                        HRnet
                    </h1>
                    <Link className="text-xs underline" to="/employee-list">
                        View Current Employees
                    </Link>
                </div>

                <img src={logo} alt="wealth health logo" className="w-20" />
            </div>
            <hr className="shadow" />
        </>
    );
}
