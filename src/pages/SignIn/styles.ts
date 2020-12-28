import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  overflow-y: none;

  @media only screen and (min-width: 376px) and (max-width: 415px) {
    max-width: 415px;
    height: 1130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 375px) {
    max-width: 380px;
    height: 1180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 500px) and (max-width: 770px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  place-content: center;

  width: 100%;
  max-width: 650px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 150px;
  h3 {
    text-align: center;
  }

  animation: ${appearFromLeft} 1s;

  button {
    width: 370px;
  }

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 30px;
  }

  h3 {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 375px) {
    button,
    input {
      width: 310px;
    }
  }

  @media only screen and (min-width: 380px) and (max-width: 415px) {
    button,
    input {
      width: 350px;
    }
  }
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 45px;
  background: linear-gradient(45deg, #00c897 35%, #45536c);
  color: #242e40;
  place-content: center;
  width: 100%;
  height: 100%;

  div {
    padding: 0 40px;

    h1,
    h2 {
      margin: 15px 0;
    }

    p {
      margin-left: 15px;
    }
  }

  @media only screen and (max-width: 770px) {
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-bottom: 50px;
    }
  }
`;
