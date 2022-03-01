import styled from 'styled-components';

export const AppContainer = styled.div`
`;

export const FormComponent = styled.div`
  background-color: #fff;
  padding: 16px;
  //border-bottom: 1px solid #DADFE3;
  // position: fixed;
  // z-index: 1000;
  width: 100%;
  form {
    display: flex;
    flex-direction: row;
    border-radius: 4px;
    border: solid 1px #d5d8da;
    background-color: #fff;
    input {
      padding: 6px 13px;
      border: none;
      width: 100%;
      height: 40px;
    }
    .search-button {
      padding-right: 16px;
      padding-top: 5px;
      width: 10%;
    }
    button {
      border: none;
      background-color: #fff;
    }
    button span {
      display: none;
    }
    input:focus {
    outline: 0;
    box-shadow: 0px 0px 5px rgb(2 184 117 / 60%);
    }
  }
  button .mobile-icon-search::before {
  content: "\f2a4";
  display: inline-block;
  font-family: "glyphs";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  text-decoration: inherit;
  text-rendering: optimizeLegibility;
  text-transform: none;
  height: 20px;
  width: 20px;
  background-image: url('/search-icon.svg');
  background-size: 24px;
  background-repeat: no-repeat;
  }
`;
