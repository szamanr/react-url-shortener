import {render, screen} from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

test('renders shortener', () => {
    render(<App/>);
    const pageTitle = screen.getByText(/URL Shortener/i);
    expect(pageTitle).toBeInTheDocument();
});

test('renders resolver', () => {
    window.history.pushState({}, 'test page', '/random-slug');
    render(<App/>, {wrapper: BrowserRouter});

    const redirectionText = screen.getByText(/Redirecting/i);
    expect(redirectionText).toBeInTheDocument();
});
