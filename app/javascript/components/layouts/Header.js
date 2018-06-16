import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '1em',
    borderBottom: '3px solid #dde2a4'
  },
  flex: {
    flex: 1,
  },
  headerLink: {
    textDecoration: 'none',
    color: '#33281ae0'
  },
  header: {
    backgroundColor: '#fcfcf7',
  },
}

const Header = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.header}>
        <Toolbar>
          <a href="/" className={classes.headerLink}>
            <Typography variant='title' color='inherit' className={classes.flex}>
              Applied Conservation
            </Typography>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
