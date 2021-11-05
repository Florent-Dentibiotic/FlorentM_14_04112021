import Header from '../components/Header';
import Form from '../components/Form';

export default function Home() {
    return (
        <>
            <div className="font-sans relative opacity-60 bg-gradient-to-br from-green-400 via-blue-800 to-green-900 bg-cover bg-center w-screen h-screen flex justify-center items-center "></div>
            <div className="absolute border-4 border-green-900 border-opacity-70 top-4 left-1/2 -ml-48 w-96 h-5/6 bg-white rounded overflow-hidden bg-scroll">
                <Header />
                <Form />
            </div>
        </>
    );
}
