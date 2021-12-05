import { render } from '@testing-library/react';
import Loader from '../../components/Loader';

describe('Loader', () => {
    it('Should render Loader', () => {
        render(<Loader />);
    });
});
