import { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "../pagess/Signin";
import Signup from "../pagess/Signup";
import Apppr from "../AppPr";

interface PrivateProps {
  component: React.ComponentType<Record<string, unknown>>;
}

const PrivateRoute: React.FC<PrivateProps> = ({ component: Component }) => {
  const signed = false;
  return signed ? <Component /> : <Signin />;
};

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Route exact path="/apppr" component={PrivateRoute.bind(null, { component: Apppr })} />
        <Route path="/" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route path="*" component={Signin} />
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
