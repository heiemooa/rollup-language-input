import { ReactNode } from "react";
import { Locale } from "../_locale/interface";
export type ThemeConfig = Record<string, any>;
export type Components = {};
export interface ConfigProviderProps {
    components?: Components;
    locale?: Locale;
    theme?: ThemeConfig;
    size?: "mini" | "small" | "medium" | "large";
    prefixCls?: string;
    getPrefixCls?: (componentName: string, customPrefix?: string) => string;
    children?: ReactNode;
}
