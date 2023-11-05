import styled from "styled-components";

export const Input = styled.input`
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.132);
  transition: all 0.15s;
  &:hover {
    background: #2b2b2b;
  }
  &:focus {
    background: #212121;
  }
  &::placeholder {
    color: rgb(191, 191, 191);
  }
`;

export const PrimaryBtn = styled.button`
  width: 7.5rem;
  border-radius: 5px;
  height: 2.4rem;
  font-size: 0.87rem;
  font-family: "Plus", sans-serif;
  background: #ead4ed;
  // cursor: pointer;
  color: #121212;
  transition: all 0.2s;
  // &::before {
  //   border-radius: 5px;
  //    height: 2.4rem;
  //    width: 7.5rem;
  //   content: "";
  //   border: 1px solid rgba(255, 255, 255, 0.276);
  //   position: absolute;
  //   margin: -0.4rem 0rem 0rem -1.2rem;
  // }
  &:hover {
    background: #ccb3cf;
  }

  // Media Queries
  @media (width >= 1600px) {
    width: 7.6rem;
    height: 2.5rem;
    font-size: 0.89rem;
  }
`;

export const SecondaryBtn = styled.button`
  position: relative;
  // cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.276);
  width: 7.5rem;
  border-radius: 5px;
  background-color: #121212;
  height: 2.4rem;
  transition: all 0.2s;
  font-size: 0.87rem;
  font-family: "Plus", sans-serif;
  // &::before {
  //   display: inline-block;
  //   border-radius: 5px;
  //    height: 2.4rem;
  //    width: 7.5rem;
  //   content: "";
  //   border: 1px solid rgba(255, 255, 255, 0.276);
  //   position: absolute;
  //   margin: -0.4rem 0rem 0rem -1.3rem;
  //   z-index: -1;
  // }
  &:hover {
    background-color: rgb(36, 36, 36);
  }
  // Media Queries
  @media (width >= 1600px) {
    width: 7.6rem;
    height: 2.5rem;
    font-size: 0.89rem;
  }
`;
