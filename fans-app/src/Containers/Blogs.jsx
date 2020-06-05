import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useQuery } from 'react-apollo'
import { GET_BLOGS_NAMES } from '../queries/index'

import Footer from '../Components/Footer'
import Card from '../Components/Card'

import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import withAuth from '../routes/withAuth'

const Blogs = () => {
    const classes = useStyles()

    const [names, setNames] = useState([])
    const [images, setImages] = useState([])
    const [ids, setIds] = useState([])
    const mountedRef = useRef(true)

    const { loading } = useQuery(GET_BLOGS_NAMES, {
        onCompleted: (data) => {
            let names = []
            let images = []
            let ids = []
            for (const key in data.getSortedBlogs) {
                names.push(data.getSortedBlogs[key].name)
                images.push(data.getSortedBlogs[key].images)
                ids.push(data.getSortedBlogs[key].id)
            }
            if (!mountedRef.current) return null

            setNames(names)
            setImages(images)
            setIds(ids)
        },
    })
    useEffect(() => {
        return () => {
            mountedRef.current = false
        }
    }, [])
    if (loading)
        return (
            <div className={classes.root}>
                <CircularProgress className={classes.progress} />
            </div>
        )

    // if (blog == null) return null
    return (
        <>
            <Container>
                <CardsContainer>
                    {names.map((l, i) => (
                        <Link key={ids[i]} to={`/blogs/${ids[i]}`}>
                            <Card title={names[i]} img={images[i]} />
                        </Link>
                    ))}
                    <Link key={0} to={`/blog/add`}>
                        <Card
                            title={'Add Blog'}
                            img={'https://cdn2.iconfinder.com/data/icons/transparent-round-icons/512/add.png'}
                        />
                    </Link>
                </CardsContainer>
            </Container>
            <Footer />
        </>
    )
}
const Container = styled.div`
    background-color: #162447;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`

const CardsContainer = styled.div`
    z-index: 0;
    width: 100%;
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const useStyles = makeStyles(() => ({
    root: {
        background: '#162447',
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

export default withAuth((session) => session && session.getCurrentUser)(Blogs)
