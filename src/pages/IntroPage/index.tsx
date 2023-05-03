import React from "react";
import * as Styled from "./index.styles";
import GoogleLoginButton from "./components/GoogleLoginButton";
import GoogleLoginButton2 from "./components/GoogleLonginButton2";

const IntroPage = () => {
  return (
    <Styled.BodyContainer>
      <Styled.TitleContainer>
        <Styled.SubTitle>싸피인을 위한</Styled.SubTitle>
        <Styled.Title>CustomGPT</Styled.Title>
      </Styled.TitleContainer>
      <Styled.LoginBox>
        {/*<GoogleLoginButton />*/}
        <GoogleLoginButton2/>
      </Styled.LoginBox>
    </Styled.BodyContainer>
  );
};

export default IntroPage;
