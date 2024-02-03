import { createContext } from 'react';
import locale from '../_locale/zh-CN.js';

const DefaultConfigProviderProps = {
    locale,
    prefixCls: 'eui',
    size: 'medium',
    getPrefixCls: (componentName) => `eui-${componentName}`,
};
const ConfigContext = createContext(DefaultConfigProviderProps);

export { ConfigContext, DefaultConfigProviderProps };
