import React, {useEffect} from 'react'
import Helmet from 'react-helmet'
import { authService } from 'services/auth/authService'
import ContainerWrapper from './ContainerWrapper'

export default function PageLogout() {
  useEffect(() => {
    authService.logout()
    window.location.href = '/'
  })

  return (
    <ContainerWrapper>
      <Helmet>
        <title>Выход</title>
      </Helmet>

      <div>Выход</div>
    </ContainerWrapper>
  )
}
