import React from 'react';
import {withRouter} from 'react-router-dom';
import Navigation from './../../containers/Navigation/Navigation';
import Footer from './../../components/Footer/Footer';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Navigation/>
             <main style={{width: "100%",}}>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>

    )
};

export default withRouter(Layout);