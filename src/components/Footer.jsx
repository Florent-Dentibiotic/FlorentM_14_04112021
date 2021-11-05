import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="flex justify-center p-5">
                <Link className="text-center underline" to="/">
                    Home
                </Link>
            </div>
        </>
    );
}
