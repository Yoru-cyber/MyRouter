import { PropsWithChildren, createContext, useContext } from "react";

const root: string = window.location.origin;
console.log("root", root);
export const rootContext = createContext(root);
function MyRouter({ children }: PropsWithChildren) {
  const context = useContext(rootContext);

  return (
    <>
      <rootContext.Provider value={context}>{children}</rootContext.Provider>
    </>
  );
}
export default MyRouter;
