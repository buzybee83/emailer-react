import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-materialize';
import { fetchSurveys } from '../../actions';


class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(({_id, title, body, dateSent, yes, no }) => {
            return (
                <Card 
                    className="purple darken-4"
                    textClassName="white-text"
                    title={title}
                    actions={[<a href className="white-text">Yes: {yes}</a>, <a href className="white-text">No: {no}</a>]}
                    key={_id}>
                    <p>
                        {body}
                    </p>
                    <p className="right">
                        Sent On:  {new Date(dateSent).toLocaleDateString()}
                    </p>
                </Card>
            );
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={12}>
                        {this.renderSurveys()}
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);