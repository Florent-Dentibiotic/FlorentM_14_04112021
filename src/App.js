import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/Employee-list';
import Home from './pages/Home';
import Error from './components/Error';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employee-list" element={<EmployeeList />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
