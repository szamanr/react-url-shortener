import React, {useState} from "react";
import * as ShortenerService from "./services/shortener";
import "./Shortener.css";

function Shortener() {
    const [url, setUrl] = useState('');
    const [short, setShort] = useState('');
    const [textCopiedFlag, setTextCopiedFlag] = useState(false);

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
        console.debug(`shortening ${url}.`);

        const slug = ShortenerService.shorten(url);
        const shortUrl = 'http://localhost:3000/' + slug;
        console.debug(`short url: ${shortUrl}.`);

        setShort(shortUrl);
    }

    /**
     * writes the current short url to clipboard
     */
    const copyToClipboard = () => {
        navigator.clipboard.writeText(short);

        // flash a confirmation text for 1 second
        setTextCopiedFlag(true);
        setTimeout(() => {
            setTextCopiedFlag(false);
        }, 1000)
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

    const copyConfirmationDialog = textCopiedFlag ? (
        <p className="copy-confirmation">Copied to clipboard!</p>
    ) : null;

    return (
        <div className="Shortener">
            <h1>URL Shortener</h1>
            {shortenerForm}
            {shortUrlDisplay}
            {copyConfirmationDialog}
        </div>
    );
}

export default Shortener;
