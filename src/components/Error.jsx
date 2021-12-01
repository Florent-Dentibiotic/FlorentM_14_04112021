import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <main className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center "></main>
            <div className="absolute text-center border-4 border-green-900 border-opacity-90 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded overflow-hidden bg-scroll p-8">
                <div className="py-5">
                    <h1 className="font-sans text-3xl text-center">
                        Page non trouvée
                    </h1>
                </div>
                <Link
                    className="font-sans text-xl text-center underline m-5"
                    to="/"
                >
                    Accueil
                </Link>
            </div>
        </>
    );
}
