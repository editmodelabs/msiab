import { createContext, useState } from "react";

import useConstant from "use-constant";

const TabsState = createContext();
const Elements = createContext();

export default function Tabs({ state: outerState, children }) {
  const innerState = useState(0);
  const elements = useConstant(() => ({ tabs: 0, panels: 0 }));
  const state = outerState || innerState;

  return (
    <Elements.Provider value={elements}>
      <TabsState.Provider value={state}>{children}</TabsState.Provider>
    </Elements.Provider>
  );
}
