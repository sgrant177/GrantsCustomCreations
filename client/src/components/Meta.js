import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'GrantsCustomCreations',
  description: 'High quality, hand-crafted muskie lures',
  keywords: 'lures, fishing, muskie lures, fish, outdoors, bait, tackle, bait and tackle, grant, grants custom creations',
}

export default Meta
