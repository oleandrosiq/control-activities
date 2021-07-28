import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 6rem;
  padding: 0 2rem 4rem;

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
        padding-right: 1rem;
      }

      button {
        height: 2.5rem;
        padding: 0 2rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.25rem;

        transition: filter .2s ease-in-out;

        &:hover {
          filter: brightness(0.8);
        }
      }

      @media (max-width: 650px) {
        button {
          padding: 0 1rem;
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

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 1rem;     
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: 0;
    color: var(--white);
    position: relative;

    transition: all .2s ease-in-out;

    &:hover {
      &:after {
        content: '';
        width: 100%;
        height: 1px;
        background: var(--violet);
        position: absolute;
        left: 0;
        bottom: -2px;
      }
    }
  }
`;