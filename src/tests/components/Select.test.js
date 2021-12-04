import Select from '../../components/Select';
import { render, screen, fireEvent } from '@testing-library/react';

const handler = jest.fn();

describe('Select', () => {
    it('Should render select', () => {
        render(
            <Select
                label="State"
                name="state"
                options={[
                    {
                        name: 'Alabama',
                        abbreviation: 'AL',
                    },
                    {
                        name: 'Alaska',
                        abbreviation: 'AK',
                    },
                ]}
                setElement={handler}
                value={'AL'}
            />
        );
        let select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'AK' } });
        expect(handler).toHaveBeenCalled();
    });
});
