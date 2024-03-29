import { ReactNode } from "react";
import { Locale } from "../_locale/interface";

export type ThemeConfig = Record<string, any>;

export type Components = {};

/**
 * @title ConfigProvider
 */
export interface ConfigProviderProps {
  /**
   * @zh 用于全局配置所有组件的默认参数
   * @en Default parameters for global configuration of all components
   */
  components?: Components;
  /**
   * @zh 设置语言包
   * @en Language package setting
   */
  locale?: Locale;
  /**
   * @zh 主题配置
   * @en Theme Configuration
   */
  theme?: ThemeConfig;
  /**
   * @zh 配置组件的默认尺寸，只会对支持`size`属性的组件生效。
   * @en Configure the default size of the component, which will only take effect for components that support the `size` property.
   * @defaultValue default
   */
  size?: "mini" | "small" | "medium" | "large";
  /**
   * @zh 全局组件类名前缀
   * @en Global ClassName prefix
   * @defaultValue arco
   */
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  children?: ReactNode;
}
