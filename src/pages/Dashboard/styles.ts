import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 17px;
  height: 780px;

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
`;
