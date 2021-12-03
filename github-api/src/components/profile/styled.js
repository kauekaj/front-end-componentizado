import styled from "styled-components";

export const Wrapper = styled.div`    

display: flex;
align-items: flex-start;

@media(max-width: 700px) {
    flex-direction: column;
    position: relative;
    align-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
`;

export const WrapperBox = styled.div`    

padding: 5px 50px 5px 5px;
border: 1px solid #ccc;
box-shadow: 1px 2px #ccc;
border-radius: 8px;
width: 100%;

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

`;

export const WrapperInfoUser = styled.div`    

display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
height: 200px;
margin-left: 8px;
h1 {
    font-size: 32px;
    font-weight: bold;
}

h3 {
    font-size: 18px;
    font-weight: bold;
}

h4 {
    font-size: 16px;
    font-weight: bold;
}
`;

export const WrapperStatusCount = styled.div`    

display: flex;
align-items: flex-start;
div {
    margin: 8px;
    text-align: center;
}
`;

export const WrapperUserGeneric = styled.div`    

display: flex;
align-items: center;
margin-top: 8px;

h3 {
    margin-right: 8px;
}
a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
    
}
`;

export const WrapperImage = styled.img`    

border-radius: 50%;
width: 200px;
margin: 8px;
`;

