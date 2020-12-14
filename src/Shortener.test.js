import Shortener from "./Shortener";
import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
        render(<Shortener/>, container);
    });
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('renders app title', () => {
    expect(container.querySelector(".Shortener").textContent).toContain("URL Shortener");
});

test('renders shortener form', () => {
    const form = document.querySelector("form.shortener-form");
    expect(container).toContainElement(form);
});

test('displays warning when no URL provided', () => {
    const button = document.querySelector("form.shortener-form button");
    expect(container).toContainElement(button);
    expect(button.innerHTML).toBe('shorten');

    userEvent.click(button);

    expect(container).toContainElement(button);
    expect(container.textContent).toContain("Please provide a URL!");
});

function submitValidForm(url) {
    const button = document.querySelector("form.shortener-form button");
    const input = document.querySelector("form.shortener-form input");

    userEvent.type(input, url);
    userEvent.click(button);
}

test('submits form', () => {
    submitValidForm('http://example.com/some/url');

    expect(container.textContent).not.toContain("Please provide a URL!");
});

test('displays short url', () => {
    submitValidForm('http://example.com/some/url');

    const form = document.querySelector(".short-url");
    expect(container).toContainElement(form);

    const copyButton = document.querySelector("button.copy-button");
    expect(container).toContainElement(copyButton);
});
