'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./birch-typeahead');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BirchTypeahead = function (_React$Component) {
  _inherits(BirchTypeahead, _React$Component);

  function BirchTypeahead(props) {
    _classCallCheck(this, BirchTypeahead);

    var _this = _possibleConstructorReturn(this, (BirchTypeahead.__proto__ || Object.getPrototypeOf(BirchTypeahead)).call(this, props));

    _this.myRef = _react2.default.createRef();
    return _this;
  }

  _createClass(BirchTypeahead, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          onOptionSelected = _props.onOptionSelected,
          onInput = _props.onInput;


      var typeahead = document.createElement('birch-typeahead');
      this.myRef.current.appendChild(typeahead);

      typeahead.addEventListener('birch-typeahead:input', function (e) {
        var setOptions = function setOptions(options) {
          typeahead.setAttribute('options', JSON.stringify(options));
        };
        var showOptions = function showOptions() {
          return typeahead.showOptions();
        };
        onInput(e, setOptions, showOptions);
      });

      typeahead.addEventListener('birch-typeahead:selected', function (e) {
        onOptionSelected(e);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: this.myRef });
    }
  }]);

  return BirchTypeahead;
}(_react2.default.Component);

exports.default = BirchTypeahead;
