import { render, screen } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Routes>
        <App />
      </Routes>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
