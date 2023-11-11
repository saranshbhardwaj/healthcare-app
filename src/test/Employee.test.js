import { render, screen } from '@testing-library/react';
import React from 'react';
import Employee from '../components/Employees';

// Setting up test suit to test the components and the Client
describe('Employee tests', () => {
    it('should contain heading', () => {
    render(<Employee />);
    const heading = screen.getByText(/Employee page (Paycheck per month)/i);
        expect(heading).toBeInTheDocument()
    });
});