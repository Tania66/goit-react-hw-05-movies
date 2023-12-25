import { useState } from 'react';
import {
  SearchFormStyled,
  StyledButton,
  StyledInput,
} from './SearchForm.styled';

export const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query.trim()) return alert('Can not be empty');
    onSearch(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onClick={handleSubmit}>
      <StyledButton type="submit">
        <span>Search</span>
      </StyledButton>

      <StyledInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={handleInput}
      />
    </SearchFormStyled>
  );
};
