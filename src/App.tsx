// src/App.tsx
import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';

// Importando os componentes de estilo dos novos arquivos
import {
	ContentContainer,
	MainContent,
	Title,
	StyledButton,
} from './components/styles/AppStyles';
import { Header, LogoD, Nav } from './components/styles/HeaderStyles';



function App() {
	return (
		<div
			style={{
				position: 'relative',
				overflowY: 'hidden',
				overflowX: 'hidden',
			}}>
			<AnimatedBackground />

			<ContentContainer>
				<Header>
					<LogoD>D</LogoD>
					<Nav>
						<ul>
							<li>
								<a href="#">Início</a>
							</li>
							<li>
								<a href="#">Sobre</a>
							</li>
							<li>
								<a href="#">Projetos</a>
							</li>
							<li>
								<a href="#">Contato</a>
							</li>
						</ul>
					</Nav>
				</Header>

				<MainContent>
					<Title>
						Construo experiências <br /> digitais interativas.
					</Title>
					<StyledButton>Veja meu trabalho</StyledButton>
				</MainContent>
			</ContentContainer>
		</div>
	);
}

export default App;
