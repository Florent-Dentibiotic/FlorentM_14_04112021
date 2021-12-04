import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';

const handler = jest.fn();

describe('Input', () => {
    it('Should render input', () => {
        render(
            <Input
                label="First Name"
                name="firstName"
                type="text"
                setElement={handler}
                value={'florent'}
                max={10}
            />
        );
        const label = screen.getByRole('textbox');
        expect(label.name).toBe('firstName');
        let input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'a' } });
        expect(handler).toHaveBeenCalled();
    });
});
