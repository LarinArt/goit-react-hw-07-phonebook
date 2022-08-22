import styled from 'styled-components';

export const ContactDetailWrapper = styled.div`
  min-width: 300px;
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
