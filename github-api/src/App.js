import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";
import NoSearch from "./no-search";


const App = () => {
  const { githubState } = useGithub();
  return (
        <Layout>
          {githubState.hasUser ? 
          <div>
          {githubState.loading ? (
          <p>Loading</p>
          ) : (
            <div>
              <Profile />
              <Repositories />
            </div>
          )}    
          </div> : <NoSearch /> }
        </Layout>

  );
};

export default App;
