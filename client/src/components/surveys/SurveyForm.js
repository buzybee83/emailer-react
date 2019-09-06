import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Icon } from 'react-materialize';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return _.map(formFields, ({ label, name, type }) => {
            return <Field key={name} datatype={type} label={label} id={name} name={name} component={SurveyField}  />
        });
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">New Survey</h4>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Button 
                        className="red"
                        waves="light" 
                        node="a" 
                        href="/surveys">
                        Cancel
                    </Button>
                    <Button
                        className="right"
                        waves="light"
                        type="submit">
                        Next
                        <Icon right>done</Icon>
                    </Button>
                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {}

    errors.recipients = validateEmails(values.recipients || '');

    _.each(formFields, ({ name }) => {
        if (!values[name]) errors[name] = 'You must provide a value';
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
