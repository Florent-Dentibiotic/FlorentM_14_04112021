import { render } from '@testing-library/react';
import Header from '../../components/Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
    it('Should render Header', () => {
        render(
            <MemoryRouter>
                <Header link={'./'} label={'View Current Employees'} />;
            </MemoryRouter>
        );
    });
});
