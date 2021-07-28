import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid var(--shape);
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 2rem 2rem;
  margin-top: -6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 970px) {
    flex-direction: column;
    gap: 2rem;
  }

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

  div {
    h1 {
      font-size: 1.6rem;
    }

    ul {
      margin-top: 0.4rem;

      li {
        button {
          height: 2rem;
          padding: 0 1rem;
          border: 0;
          border-radius: 0.25rem;
          font-size: 0.9rem;
          transition: transform .2s ease-in-out;

          &:hover {
            font-size: 0.9rem;
            transform: scale(1.03);
          }
        }
      }
    }
  }
`;