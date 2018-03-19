/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.Icon = undefined;

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _helpers = require('../helpers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = exports.Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon() {
    (0, _classCallCheck3.default)(this, Icon);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Icon.prototype.componentDidMount = function componentDidMount() {
    require('../../css/iconography');
  };

  Icon.prototype.render = function render() {
    var _props = this.props,
        src = _props.src,
        verticalAlign = _props.verticalAlign,
        others = (0, _objectWithoutProperties3.default)(_props, ['src', 'verticalAlign']);

    var props = (0, _helpers.mergeProps)(others, { className: (0, _classnames2.default)('icon', 'icon-' + verticalAlign, { 'spinner': src.indexOf('spinner') === 0 }) });

    var renderedIcon = _icons2.default[src],
        iconSrc = src;

    if (!renderedIcon) {
      renderedIcon = _icons2.default.help;
      iconSrc = 'help';
      console.warn('Icon "' + src + '" is not recognized.');
    }

    return _react2.default.createElement(
      'div',
      props,
      _react2.default.cloneElement(renderedIcon, { className: 'icon-' + iconSrc, key: iconSrc })
    );
  };

  return Icon;
}(_react2.default.Component);

Icon.propTypes = {
  src: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object,
  verticalAlign: _propTypes2.default.oneOf(['middle', 'baseline'])
};
Icon.defaultProps = {
  size: 'inherit',
  style: {},
  verticalAlign: 'middle'
};