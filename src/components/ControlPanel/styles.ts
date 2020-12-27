import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .panel-controller {
    padding: 20px;
    max-width: 350px;
    background: lightblue;
    margin-right: 25px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 0px 50px 10px #00c897;

    h2 {
      font-weight: bold;
      margin-bottom: 10px;
    }

    div {
      p + p {
        color: #00c897;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }

    input {
      width: 350px;
      margin-top: 10px;
      margin-bottom: 15px;
    }

    button {
      width: 200px;
    }
  }

  .field-table {
    margin-left: 40px;

    table {
      width: 100%;
      border: 1px solid #45536c;

      tr {
        height: 80px;
        border: 1px solid #45536c;

        td {
          width: 120px;
          border: 1px solid #45536c;
        }
      }
    }
  }
`;
