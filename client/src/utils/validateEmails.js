// eslint-disable-next-line
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
    const invalidEmailsArr = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => EMAIL_REGEX.test(email) === false);

    if (invalidEmailsArr.length) {
        return `The following ${invalidEmailsArr.length > 1? 'emails are' : 'email is'} invalid: ${invalidEmailsArr}`;
    }

    return;

};