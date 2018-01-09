'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Random = function (_Component) {
  _inherits(Random, _Component);

  function Random() {
    _classCallCheck(this, Random);

    return _possibleConstructorReturn(this, (Random.__proto__ || Object.getPrototypeOf(Random)).apply(this, arguments));
  }

  _createClass(Random, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          tag = _props.tag,
          locale = _props.locale,
          children = _props.children;

      var _value$split = value.split('.'),
          _value$split2 = _slicedToArray(_value$split, 2),
          category = _value$split2[0],
          property = _value$split2[1];

      var html = void 0;

      if (locale) {
        _faker2.default.locale = locale;
      }

      var fakeData = property ? _faker2.default[category][property]() : _faker2.default[category]();

      if (tag === undefined) {
        html = _react2.default.createElement(
          'span',
          null,
          fakeData
        );
      } else {
        switch (tag) {
          case 'a':
            html = _react2.default.createElement(
              'a',
              { href: fakeData },
              children
            );
            break;
          case 'img':
            html = _react2.default.createElement('img', { src: fakeData });
            break;
          default:
            var CustomTag = tag;
            html = _react2.default.createElement(
              CustomTag,
              null,
              fakeData
            );
        }
      }

      return html;
    }
  }]);

  return Random;
}(_react.Component);

;

Random.propTypes = {
  value: _propTypes2.default.string.isRequired,
  tag: _propTypes2.default.string,
  locale: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};

exports.default = Random;