import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header({ link, label }) {
    return (
        <>
            <div className="flex justify-between p-5">
                <div>
                    <h1 className="text-center text-2xl font-bold m-2">
                        HRnet
                    </h1>
                    <Link className="m-2 text-xs underline" to={link}>
                        {label}
                    </Link>
                </div>

                <img
                    src={logo}
                    alt="wealth health logo"
                    width="80"
                    height="73"
                />
            </div>
            <hr className="shadow" />
        </>
    );
}
