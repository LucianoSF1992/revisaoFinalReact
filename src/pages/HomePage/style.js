import styled from "styled-components";

export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  justify-content: center;
  align-items: center;
  input,
  select {
    padding: 0.6em 2em;
    border: none;
    outline: none;
    color: rgb(255, 255, 255);
    background: #111;
    z-index: 0;
    border-radius: 10px;
    height: 40px;
  }
`;
export const WrapperList = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
  padding: 2%;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export const ContainCalendar = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 95vw;
  gap: 5px;
`;
export const BoxDay = styled.div`
  text-align: center;
  padding: 2%;
  min-height: 100px;
  border-radius: 5px;
  min-height: 200px;
  background-color: ${(props) => (props.color ? props.color : "gray")};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  img {
    width: 10px;
  }
  input {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
export const WrapperButton = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

// export const InputText = styled.input`
//   padding: 0.6em 2em;
//   border: none;
//   outline: none;
//   color: rgb(255, 255, 255);
//   background: #111;
//   z-index: 0;
//   border-radius: 10px;
// `;
// export const SelectDay = styled.select`
//   padding: 0.6em 2em;
//   border: none;
//   outline: none;
//   color: rgb(255, 255, 255);
//   background: #111;
//   z-index: 0;
//   border-radius: 10px;
// `;
