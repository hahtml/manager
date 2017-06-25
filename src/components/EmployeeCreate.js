import React, {Component} from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Button, Card, CardSection, Input } from './';
import { Picker, Text } from 'react-native';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate( { name, phone, shift: shift || 'Monday' } );
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Maolei"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone Number"
                        placeholder="222-222-2222"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>
                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value: value })}
                    >
                        <Picker.item label="Monday" value="Monday" />
                        <Picker.item label="Tuesday" value="Tuesday" />
                        <Picker.item label="Wednesday" value="Wednesday" />
                        <Picker.item label="Thursday" value="Thursday" />
                        <Picker.item label="Friday" value="Friday" />
                        <Picker.item label="Saturday" value="Saturday" />
                        <Picker.item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name: name,
        phone: phone,
        shift: shift
    }
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })( EmployeeCreate );