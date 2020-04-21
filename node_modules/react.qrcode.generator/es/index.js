function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
var qr = require('qr.js');
import ReactDOM from 'react-dom';

var QrCode = function (_Component) {
  _inherits(QrCode, _Component);

  function QrCode(props) {
    _classCallCheck(this, QrCode);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.setRef = function (ctx) {
      _this.ctx = ctx.getContext("2d");

      var qrcode = qr(_this.props.value);

      var size = _this.props.size === undefined ? '100' : _this.props.size;
      var fgColor = _this.props.foreground === undefined ? '#000000' : _this.props.foreground;
      var bgColor = _this.props.background === undefined ? '#FFFFFF' : _this.props.background;
      var margin = _this.props.margin === undefined ? 10 : parseInt(_this.props.margin);

      var canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;

      var cells = qrcode.modules;
      if (cells === null) {
        return;
      }

      var tileW = (size - 2 * margin) / cells.length;
      var tileH = (size - 2 * margin) / cells.length;

      _this.ctx.fillStyle = bgColor;
      _this.ctx.fillRect(0, 0, size + 2 * margin, size + 2 * margin);

      for (var r = 0; r < cells.length; ++r) {
        var row = cells[r];
        for (var c = 0; c < row.length; ++c) {
          if (row[c]) {
            _this.ctx.fillStyle = row[c] ? fgColor : bgColor;
            var w = Math.ceil((c + 1) * tileW) - Math.floor(c * tileW);
            var h = Math.ceil((r + 1) * tileH) - Math.floor(r * tileH);
            _this.ctx.fillRect(Math.round(c * tileW) + margin, Math.round(r * tileH) + margin, w, h);
          }
        }
      }
    };

    return _this;
  }

  QrCode.prototype.render = function render() {
    return React.createElement('canvas', {
      width: this.props.size === undefined ? '100' : this.props.size,
      height: this.props.size === undefined ? '100' : this.props.size,
      ref: this.setRef
    });
  };

  return QrCode;
}(Component);

export { QrCode as default };