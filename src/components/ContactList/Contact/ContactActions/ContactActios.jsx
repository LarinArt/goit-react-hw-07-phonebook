import { ButtonWrapper, Button, StyledLink } from './ContactActions.styled';

export const ContactActios = ({ onClick, state, icon, linkIcon, path }) => {
  return (
    <ButtonWrapper>
      <Button type="button" onClick={onClick}>
        {icon}
      </Button>
      <StyledLink to={path} state={state}>
        {linkIcon}
      </StyledLink>
    </ButtonWrapper>
  );
};
