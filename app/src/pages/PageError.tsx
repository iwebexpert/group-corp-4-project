import React from 'react'
import Helmet from 'react-helmet'
import ContainerWrapper from './ContainerWrapper'

export default function PageError() {
  return (
    <ContainerWrapper>
      <Helmet>
        <title>Page Not Found (404)</title>
      </Helmet>

      <div>Page Not Found (error 404)</div>
    </ContainerWrapper>
    
  )
}
