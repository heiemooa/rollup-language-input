import React, { useState } from "react";
import { ConfigProvider } from "@emooa/ui";
import zhCN from "@emooa/ui/esm/_locale/zh-CN";
// import enUS from '@emooa/ui/esm/_locale/en-US';

const App: React.FC = () => {
  const [i18n, setI18n] = useState(zhCN);
  return (
    <>
      <ConfigProvider locale={i18n}>
        <div>Demo</div>
      </ConfigProvider>
    </>
  );
};

export default App;
