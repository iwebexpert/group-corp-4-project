import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import InfoIcon from '@mui/icons-material/Info'
import ConstructionIcon from '@mui/icons-material/Construction'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload'
import LogoutIcon from '@mui/icons-material/Logout'
import SummarizeIcon from '@mui/icons-material/Summarize';

import { Link } from 'react-router-dom'
import { authService } from '../services/auth/authService'

const privileges = authService.currentPrivileges

export const mainListItems = (
  <>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="О приложении" />
    </ListItemButton>
    <ListItemButton component={Link} to="/equipment">
      <ListItemIcon>
        <ConstructionIcon />
      </ListItemIcon>
      <ListItemText primary="Оборудование" />
    </ListItemButton>
    {privileges.isAvailablePageFilial && (
      <ListItemButton component={Link} to="/filial">
        <ListItemIcon>
          <AssuredWorkloadIcon />
        </ListItemIcon>
        <ListItemText primary="Филиалы" />
      </ListItemButton>
    )}
    {privileges.isAvailablePageFilialForm && (
      <ListItemButton component={Link} to="/filial-form">
        <ListItemIcon>
          <SummarizeIcon />
        </ListItemIcon>
        <ListItemText primary="Форма отчета" />
      </ListItemButton>
    )}
  </>
)

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Информация
    </ListSubheader>
    <ListItemButton component={Link} to="/logout">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Выход" />
    </ListItemButton>
  </>
)
