import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";


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
          </div> : <div>Nenhum usuário pesquisado</div>}
        </Layout>

  );
};

export default App;
