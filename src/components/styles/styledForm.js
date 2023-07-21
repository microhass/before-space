import styled from 'styled-components';

const BookForm = styled.form`
  background-color: #f5f5f5;
  padding: 1rem 2rem 10vh;
  margin: 0 1rem;
  max-width: 1000px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  h3 {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    opacity: 0.6;
  }

  div {
    display: flex;
    gap: 3%;
  }

  input {
    padding: 10px;
    border: 1px solid aliceblue;
    outline: none;
    background-color: aliceblue;
    width: 35%;
    border-radius: 4px;

    &:focus {
      border: 1px solid #0290ff;
    }

    &::placeholder {
      color: #0082ca;
    }
  }

  button {
    background-color: #0290ff;
    color: #fff;
    text-transform: uppercase;
    font-size: 11px;
    padding: 6px 18px;
    border-radius: 3px;
    width: 18%;
  }

  @media (min-width: 1000px) {
    padding: 1rem 5rem 10vh;
    margin: 0 auto;
  }
`;

export default BookForm;
