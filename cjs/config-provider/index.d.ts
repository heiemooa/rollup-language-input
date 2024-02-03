import { ConfigProviderProps } from "./interface";
import { ConfigContext } from "./context";
declare function ConfigProvider(props: ConfigProviderProps): any;
declare namespace ConfigProvider {
    var ConfigContext: any;
}
export default ConfigProvider;
declare const ConfigConsumer: any;
export { ConfigContext, ConfigConsumer };
