import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';

// Import theme
import KpmgTheme from '../../globalstyles/kpmgTheme';

// Import styled dashboard
import { DashboardContainer } from './DashboardStyles';

// Import components
import Header from './components/Header';
import MultipleColorBar from './components/MultipleColorBar';
import CompanyHeadline from './components/CompanyHeadline';
import Navigation from './components/Navigation';
import Main from './scenes/Main';
import PhotoBox from '../../stories/PhotoBox/PhotoBox';

import { data } from '../../stories/PhotoBox/PhotoBox.stories';

class Dashboard extends Component {
  render() {
    return (
            <ThemeProvider theme={KpmgTheme}>
                <DashboardContainer>
                    <Header />
                    <MultipleColorBar />
                    <CompanyHeadline />
                    <Navigation />
                    <Main />
                    <PhotoBox data={data}/>
                </DashboardContainer>
            </ThemeProvider>
        )
    }
}

export default Dashboard;