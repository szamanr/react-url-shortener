import React, {useEffect} from "react";
import {withRouter} from "react-router-dom";
import * as ResolverService from "./services/resolver";

function Resolver(props) {
    const slug = props.match.params.slug;

    // look up url
    useEffect(() => {
        // TODO: error handling
        ResolverService.resolve(slug, (originalUrl) => {
            console.debug(`original url: ${originalUrl}.`)

            window.location.replace(originalUrl);
        })
    });

    return (
        <div>
            <p>Redirecting...</p>
        </div>
    );
}

export default withRouter(Resolver);
