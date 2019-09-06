import React from 'react';
import { TextInput, Textarea } from 'react-materialize';

export default ({ input, label, datatype, meta: { error, touched} }) => {
    switch (datatype) {
        case 'text-area':
            return (
                <div className="input-field">
                    <Textarea 
                        label={label} 
                        s={6}
                        m={8}
                        l={12}
                        {...input}  
                    >
                        <span className="helper-text red-text" error={error} success="">{touched && error}</span>
                    </Textarea>
                </div>
            );
        default:
            return (
                <div className="input-field">
                    <TextInput 
                        validate
                        label={label} 
                        {...input}  
                    >
                        <span className="helper-text red-text" error={error} success="">{touched && error}</span>
                    </TextInput>
                </div>
            );
    }
};