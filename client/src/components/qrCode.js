import React, {Component} from 'react'
import {render} from 'react-dom'
import QrCode from 'react.qrcode.generator'

class qrCode extends Component {
  render() {
    return <div>
      <QrCode size='200' value='http://localhost:3000/mail/0xD8F0A40c68F0752f69Cd290bE0761c7476a95B26'/>
    </div>
  }
}
export default qrCode;
