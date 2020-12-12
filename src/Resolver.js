import React, {useEffect, useState} from "react";
import * as ResolverService from "./services/resolver";

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
        <div className="resolver">
            <p>{status}</p>
        </div>
    );
}

export default Resolver;
