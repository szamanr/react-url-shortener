import React, {useState} from "react";
import * as ShortenerService from "./services/shortener";
import "./Shortener.css";

function Shortener() {
    const [url, setUrl] = useState('');
    const [short, setShort] = useState('');
    const [notificationText, setNotificationText] = useState(null);

    const handleChange = (e) => {
        setUrl(e.target.value);
    }

    /**
     * calls the shortener service when form submitted
     *
     * @param e
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        if(! url) {
            flashNotificationMessage('Please provide a URL!');
            return;
        }

        console.debug(`shortening ${url}.`);

        const slug = ShortenerService.shorten(url);
        const shortUrl = 'http://localhost:3000/' + slug;
        console.debug(`short url: ${shortUrl}.`);

        setShort(shortUrl);
    }

    /**
     * displays a short notification message to user for validation or confirmation messages.
     *
     * @param text
     */
    function flashNotificationMessage(text) {
        setNotificationText(text);
        setTimeout(() => {
            setNotificationText(null);
        }, 1000)
    }

    /**
     * writes the current short url to clipboard
     */
    const copyToClipboard = () => {
        navigator.clipboard.writeText(short);

        flashNotificationMessage('Copied to clipboard!');
    }

    const shortenerForm = ! short ? (
        <form className="shortener-form" onSubmit={handleSubmit}>
            <input name="url" value={url} onChange={handleChange}
                   type="text" placeholder="Paste a long url to shorten it"/>
            <button type="submit">shorten</button>
        </form>
    ) : null;

    const shortUrlDisplay = short ? (
        <div className="short-url">
            <input value={short} readOnly/>
            <button onClick={copyToClipboard}>copy</button>
        </div>
    ) : null;

    const notificationBox = notificationText ? (
        <p className="copy-confirmation">{notificationText}</p>
    ) : null;

    return (
        <div className="Shortener">
            <h1>URL Shortener</h1>
            {shortenerForm}
            {shortUrlDisplay}
            {notificationBox}
        </div>
    );
}

export default Shortener;
