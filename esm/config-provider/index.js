import React from 'react';
import omit from '../_utils/omit.js';
import { DefaultConfigProviderProps, ConfigContext } from './context.js';

function ConfigProvider(props) {
    const _props = Object.assign({}, DefaultConfigProviderProps, props);
    const { prefixCls, children } = _props;
    function getPrefixCls(componentName) {
        return `${prefixCls}-${componentName}`;
    }
    const config = Object.assign(Object.assign({}, omit(_props, ["children"])), { getPrefixCls });
    return (React.createElement(ConfigContext.Provider, { value: config }, children));
}
ConfigProvider.ConfigContext = ConfigContext;

export { ConfigContext, ConfigProvider as default };
