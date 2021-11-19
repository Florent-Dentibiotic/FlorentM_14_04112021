import Header from '../components/Header';
import Form from '../components/Form';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Home() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <main className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center "></main>
            <div className="absolute border-4 border-green-900 border-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded overflow-hidden bg-scroll">
                <Header
                    link={'/employee-list'}
                    label={'View Current Employees'}
                />
                <Form setModal={setModal} />
            </div>
            {modal && <Modal setModal={setModal} />}
        </>
    );
}
