/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, {FC} from 'react'
import {Switch, Route} from 'react-router-dom'
import {shallowEqual, useSelector} from 'react-redux'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {PrivateRoutes} from './PrivateRoutes'
import {Logout} from '../modules/auth'
import {ErrorsPage} from '../modules/errors/ErrorsPage'
import {RootState} from '../../setup'
import HomePage from './../pages/home/index'

const Routes: FC = () => {
  const isAuthorized = useSelector<RootState>(({auth}) => auth.user, shallowEqual)

  return (
    <Switch>
      {
        // !isAuthorized ? (
        // /*Render auth page when user at `/auth` and not authorized.*/
        // <Route>
        //   <AuthPage />
        // </Route>
        // ) : (
        // /*Otherwise redirect to root page (`/`)*/
        // <Redirect from='/auth' to='/' />
        // )
      }

      <Route path='/error' component={ErrorsPage} />
      <Route path='/logout' component={Logout} />

      {isAuthorized && (
        <MasterLayout>
          <PrivateRoutes />
        </MasterLayout>
      )}
      <Route path='/' component={HomePage} />
    </Switch>
  )
}

export {Routes}
