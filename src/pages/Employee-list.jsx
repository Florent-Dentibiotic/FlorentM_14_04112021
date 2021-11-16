import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import { useStore } from 'react-redux';
import { selectEmployee } from '../Selectors/selector';
import { useEffect } from 'react';
import { employeeService } from '../services/EmployeeService';

export default function EmployeeList() {
    const store = useStore();
    const employeesList = selectEmployee(store.getState()).data;
    useEffect(() => {
        employeeService(store);
    }, [store]);
    return (
        <>
            <div className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center"></div>
            <div className="absolute border-4 border-green-900 border-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 bg-white rounded">
                <Header />
                {employeesList && <Table employeesList={employeesList} />}
                <Footer />
            </div>
        </>
    );
}
