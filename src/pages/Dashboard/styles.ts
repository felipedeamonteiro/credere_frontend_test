import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 950px;

  @media only screen and (max-width: 375px) {
    height: 1650px;
  }

  @media only screen and (min-width: 380px) and (max-width: 770px) {
    height: 1550px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 17px;
  height: 780px;
  padding: 0 50px;

  .dashboard-divs {
    margin-top: -77px;

    .instructions {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;

      .inst-1 {
        strong {
          color: #00c897;
        }
      }

      .inst-2 {
        margin-left: 150px;

        strong {
          color: #00c897;
        }

        h3 > ul {
          color: #00c897;
        }
      }
    }
  }

  @media only screen and (max-width: 379px) {
    .dashboard-divs {
      .instructions {
        display: flex;
        margin-bottom: 126px;
        padding: 8px 8px;
      }
    }
  }

  @media only screen and (min-width: 380px) and (max-width: 415px) {
    .dashboard-divs {
      .instructions {
        display: flex;
        margin-bottom: 65px;
        padding: 0 8px;
      }
    }
  }

  @media only screen and (max-width: 770px) {
    .dashboard-divs {
      display: flex;
      flex-direction: column;

      .instructions {
        height: 450px;
        margin-top: 90px;
        display: flex;
        flex-direction: column;
        .inst-1 {
          margin-left: 50px;
        }
        .inst-2 {
          margin: 20px 0 0 50px;
        }
      }
    }
  }
`;
