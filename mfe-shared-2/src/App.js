import React from "react";
import GetData from "./container/getData";
const App = ({ getUserDetail }) => {
  return (
    <>
      <h1>welcome to MFE shared-2 component</h1>
      <GetData getUserDetail={getUserDetail} />
    </>
  );
};
export default App;
