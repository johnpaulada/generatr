# Generatr
A text generation library based on Tracery.

[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

## Rationale
I tried to use Tracery on a React project, but couldn't get it to work. So I built a simple one based on it.

## Quickstart
### Import via `require`
```javascript
const Generatr = require('generatr')
```

### Import as ES module
```javascript
import Generatr from 'generatr'
```

### Import in browser
```html
<script src="https://cdn.jsdelivr.net/npm/generatr@0.1.1/generatr.min.js"></script>
```

### Creating a text generator with Generatr
To create a text generator, you need to supply it with a `grammar` object

#### Example:
```javascript
const generator = Generatr(grammar)
```

### Creating a Generatr grammar
A Generatr grammar is just an object whose values are either strings or arrays.

#### Example
```javascript
const grammar = {
  title: "{{adjective}} {{noun}}"
  adjective: ["Awesome", "Sad", "Nice"],
  noun: ["Person", "Animal"]
}
```

Inside of `{{` and `}}` should be a key inside the grammar object.
In this example, the `{{adjective}}` template will be replaced by one of the strings in the `adjective` key.
The same would happen with the `{{noun}}` template. You can even nest it or make it recursive but make sure that it will somehow end.

To actually generate some text, run `generator.generate("title")`. This will generate text using the template in the `title` key of the grammar object.

## Apps that use this
1. [Thesis Title Generator](https://jepe-thesis-title-generator.netlify.com/) - This is a CS/IT thesis title generator that uses Generatr to generate the text.

## License
MIT
