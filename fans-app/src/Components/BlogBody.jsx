import React from 'react'
import MediumClap from './MediumClap'
import '../assets/styles/components/BlogBody.scss'

const BlogBody = ({ info, images, developers }) => {
    return (
        <div className='blog__container'>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <div className='blog__left--space'>
                <a className='blog__left--anchor' href='/'>
                    Descripción
                </a>
                <p className='blog__left--description'>{info.description}</p>
                <MediumClap />
            </div>
            <div className='blog__center--space'>
                <p className='blog__center--title'>{info.title}</p>
                <p className='blog__center--subtitle'>{info.subtitle}</p>
                <img className='blog__center--image' src={images[0]} alt='Blog' />
                <p className='blog__center--description'>{info.body}</p>
                <div className='blog__center--clap'>
                    <MediumClap />
                </div>
            </div>
            <div className='blog__right--space'>
                <p className='blog__right--anchor' href='/'>
                    Desarrollador
                </p>
                {developers.map((l, i) => (
                    <p key={i} className='blog__right--description'>
                        {developers[i].length > 15
                            ? `${developers[i].substr(0, 12)}...`
                            : developers[i].substr(0, 15)}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default BlogBody
