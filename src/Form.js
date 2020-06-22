import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filter: 'full',
			maxResults: 20,
			printType: 'ALL',
			q: '',
		}
	}

	filterChange = (value) => {
		this.setState({ filter: value })
	}
	printTypeChange = (value) => {
		this.setState({
			printType: value,
		})
	}
	textChange = (value, event) => {
		this.setState({ q: value })
	}

	render() {
		return (
			<form
				className='main-form'
				onSubmit={(event) =>
					this.props.handleSubmit(event, { ...this.state })
				}
			>
				<div className='search-controls'>
					<label htmlFor='form-title'>Search: </label>
					<input
						name='form-title'
						value={this.state.q}
						placeholder='text'
						onChange={(e) => this.textChange(e.target.value, e)}
						onFocus={(e) => (e.target.value = null)}
					/>
					<button type='submit'>Submit</button>
				</div>
				<div className='filter-controls'>
					<div>
						<label>Print Type:</label>
						<select
							id='print-type'
							name='print-type'
							value={this.state.printType}
							onChange={(e) => this.printTypeChange(e.target.value)}
						>
							<option value='ALL'>ALL</option>
							<option value='BOOKS' name='books'>
								Books
							</option>
							<option value='MAGAZINES' name='magazines'>
								Magazines
							</option>
						</select>
					</div>

					<div>
						<label>Book Type:</label>
						<select
							id='book-type'
							name='book-type'
							value={this.state.filter}
							onChange={(e) => this.filterChange(e.target.value)}
						>
							<option name='full' value='full'>
								No Filter
							</option>
							<option name='free-ebooks' value='free-ebooks'>
								Free Ebooks
							</option>
							<option name='paid-ebooks' value='paid-ebooks'>
								Paid Ebooks
							</option>
						</select>
					</div>
				</div>
			</form>
		)
	}
}
