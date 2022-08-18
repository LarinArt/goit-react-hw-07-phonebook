import { useDispatch } from 'react-redux';
import { Input } from 'components/ui/input';
import { Label, Text } from './Filter.styled';
import { changeFilter } from 'store/contacts-slice';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFieldFilter = e => {
    const value = e.currentTarget.value;
    dispatch(changeFilter(value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" onChange={changeFieldFilter} name="filter" />
    </Label>
  );
};

export default Filter;
