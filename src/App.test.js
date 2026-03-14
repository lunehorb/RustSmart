// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RustSmartContracts title', () => {
    render(<App />);
    const titleElement = screen.getByText(/RustSmartContracts/i);
    expect(titleElement).toBeInTheDocument();
});
