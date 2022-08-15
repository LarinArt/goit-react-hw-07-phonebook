import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div``;

export const GoBack = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;
  margin-bottom: 30px;

  border: none;
  background-color: #2b2b2b;
  color: ${p => p.theme.colors.secondTextColor};

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }
`;

export const PersonalData = styled.div`
  margin-bottom: 30px;
`;

export const Name = styled.h2`
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSize.xl};
  text-align: center;

  color: ${p => p.theme.colors.accentTextColor};

  padding: 15px;
  margin-bottom: 15px;
`;

export const Label = styled.span`
  color: ${p => p.theme.colors.accentTextColor};
  margin-right: 5px;
`;

export const Phone = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 49%;
  height: 30px;

  border: none;
  background-color: #2b2b2b;
  color: ${p => p.theme.colors.secondTextColor};

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }
`;

export const EditButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 49%;
  height: 30px;

  border: none;
  background-color: #2b2b2b;
  color: ${p => p.theme.colors.secondTextColor};

  cursor: pointer;
  transition: background-color ${p => p.theme.colors.mainAnimationHover};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accentBgColor};
  }
`;
