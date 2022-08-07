import { css } from 'styled-components';

const Navigation = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	${Sticky}
`;

const Sticky = css`
	position: fixed !important;
	background-color: white;
	border-bottom: 1px solid rgba(0, 0, 0, 0.11);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.11);
	transition: all 0.6s ease-in-out;
	color: black;
`;

//

const RingVariant = (radius, stroke = '10') => css`
	position: absolute;
	border-radius: 50%;
	height: ${radius * 2}px;
	width: ${radius * 2}px;
	border: ${stroke}px solid rgba(0, 0, 0, 0.5);
`;
