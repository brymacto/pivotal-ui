/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.Input = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _iconography = require('../iconography');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = exports.Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Input.prototype.componentDidMount = function componentDidMount() {
    require('../../css/inputs');
  };

  Input.prototype.render = function render() {
    var _props = this.props,
        size = _props.size,
        icon = _props.icon,
        props = (0, _objectWithoutProperties3.default)(_props, ['size', 'icon']);


    var input = _react2.default.createElement('input', (0, _extends3.default)({}, props, {
      className: (0, _classnames2.default)(props.className, {
        'input-sm': ['sm', 'small'].indexOf(size) !== -1,
        'input-lg': ['lg', 'large'].indexOf(size) !== -1
      })
    }));

    if (!icon) return input;

    return _react2.default.createElement(
      'div',
      { className: 'input-icon-container' },
      input,
      _react2.default.createElement(_iconography.Icon, { src: icon })
    );
  };

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  size: _propTypes2.default.string,
  icon: _propTypes2.default.string
};