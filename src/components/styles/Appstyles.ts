// src/components/styles/AppStyles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion'; // Se precisar de motion aqui para algum estilo, embora para a maioria não seja necessário

// Estilos para o container principal do conteúdo, sobreposto ao background
export const ContentContainer = styled.div`
	position: absolute;
    
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	text-align: center;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
`;

// Estilos para o conteúdo principal (título e botão)
export const MainContent = styled.main`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 900px;
	padding: 20px;
	position: relative;
`;

// Estilos para o título
export const Title = styled.h1`
	font-family: 'Lora', serif;
	font-size: 78px;
	font-weight: 700;
	line-height: 1.3;
	margin-bottom: 60px;
	color: white;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

	@media (max-width: 1024px) {
		font-size: 60px;
	}

	@media (max-width: 768px) {
		font-size: 48px;
		margin-bottom: 40px;
	}

	@media (max-width: 480px) {
		font-size: 38px;
	}
`;
export const Subtitle = styled.h2`
	font-family: 'Lora', serif;
	font-size: 28px;
	font-weight: 300;
	line-height: 1.3;
	margin-bottom: 20px;
	position: relative;
	bottom: 70px;
	color: white;
	text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	@media (max-width: 1024px) {
		font-size: 60px;
	}

	@media (max-width: 768px) {
		font-size: 48px;
		margin-bottom: 40px;
	}

	@media (max-width: 480px) {
		font-size: 38px;
	}
`;
// Estilos para o botão
export const StyledButton = styled.button`
	padding: 18px 40px;
	background-color: transparent;
	border: 2px solid rgb(4, 201, 250);
	border-radius: 50px;
	color: white;
	font-size: 22px;
	font-weight: 600;
	cursor: pointer;
	transition: background-color 0.4s ease, border-color 0.4s ease,
		transform 0.2s ease;

	&:hover {
		background-color:rgb(32, 28, 221);
		border-color:rgb(0, 4, 255);
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(8, 74, 255, 0.61);
	}

	&:active {
		transform: translateY(0);
		box-shadow: none;
	}
`;
