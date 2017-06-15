import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { LoginForm, EmployeeList } from './components';

const RouterComponent = () => {
        return (
            <Router sceneStyle={{ paddingTop: 65 }}>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" />
                </Scene>
            </Router>
        )
};

export default RouterComponent;