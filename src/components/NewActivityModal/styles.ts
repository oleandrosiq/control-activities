import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Form = styled.form`
  position: relative;  

  h2 {
    color: var(--violet);
  }

  input {
    width: 100%;
    height: 3rem;
    margin: 1rem 0;
    border-radius: 0.25rem;
    border: 0;
    padding-left: 1rem;
    font-size: 1rem;
  }

  textarea {
    width: 100%;
    max-height: 9rem;
    min-height: 3rem;
    resize: vertical;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  button {
    width: 100%;
    height: 3rem;
    background: var(--violet);
    border: 0ch;
    border-radius: 0.25rem;
    color: var(--white);
    font-weight: bold;
    font-size: 1rem;
    margin-top: 1rem;

    transition: filter .2s ease-in-out; 

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
