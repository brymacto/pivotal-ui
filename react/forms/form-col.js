/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

exports.__esModule = true;
exports.FormCol = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formUnit = require('./form-unit');

var _flexGrids = require('../flex-grids');

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newId = function newId() {
  return _crypto2.default.randomBytes(16).toString('base64');
};

var FormCol = exports.FormCol = function (_React$Component) {
  (0, _inherits3.default)(FormCol, _React$Component);

  function FormCol() {
    (0, _classCallCheck3.default)(this, FormCol);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  FormCol.prototype.componentDidMount = function componentDidMount() {
    require('../../css/forms');
  };

  FormCol.prototype.render = function render() {
    var _props = this.props,
        state = _props.state,
        setState = _props.setState,
        canSubmit = _props.canSubmit,
        onSubmit = _props.onSubmit,
        canReset = _props.canReset,
        reset = _props.reset,
        onChange = _props.onChange,
        onBlur = _props.onBlur,
        onChangeCheckbox = _props.onChangeCheckbox,
        fixed = _props.fixed,
        children = _props.children,
        name = _props.name,
        help = _props.help,
        validator = _props.validator,
        retainLabelHeight = _props.retainLabelHeight,
        hidden = _props.hidden,
        labelFor = _props.labelFor,
        className = _props.className,
        id = _props.id,
        rest = (0, _objectWithoutProperties3.default)(_props, ['state', 'setState', 'canSubmit', 'onSubmit', 'canReset', 'reset', 'onChange', 'onBlur', 'onChangeCheckbox', 'fixed', 'children', 'name', 'help', 'validator', 'retainLabelHeight', 'hidden', 'labelFor', 'className', 'id']);


    var element = typeof children !== 'function' ? children : children({
      canSubmit: canSubmit,
      canReset: canReset,
      reset: reset,
      onSubmit: onSubmit,
      submitting: state.submitting,
      setState: setState,
      state: state,
      onChange: onChange ? onChange(name, validator) : function () {
        return null;
      }
    });

    var field = element,
        htmlFor = void 0;
    if (element && _react2.default.Children.count(element) === 1) {
      var props = {
        name: element.props.name || name,
        id: element.props.id || newId()
      };
      htmlFor = labelFor || props.id;

      if (name) {
        var isCheckbox = element.props.type === 'checkbox';
        if (isCheckbox) {
          props.checked = !!(element.props.hasOwnProperty('checked') ? element.props.checked : state.current && state.current[name]);
          props.onChange = element.props.onChange || onChangeCheckbox(name);
        } else {
          props.value = element.props.hasOwnProperty('value') ? element.props.value : state.current && state.current[name];
          props.onChange = element.props.onChange || (onChange ? onChange(name, validator) : function () {});
          validator && (props.onBlur = onBlur({ name: name, validator: validator }));
        }
      }
      field = _react2.default.cloneElement(element, props);
    }

    return _react2.default.createElement(
      _flexGrids.FlexCol,
      { className: (0, _classnames2.default)(className, 'form-col', { 'col-fixed': fixed }), id: id, hidden: hidden },
      _react2.default.createElement(_formUnit.FormUnit, (0, _extends3.default)({
        retainLabelHeight: retainLabelHeight,
        hasError: state.errors && !!state.errors[name],
        labelFor: htmlFor,
        state: state,
        setState: setState
      }, rest, {
        field: field,
        help: state.errors && state.errors[name] || help
      }))
    );
  };

  return FormCol;
}(_react2.default.Component);

FormCol.propTypes = {
  state: _propTypes2.default.object,
  setState: _propTypes2.default.func,
  canSubmit: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  canReset: _propTypes2.default.func,
  reset: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onChangeCheckbox: _propTypes2.default.func,
  name: _propTypes2.default.string,
  help: _propTypes2.default.node,
  validator: _propTypes2.default.func,
  retainLabelHeight: _propTypes2.default.bool,
  hidden: _propTypes2.default.bool,
  labelFor: _propTypes2.default.string,
  fixed: _propTypes2.default.bool
};
FormCol.defaultProps = {
  state: {}
};