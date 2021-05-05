import styled, { keyframes } from "styled-components";

/* .loader {
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #3498db; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } */

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #26282f;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${Spin} 2s linear infinite;
  position: fixed;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
`;

export default Loader;
