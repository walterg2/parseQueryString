# Parse Query String

A query string parsing util. Simply add it to your page to have the query string automatically parsed.
Call it using:

## Examples
```javascript
parseQueryString.getKeys(); // Returns an array of keys from the query string
parseQueryString.contains("someKey"); // Returns true/false if the key exists in the query string
parseQueryString.getValue("someValue", "default Text"); // Returns the value for a given key or the default text if the key doesn't exist
```

## More information:
http://walterg2.com
 
## License:
MIT Version 2 (see LICENSE.txt)