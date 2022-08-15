import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Icon = styled(AiOutlineLoading3Quarters)`
  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  width: 50px;
  height: 50px;
  color: #0084ff;

  animation-name: spiner;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
