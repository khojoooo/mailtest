# QR Code generator for React

A React component to generate [QR Code](http://en.wikipedia.org/wiki/QR_code).

## Installing react.qrcode.generator

```sh
npm install react.qrcode.generator
```
## Usage

```js
import React, {Component} from 'react'
import {render} from 'react-dom'

import QrCode from 'react.qrcode.generator'

class Demo extends Component {
  render() {
    return <div>
      <QrCode value='https://reactjs.org'/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

```
## API
prop      | type                 | default value
----------|----------------------|--------------
`value`   | `string`             |
`size`    | `number`             | `100`
`margin`    | `number`             | `10`
`background` | `string` | `"#FFFFFF"`
`foreground` | `string` | `"#000000"`