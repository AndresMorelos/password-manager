import React from 'react'
import Item from './item'

const Aws = ({ entry }) => {
  return (
    <div className="entry-details">
      <Item name="name" entry={entry} label="Profile Name" />
      <Item name="access_key" entry={entry} label="Access Key" />
      <Item
        name="secret_access_key"
        entry={entry}
        secure
        label="Secret Access Key"
      />
      <Item name="region" entry={entry} label="Region" />
      <Item name="output" entry={entry} label="Output" />
      <Item
        name="cli_timestamp_format"
        entry={entry}
        label="CLI Timestamp Format"
      />
      <Item
        name="cli_follow_urlparam"
        entry={entry}
        label="CLI Follow Urlparam"
      />
      <Item name="ca_bundle" entry={entry} label="CA Bundle" />
      <Item
        name="parameter_validation"
        entry={entry}
        label="Parameter Validation"
      />
      <Item name="tcp_keepalive" entry={entry} label="TCP Keepalive" />
      <Item name="max_attempts" entry={entry} label="Max Attempts" />
      <Item name="retry_mode" entry={entry} label="Retry Mode" />
    </div>
  )
}

export default Aws
