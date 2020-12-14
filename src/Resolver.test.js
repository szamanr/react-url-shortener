import Resolver from "./Resolver";
import React from "react";
import {unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";

const mockUrlParams = (slug) => {
    return {
        params: {
            slug: slug,
        }
    }
};

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
        render(<Resolver match={mockUrlParams('random-slug')}/>, {
            container: container,
            wrapper: BrowserRouter
        });
    });
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders', () => {
    const redirectionText = screen.getByText(/Redirecting/i);
    expect(redirectionText).toBeInTheDocument();
});

xtest('redirects', () => {
    // TODO
});

xtest('displays incorrect URL warning', () => {
    // TODO
});
