# Text-Replace [![NPM version](https://badge.fury.io/js/node-html-parser.png)]

Node.js transform stream that performs text based search and replacements. Since replaceAll method is not defined in nodeJs so I designed this for some usefull use case.

## Installation

npm install text-replacer --save

## Usage

### Streaming search and replace

Let's say we have the following text:

I am here to say you~br~but you don't want to listen

To replace all occurrences of '~br~' with '\<br />' we could do this:

```
const Replacer = require("replace-text");

let replacerConfig = {
"~br~": "<br />",
"~tb~": "<hr />",
};
let replacer = new Replacer(replacerConfig);

replacer.replace("I am here to say you~br~but you don't want to listen");  //I am here to say you<br />but you don't want to listen
```
