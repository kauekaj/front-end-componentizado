import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {

    const { githubState, getUserRepos } = useGithub();
    const [hasUserForSearchRepos, setUserForSearchRepos ] = useState(false)

    useEffect(() => {

        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
        }
        setUserForSearchRepos(githubState.repositories);
    }, [githubState.user.login]);


    return (

        <div>
            {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
          >
              <S.WrapperTabList>
                  <S.WrapperTab>Repositories</S.WrapperTab>
                  <S.WrapperTab>Starred</S.WrapperTab>
              </S.WrapperTabList>
              <S.WrapperTabPanel>
                  {githubState.repositories.map((item) =>( 
                    <RepositoryItem
                        key={item.id}
                        name= {item.name}
                        linkToRepo= {item.fullname}
                        fullName= {item.fullname}
                    />
                        ))}                   
              </S.WrapperTabPanel>    
              <S.WrapperTabPanel>
              {githubState.starred.map((item) =>( 
                    <RepositoryItem
                        key={item.id}
                        name= {item.name}
                        linkToRepo= {item.fullname}
                        fullName= {item.fullname}
                    />
                        ))}   
              </S.WrapperTabPanel>    
        </S.WrapperTabs>
        ) : (
            <div></div>
        )}
        </div>
    );
};

export default Repositories;