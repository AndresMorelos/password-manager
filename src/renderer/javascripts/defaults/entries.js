export default {
  login: {
    type: 'login',
    title: '',
    website: '',
    username: '',
    password: '',
    email: '',
    note: '',
    otp: ''
  },
  note: {
    type: 'note',
    title: '',
    note: ''
  },
  card: {
    type: 'card',
    title: '',
    number: '',
    year: '',
    month: '',
    cvc: '',
    pin: '',
    name: ''
  },
  aws: {
    type: 'aws',
    name: undefined,
    access_key: undefined,
    secret_access_key: undefined,
    region: undefined,
    output: 'json',
    cli_timestamp_format: 'none',
    cli_follow_urlparam: true,
    ca_bundle: undefined,
    parameter_validation: true,
    tcp_keepalive: true,
    max_attempts: undefined,
    retry_mode: undefined
  }
}
