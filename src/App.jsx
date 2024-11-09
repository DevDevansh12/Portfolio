import React from "react";
import Header from "./Components/Header";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <>
      <div className="App text-white">
        <div className="py-4 m-auto max-w-4xl">
          <Header />
          <Profile />
        </div>
      </div>
    </>
  );
};

export default App;
