import { motion } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const Background = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: radial-gradient(circle at 30% 30%, #2563eb, transparent 40%),
		radial-gradient(circle at 70% 70%, rgba(6, 25, 196, 0.637), transparent 50%),
		linear-gradient(135deg, #0e0e1b, #12122b);
	filter: blur(0px);
	background-repeat: no-repeat;
	background-size: cover;
`;

const Content = styled.div`
	position: relative;
	z-index: 1; /* maior que o do background */
	color: white;
	padding: 2rem;
	text-align: center;
	user-select: none;
`;

export default function AnimatedBackground({ children }) {
	return (
		<Wrapper>
			<Background
				initial={{ scale: 1 }}
				animate={{ scale: 1.02 }}
				transition={{
					duration: 6,
					repeat: Infinity,
					repeatType: 'reverse',
					ease: 'easeInOut',
				}}
			/>
			<Content>{children}</Content>
		</Wrapper>
	);
}
