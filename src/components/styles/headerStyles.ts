// src/components/styles/HeaderStyles.ts
import styled from 'styled-components';

// Estilos para o cabeçalho
export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 40px 60px;

	@media (max-width: 768px) {
		padding: 30px 20px;
	}
`;

// Estilos para o logo "D"
export const LogoD = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 2px solid rgb(0, 195, 255);
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-weight: 700;
	color:rgb(78, 190, 241);
	background-color: rgba(142, 45, 226, 0.1);
`;

// Estilos para a navegação
export const Nav = styled.nav`
	ul {
		list-style: none;
		display: flex;
		gap: 40px;
		margin: 0;
		padding: 0;
	}
	a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-size: 19px;
		font-weight: 500;
		transition: color 0.3s ease, transform 0.2s ease;

		&:hover {
			color: #8e2de2;
			transform: translateY(-2px);
		}
	}

	@media (max-width: 768px) {
		ul {
			gap: 20px;
		}
		a {
			font-size: 16px;
		}
	}
`;
