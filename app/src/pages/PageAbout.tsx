import { Typography } from '@mui/material'
import React from 'react'
import Helmet from 'react-helmet'
import ContainerWrapper from './ContainerWrapper'

export default function PageAbout() {
  return (
    <ContainerWrapper>
      <Helmet>
        <title>О приложении</title>
      </Helmet>

      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        О приложении
      </Typography>
      <Typography variant="body2">
        Учебный проект &laquo;Приложение сбора, хранения и предоставлнения данных&raquo;
      </Typography>
    </ContainerWrapper>
  )
}
