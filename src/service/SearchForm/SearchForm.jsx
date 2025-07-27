import { useState } from 'react';
import { Form, Input, Button } from './SearchForm.styled';

const  SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Пошук фільму..."
        value={query}
        onChange={handleChange}
      />
      <Button type="submit">Пошук</Button>
    </Form>
  );
}

export default SearchForm