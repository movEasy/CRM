import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	
	@font-face {
		font-family: 'Roboto', sans-serif;
		src: url('https://fonts.googleapis.com/css?family=Roboto');

	}

	html {
		box-sizing: border-box;
		${'' /* Setting the overall font size to px probhibits the users ability to zoom in or out. Therefore, the root font size should be a percentage so the
				user can zoom in or out on the page. If we set font-size to 100% it will be 16px, but we want 10px. So we go 10/16 = 62.50%.
		*/}
		font-size: 62.5%;

		${'' /* ORDER: Base + typography > general layout + grid > page layout > components */}

		@media (max-width: 56.25em) {
			font-size: 56.25%;
		}

		@media (max-width: 37.5em) {
			font-size: 50%;
		}

		@media (min-width: 112.5em) {
			font-size: 75%;
		}
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		background-color: #eef2f3 rgba(238, 242, 243, 0.2);
		line-height: 2;
        font-family: 'Roboto', sans-serif;
		font-weight: normal;
		font-style: normal;

	}
	#app {
		height: 100vh;
	}
	a {
		text-decoration: none;
		color: #393939;
	}
`;

export default GlobalStyle;