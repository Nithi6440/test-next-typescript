import React, { ReactElement } from "react";


type Props = {};

const login = ({}: Props) => {
  return <div>Login</div>;
};

export default login;

login.getLayout = function PageLayout(page: ReactElement) {
  console.log(page)
  return <>{page}</>;
};
