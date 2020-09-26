import React from 'react'
import Field from './field'
import SecureField from './secure'

const AWSprofile = ({ entry, validate, onChange }) => {
  return (
    <>
      <Field
        label="Name"
        name="name"
        validate={validate}
        entry={entry}
        onChange={onChange}
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
      <Field
        label="Region"
        name="region"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field
        label="Output"
        name="output"
        validate={validate}
        entry={entry}
        onChange={onChange}
        options={['json', 'table', 'text']}
      />
      <Field
        label="CLI Timestamp Format"
        name="cli_timestamp_format"
        validate={validate}
        entry={entry}
        onChange={onChange}
        options={['none', 'iso8601']}
      />
      <Field
        label="CLI Follow Urlparam"
        name="cli_follow_urlparam"
        validate={validate}
        entry={entry}
        onChange={onChange}
        options={[true, false]}
      />
      <Field
        label="CA Bundle"
        name="ca_bundle"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field
        label="Parameter Validation"
        name="parameter_validation"
        validate={validate}
        entry={entry}
        onChange={onChange}
        options={[true, false]}
      />
      <Field
        label="TCP Keepalive"
        name="tcp_keepalive"
        validate={validate}
        entry={entry}
        onChange={onChange}
        options={[true, false]}
      />
      <Field
        label="Max Attempts"
        name="max_attempts"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
      <Field
        label="Retry Mode"
        name="retry_mode"
        validate={validate}
        entry={entry}
        onChange={onChange}
      />
    </>
  )
}

export default AWSprofile
