import Header from '../components/Header';
import Form from '../components/Form';
//import Modal from '../components/Modal';
import { useState } from 'react';
import Modal from '../components/Modal/Modal';

export default function Home() {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleClick = () => {
        setModal(false);
    };

    return (
        <>
            <main className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center "></main>
            <div className="absolute border-4 border-green-900 border-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded overflow-hidden bg-scroll">
                <Header
                    link={'/employee-list'}
                    label={'View Current Employees'}
                />
                <Form setModal={setModal} setModalContent={setModalContent} />
            </div>
            {modal && (
                <Modal
                    backgroundAction={handleClick}
                    modalStyle={
                        'p-9 border-4 flex flex-col justify-center items-center border-green-900 border-opacity-70 bg-white rounded overflow-hidden bg-scroll'
                    }
                    content={modalContent}
                    contentStyle={'m-5'}
                    buttonStyle={
                        'w-24 p-2 opacity-80 hover:opacity-100 rounded px-5 bg-green-900 text-white'
                    }
                    buttonAction={handleClick}
                />
            )}
        </>
    );
}
