import styled from 'styled-components';

export const Container = styled.header`
  div {
    max-width: 1020px;
    margin: 0 auto;
    padding: 1rem 2rem 9rem;
    display: flex;
    align-items: center;
    justify-content: space-between; 

    @media (max-width: 550px) {
      flex-direction: column;
      gap: 2rem;
    }

    h2 {
      color: var(--white);
    }

    button {
      font-size: 1rem;
      color: #fff;
      background: var(--violet);
      border-radius: 0.25rem;
      border: 0;
      padding: 0 2rem;
      height: 3rem;

      transition: filter .2s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;