import React from 'react'

interface SingleProps {
    params: { id: string }
}

const Single: React.FC<SingleProps> = ({ params }) => {
  return (
    <div>Single {params.id}</div>
  )
}

export default Single