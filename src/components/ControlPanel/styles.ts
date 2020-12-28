import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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

    .fast-moves {
      .div-line {
        border-bottom: 1px solid lightgray;
      }

      h3 {
        margin: 8px 0;
      }

      .fast-moves-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        button + button {
          margin-left: 10px;
        }
      }
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

          div {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 379px) {
    max-width: 375px;
    .panel-controller {
      width: 300px;
      margin-left: 20px;
      input {
        width: 290px;
      }
    }

    .field-table {
      table {
        width: 80%;
        margin: 0 0 40px 40px;
        tr {
          max-height: 21px;

          td {
            max-width: 79px;
            div {
              margin-right: -80px !important;
              width: 65px !important;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-width: 380px) and (max-width: 415px) {
    .panel-controller {
      margin-left: 35px;
      width: 320px;
      height: 470px;

      input {
        width: 310px;
      }
    }

    .field-table {
      table {
        width: 80%;
        margin: 0 0 40px 40px;
        tr {
          max-height: 31px;

          td {
            max-width: 69px;
            div {
              margin-right: -80px !important;
              width: 65px !important;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 770px) {
    display: flex;
    flex-direction: column;

    .panel-controller {
      margin-bottom: 80px;
    }

    .field-table {
      margin-left: 0;
    }
  }
`;
