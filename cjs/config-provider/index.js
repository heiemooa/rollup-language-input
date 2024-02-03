'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var omit = require('../_utils/omit.js');
var context = require('./context.js');

function ConfigProvider(props) {
    const _props = Object.assign({}, context.DefaultConfigProviderProps, props);
    const { prefixCls, children } = _props;
    function getPrefixCls(componentName) {
        return `${prefixCls}-${componentName}`;
    }
    const config = Object.assign(Object.assign({}, omit.default(_props, ["children"])), { getPrefixCls });
    return (React.createElement(context.ConfigContext.Provider, { value: config }, children));
}
ConfigProvider.ConfigContext = context.ConfigContext;
context.ConfigContext.Consumer;

exports.ConfigContext = context.ConfigContext;
exports.default = ConfigProvider;
