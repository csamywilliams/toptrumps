import styled from 'styled-components';

const DashboardStyled = styled.section`
  .dashboard {
    &__pack {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    &__view {
      &--hidden {
        display: none;
      }
    }
  }
`;

export default DashboardStyled;
