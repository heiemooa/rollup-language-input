import React from "react";
import { ConfigProviderProps } from "./interface";
import omit from "../_utils/omit";
import { ConfigContext, DefaultConfigProviderProps } from "./context";

function ConfigProvider(props: ConfigProviderProps) {
  const _props: ConfigProviderProps = Object.assign(
    {},
    DefaultConfigProviderProps,
    props
  );

  const { prefixCls, children } = _props;

  function getPrefixCls(componentName: string) {
    return `${prefixCls}-${componentName}`;
  }

  const config: ConfigProviderProps = {
    ...omit(_props, ["children"]),
    getPrefixCls,
  };

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
}

ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;

const ConfigConsumer = ConfigContext.Consumer;

export { ConfigContext, ConfigConsumer };
