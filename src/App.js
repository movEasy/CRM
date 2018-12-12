import React, { Component } from 'react';

// Import global styles and themes
import GlobalStyles from './globalstyles/GlobalStyles';

// Import scenes
import Dashboard from './scenes/Dashboard/Dashboard';

class App extends Component {
	render() {
    	return (
      		<>
				<GlobalStyles />
				<Dashboard />
      		</>
    	);
	}
}

export default App;
