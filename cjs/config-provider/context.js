'use strict';

var React = require('react');
var zhCN = require('../_locale/zh-CN.js');

const DefaultConfigProviderProps = {
    locale: zhCN.default,
    prefixCls: 'eui',
    size: 'medium',
    getPrefixCls: (componentName) => `eui-${componentName}`,
};
const ConfigContext = React.createContext(DefaultConfigProviderProps);

exports.ConfigContext = ConfigContext;
exports.DefaultConfigProviderProps = DefaultConfigProviderProps;
