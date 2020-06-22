import React, { Component } from 'react'
import './List.css'

export default function List(props) {
	const list = props.books.map((item, i) => {
		const authors = item.authors
			? item.authors.join(' and ')
			: 'No Author(s) on file'
		return (
			<div className='list-item' key={i}>
				<header>
					<h2>{item.title}</h2>
				</header>
				<div className='content'>
					<img src={item.imageLink} />

					<div className='description'>
						<p>
							{`Author(s): 
							${authors}`}
						</p>
						<p>Price: {item.price}</p>
						<p>{item.description}</p>
					</div>
				</div>
			</div>
		)
	})

	return <div className='list'>{list}</div>
}
