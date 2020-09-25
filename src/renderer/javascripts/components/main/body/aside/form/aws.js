import React from 'react'
import Field from './field'
import SecureField from './secure'
import TagField from './tag'


const AWSprofile = ({ entry, validate, onChange, onTagsChange }) => {
    return (
      <>
        <Field
          label="Name"
          name="name"
          validate={validate}
          entry={entry}
          onChange={onChange}
          maxLength="40"
        />
        <Field
          label="Access Key"
          name="access_key"
          validate={validate}
          entry={entry}
          onChange={onChange}
        />
        <SecureField
          label="Secret Access Key"
          name="secret_access_key"
          validate={validate}
          entry={entry}
          onChange={onChange}
        />
      </>
    )
  }
  
  export default AWSprofile