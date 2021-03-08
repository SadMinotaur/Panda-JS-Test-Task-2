import styled from "styled-components";

const Styles = {
  Footer: styled.footer`
    position: fixed;
    bottom: 5px;
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
  `,
  FilterDiv: styled.div`
    margin: 10px 0 0 0;
    display: flex;
    padding: 0 0 0 10px;
  `,
  FilterInput: styled.input`
    margin: 0 0 0 5px;
    border: 0;
    background-color: honeydew;
  `,
  Table: styled.div`
    display: flex;
    padding: 10px;
  `,
  Column: styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 5px 0 0;
  `,
  ColumnName: styled.div`
    width: 190px;
    padding: 5px;
    height: 30px;
    border-radius: 5px;
    margin: 0 0 10px 0;
    background-color: aliceblue;
    line-height: 30px;
  `,
  Cell: styled.div`
    border-radius: 2px;
    border: 0;
    width: 190px;
    padding: 5px;
    height: 40px;
    background-color: honeydew;
  `,
  Page: styled.div`
    width: 30px;
    height: 30px;
    background-color: aliceblue;
    border-radius: 2px;
    line-height: 30px;
    margin: 0 10px 0 0;
  `,
};
export default Styles;
