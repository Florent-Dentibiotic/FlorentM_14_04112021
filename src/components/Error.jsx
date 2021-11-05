import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <div className="font-sans relative opacity-60 bg-gradient-to-br from-green-400 via-blue-800 to-green-900 bg-cover bg-center w-screen h-screen flex justify-center items-center "></div>
            <div className="absolute top-4 left-1/2 -ml-48 w-96 h-5/6 bg-white rounded overflow-hidden bg-scroll flex flex-col justify-center items-center">
                <div className="py-5">
                    <h1 className="font-sans text-3xl text-center">
                        Page non trouvée
                    </h1>
                </div>
                <Link
                    className="font-sans text-xl text-center underline"
                    to="/"
                >
                    Accueil
                </Link>
            </div>
        </>
    );
}
