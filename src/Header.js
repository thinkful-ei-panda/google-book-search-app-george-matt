import React from 'react'
import Form from './Form'
import './Header.css'

export default function Header(props) {
	return (
		<div>
			<header data-testid='mainheader' className='header'>
				<h1>Google Books Search</h1>
				<Form handleSubmit={props.handleSubmit} />
			</header>
		</div>
	)
}
