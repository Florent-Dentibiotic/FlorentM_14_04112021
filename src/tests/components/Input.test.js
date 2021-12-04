import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import Input from '../../components/Input';

describe('Input', () => {
    it('Should render input', async () => {
        render(
            <Input
                label="First Name"
                name="firstName"
                type="text"
                setElement={() => {}}
                value={'florent'}
                max={10}
            />
        );
        const label = screen.getByRole('textbox');
        expect(label.name).toBe('firstName');
    });
});
