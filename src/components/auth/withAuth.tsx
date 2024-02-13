import { NextComponentType } from "next";

function withAuth(Component: NextComponentType) {
  const Auth = (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };


  return Auth;
}

export default withAuth;