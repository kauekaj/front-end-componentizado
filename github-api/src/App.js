import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { ResetCSS } from "./globals/resetCSS";

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>        
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>  
    </main>
  );
};

export default App;
