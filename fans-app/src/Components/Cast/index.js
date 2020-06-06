import React, { Component } from 'react';
import { castsMovieAction } from '../../Redux/Actions/casts';
import { URL_IMG, IMG_SIZE_SMALL } from '../const'
import { CastContent, CastProfile, CastName, CastRole, ListCast } from './styles';
import { connect } from 'react-redux';

const Cast = ({cast}) => {
	if (cast) {
		return (
			<ListCast>
				{cast[0] ? cast[0].slice(0, 10).map(actor => (
					actor.profile_path ?
					<CastContent key ={actor.id}>
						<CastProfile src={URL_IMG + 'w185' + actor.profile_path} />
						<CastName>{actor.name}</CastName>
						<CastRole>{actor.role}</CastRole>
					</CastContent> :''
				)):''}
			</ListCast>
		);
	} else {
		return <div />;
	}
};

export default Cast;