import styled from 'styled-components';
import { breakpoints } from 'styleConfig/breakpoints';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${p => p.theme.colors.backdropBgColor};
`;

export const ModalWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  height: auto;
  padding: 10px;

  background-color: ${p => p.theme.colors.mainBgColor};
  color: ${p => p.theme.colors.mainTextColor};

  @media (${breakpoints.tablet}) {
    width: 600px;
    padding: 30px;
  }

  @media (${breakpoints.laptop}) {
    padding: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${p => p.theme.colors.accentBgColor};

  margin-bottom: 35px;
  padding-bottom: 25px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSize.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background-color: ${p => p.theme.colors.secondBgColor};
  color: ${p => p.theme.colors.secondTextColor};
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }
`;
