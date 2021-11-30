import Header from '../components/Header';
import Footer from '../components/Footer';
import TableBody from '../components/TableBody';
import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { employeeService2 } from '../services/EmployeeService';
import { selectEmployee } from '../utils/selector';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';

export default function EmployeeList() {
    const store = useStore();
    const employee = useSelector(selectEmployee);

    useEffect(() => {
        employeeService2(store, () => {});
    }, [store]);

    const isLoaded = employee.status === 'resolved';
    const isUpdating = employee.status === 'updating';

    return (
        <>
            <main className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center"></main>
            <div className="absolute border-4 border-green-900 border-opacity-70 top-4 left-1/2 transform -translate-x-1/2 bg-white rounded w-11/12 overflow-scroll">
                <Header link={'/'} label={'Back Home'} />
                {isLoaded || isUpdating ? <TableBody /> : <Loader />}
                <Footer />
            </div>
        </>
    );
}
