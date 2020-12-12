import React, {useState} from "react";
import * as ShortenerService from "./services/shortener";

function Shortener() {
    const [url, setUrl] = useState(null);

    function handleChange(e) {
        setUrl(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.debug(`shortening ${url}.`);

        const shortUrl = ShortenerService.shorten(url);
        console.debug(`short url: http://localhost:3000/${shortUrl}.`);
    }

    return (
        <div>
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input name="url" value={url} onChange={handleChange}
                       type="text" placeholder="Paste a long url to shorten it"/>
                <button type="submit">shorten</button>
            </form>
        </div>
    );
}

export default Shortener;
