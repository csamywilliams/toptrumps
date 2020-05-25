import styled from 'styled-components';

const CardStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid yellow;

	.card {
		&__fact {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: 25vw;
			border: 1px solid blue;
			background: white;
			padding: 1rem;
			cursor: pointer;
		}

		&__key {
			flex: 1;
			text-transform: uppercase;
		}

		&__row {
			margin: 1rem;
		}

		&__title {
			text-transform: uppercase;
			font-weight: 700;
		}

		&__value {
			flex: 1;
		}
	}
`;

export default CardStyled;
