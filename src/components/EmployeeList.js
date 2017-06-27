import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import { ListView } from 'react-native';
import { ListItem } from './';

class EmployeeList extends Component {

    componentWillMount() {
        // console.log('before fetch in mount');
        this.props.employeeFetch();
        // console.log('after fetch in mount');
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        //this.props is still the old set of props, nextProps is the next set of props that this component will be
        //rendered with
        // console.log('before in receive');
        this.createDataSource(nextProps);
        // console.log('after in receive');
    }

    createDataSource( { employees } ) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        // console.log('render');
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
};

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    });

    return { employees };
};

export default connect(mapStateToProps, { employeeFetch })( EmployeeList );