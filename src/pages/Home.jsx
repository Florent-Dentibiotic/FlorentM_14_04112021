import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <div className="relative opacity-60 bg-gradient-to-br from-green-400 via-blue-800 to-green-900 bg-cover bg-center w-screen h-screen flex justify-center items-center "></div>
            <div className="absolute top-4 left-1/3 w-1/3 h-5/6 bg-white rounded overflow-hidden bg-scroll">
                <Header />
            </div>
        </>
    );
}
