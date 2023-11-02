import React from 'react'

const ErrorPage = ({ error }) => {
  return (
    <div>
      <h1 className='text-pink-700 p-5'>{error.data && error.data.status_message ? <div>{error.data.status_message}</div> : null}
      </h1>
    </div>
  )
}

export default ErrorPage
