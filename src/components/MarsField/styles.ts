import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .panel-controller {
    background: lightblue;
    margin-right: 25px;

    input {
      width: 350px;
      margin-top: 50px;
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
