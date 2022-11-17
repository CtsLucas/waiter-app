import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.375rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 0.375rem;
    }
  }
`;
