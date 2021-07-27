import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: -6rem;

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;

    li {
      strong {
        font-size: 1.3rem;
        color: var(--white);
      }

      p {
        font-size: 1.1rem;
        color: var(--violet);
      }
    }
  }
`;