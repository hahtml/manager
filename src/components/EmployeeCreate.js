import React, {Component} from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { Button, Card, CardSection, Input } from './';

class EmployeeCreate extends Component {
    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Maolei"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone Number"
                        placeholder="222-222-2222"
                    />
                </CardSection>
                <CardSection>

                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
    }
}

export default connect(null, { employeeUpdate })( EmployeeCreate );