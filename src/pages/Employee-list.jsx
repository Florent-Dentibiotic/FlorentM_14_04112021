import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { employeeService } from '../services/EmployeeService';
import { selectEmployee } from '../Selectors/selector';
import { useSelector } from 'react-redux';

export default function EmployeeList() {
    const store = useStore();
    const employee = useSelector(selectEmployee);

    useEffect(() => {
        employeeService(store);
    }, [store]);

    const isLoaded = employee.status === 'resolved';

    return (
        <>
            {isLoaded ? (
                <>
                    <div className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center"></div>
                    <div className="absolute border-4 border-green-900 border-opacity-70 top-4 left-1/2 transform -translate-x-1/2 bg-white rounded">
                        <Header link={'/'} label={'Back Home'} />
                        <Table />
                        <Footer />
                    </div>
                </>
            ) : (
                <>
                    <div className="font-sans relative opacity-10 bg-main-pattern bg-repeat-space bg-center w-screen h-screen flex justify-center items-center"></div>
                    <div className="absolute border-4 border-green-900 border-opacity-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded">
                        <div className="animate-pulse flex space-x-4">
                            <Header link={'/'} label={'Back Home'} />
                            <Footer />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
