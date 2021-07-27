import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 6rem;
  padding-bottom: 4rem;

  > div {
    border: 1px solid var(--violet);
    border-radius: 0.25rem;
    padding: 0 2rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      
      h1 {
        font-size: 1.3rem;
      }

      button {
        height: 2.5rem;
        padding: 0 2rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.25rem;

        transition: all .2s ease-in-out;

        &:hover {
          transform: scale(1.06);
          filter: brightness(0.8);
        }

        &.completed {
          background: var(--green);
          color: var(--white);
        }

        &.canceled {
          background: var(--red);
          color: var(--white);
        }

        &.pending {
          background: var(--secondary);
          color: var(--icons);
        }
      }
    }

    p {
      color: var(--text);
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;

      span {
        color: var(--support);

        strong {
          color: var(--violet);
          margin-left: 0.5rem;
        }
      }
    }

    & + div {
      margin-top: 1.3rem;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: 0;
    color: var(--white);
  }
`;