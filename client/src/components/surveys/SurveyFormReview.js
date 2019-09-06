import _ from 'lodash';
import React from 'react';
import { Button, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    return (
        <div className="container">
            <h5>Please confirm your entries.</h5>
            {reviewFields}
            <div style={{marginTop: '16px'}}>
                <Button
                    className="yellow darken-3"
                    onClick={onCancel}
                >
                    Back
                </Button>
                <Button
                    className="right"
                    onClick={() => submitSurvey(formValues, history)}
                >
                    Send Survey 
                    <Icon right>send</Icon>
                </Button>
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));