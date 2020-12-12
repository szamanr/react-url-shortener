import React, {useEffect, useState} from "react";
import * as ResolverService from "./services/resolver";
import {Link} from "react-router-dom";

function Resolver(props) {
    const slug = props.match.params.slug;
    const [status, setStatus] = useState('Redirecting...');

    // look up url
    useEffect(() => {
        ResolverService.resolve(slug, (originalUrl) => {
            console.debug(`original url: ${originalUrl}.`)

            window.location.replace(originalUrl);
        }, (error) => {
            setStatus('Incorrect URL.')
            console.error(error);
        });
    }, [slug]);

    return (
        <div className="Resolver">
            <h1>
                <Link to="/">URL Shortener</Link>
            </h1>
            <p>{status}</p>
        </div>
    );
}

export default Resolver;
