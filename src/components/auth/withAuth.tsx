
function withAuth(Component: any) {
  const Auth = (props: any) => {
    return <Component {...props} />;
  };


  return Auth;
}

export default withAuth;