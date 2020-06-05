import React from 'react'

import { useQuery } from 'react-apollo'
import { GET_CURRENT_USER } from '../queries'

import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const withSession = (Component) => (props) => {
    const classes = useStyles()
    const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
        onCompleted: (data) => {},
    })

    if (loading)
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.progress} />
            </div>
        )

    return <Component {...props} refetch={refetch} session={data} />
}

const useStyles = makeStyles(() => ({
    root: {
        background: '#1f4068',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
    },
    progress: {
        color: 'white',
    },
}))

export default withSession
