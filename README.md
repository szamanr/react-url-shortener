# URL Shortener

## instructions:

* to run: `yarn start` or `npm start` and open http://localhost:3000/.
* paste a URL in the form and submit to shorten it.
* you can copy the short url using the button.
* navigate to the short url to visit the original page. 

## architecture:

* i used firebase as it allows to run this simple app without any backend setup required.
* for simplicity, i put all firebase config and api keys in the repo. the database allows unauthorised access for 1 week for testing purposes.
* for slug generation i simply used the document ID provided by firebase. this is a 20-character unique string.  

## possible improvements:

* write a custom slug-generation function, which would make the generated urls shorter.
* validate URLs — this can be achieved either via custom regex or a 3rd-party library.
* add missing tests for Resolver - redirecting and displaying warning for incorrect urls.
