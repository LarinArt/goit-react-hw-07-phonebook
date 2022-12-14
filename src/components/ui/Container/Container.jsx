import PropTypes from 'prop-types';
import { ContainerWrapper, Title } from './Container.styled';

export const Container = ({ children, title }) => {
  return (
    <ContainerWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </ContainerWrapper>
  );
};

Container.prototype = {
  children: PropTypes.element,
  title: PropTypes.string,
};
