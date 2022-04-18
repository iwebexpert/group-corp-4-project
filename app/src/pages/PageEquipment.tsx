import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Helmet from 'react-helmet'

import Copyright from 'components/Copyright'
import DrillingEquipmentTableContainer from 'containers/DrillingEquipmentTableContainer'
import DrillingEquipmentFormContainer from 'containers/DrillingEquipmentFormContainer'

export default function PageEquipment() {
  return (
    <>
      <Helmet>
        <title>Заявка на оборудование</title>
      </Helmet>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                // height: 240,
              }}
            >
              <DrillingEquipmentFormContainer />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <DrillingEquipmentTableContainer />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
  )
}
