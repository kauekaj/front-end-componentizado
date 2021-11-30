import React from "react";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
    return (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
          >
              <S.WrapperTabList>
                  <S.WrapperTab>Repositories</S.WrapperTab>
                  <S.WrapperTab>Starred</S.WrapperTab>
              </S.WrapperTabList>
              <S.WrapperTabPanel>
                <RepositoryItem
                    name= "kauekaj"
                    linkToRepo= "https://github.com/kauekaj/kauekaj"
                    fullName= "kauekaj/kauekaj"
                />
              </S.WrapperTabPanel>    
              <S.WrapperTabPanel>
                <RepositoryItem      
                    name= "projeto-site"
                    linkToRepo= "https://github.com/kauekaj/projeto-site"
                    fullName= "kauekaj/projeto-site"
                />    
              </S.WrapperTabPanel>    
        </S.WrapperTabs>
    );
};

export default Repositories;