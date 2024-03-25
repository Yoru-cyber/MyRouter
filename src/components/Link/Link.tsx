import { useContext } from "react";
import { rootContext } from "../MyRouter/My-Router";

interface LinkProps {
  path: string;
  children?: React.ReactNode;
  component?: React.FunctionComponent;
}
function Link(props: LinkProps) {
  const context = useContext(rootContext);
  const { path } = props;
  path ? null : console.error("Something went wrong");
  const root = context;
  let route: string;
  path[0] === "/" ? (route = path.slice(1)) : (route = path);
  return (
    <>
      <a href={root + "/" + route}> {props.children}</a>
      {window.location.pathname.includes(route) ? (
        <>
        {console.log("route")}
          {props.component ? <props.component /> : <p>No component</p>}
        </>
      ) : (
        console.log("No match")
      )}
    </>
  );
}
export default Link;
