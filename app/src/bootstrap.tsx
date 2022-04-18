/// <reference path="./type.d.ts" />
import React from 'react'
import ReactDOM from 'react-dom'
import ThemeContext from './contexts/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

import Layout from 'components/Layout'
import PageEquipment from 'pages/PageEquipment'
import PageEquipmentItem from 'pages/PageEquipmentItem'
import PageAbout from 'pages/PageAbout'
import PageFilial from 'pages/PageFilial'
import PageFilialForm from 'pages/PageFilialForm'
import PageLogout from 'pages/PageLogout'
import PageError from 'pages/PageError'
import AuthProvider from 'services/auth/AuthProvider'
import AuthRequire from 'services/auth/AuthRequire'


ReactDOM.render(
  <Provider store={store}>
    <ThemeContext>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PageAbout />} />
              <Route
                path="/equipment"
                element={
                  <AuthRequire redirectTo="/login">
                    <PageEquipment />
                  </AuthRequire>
                }
              />
              <Route
                path="/equipment/:id"
                element={
                    <PageEquipmentItem />
                }
              />
              <Route
                path="/equipment/:id/action/:action"
                element={
                    <PageEquipmentItem />
                }
              />
              <Route path="/filial" element={<PageFilial />} />
              <Route path="/filial-form" element={<PageFilialForm />} />
              <Route path="/logout" element={<PageLogout />} />
              <Route path="*" element={<PageError />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeContext>
  </Provider>,
  document.querySelector('#root'),
)
