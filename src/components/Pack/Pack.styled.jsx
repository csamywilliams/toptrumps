import styled from 'styled-components';

const PackStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid #3fa7d6;
  padding: 2rem;
  cursor: pointer;
  background: white;

  .pack {
    &__cover {
      width: 50%;
    }
  }
`;

export default PackStyled;
