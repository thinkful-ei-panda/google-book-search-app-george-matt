import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import './App.css'

/**
 * GET:
 *    "filter": "full",
      "maxResults": 10,
      "printType": "ALL",
      "q": "henry"
 */

/**
 * "id": "CthMAAAAMAAJ",
 * "volumeInfo": {
        "title": "A Brief History of Bishop Henry Funck and Other Funk Pioneers, and a Complete Genealogical Family Register, with Biographies of Their Descendants from the Earliest Available Records to the Present Time",
        "authors": [
          "Abraham James Fretz"
        ],
        "description": "A genealogy of the descendants of Henry Funck born in Europe. He immigrated to America in 1719 and settled at Indian Creek, Franconia Township, Montgomery County, Pennsylvania where he died in 1760. He married Anne Meyer.",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=CthMAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=CthMAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
      },
    "saleInfo": {
      "retailPrice": {
          "amount": 10.99,
          "currencyCode": "USD"
        },
    }
 */

class App extends Component {
	state = { books: [] }

	addBooks(bookList) {
		console.log(bookList)
		const list = bookList.map((item) => {
			return {
				id: item.id,
				price:
					item.saleInfo.saleability === 'FOR_SALE'
						? item.saleInfo.retailPrice.amount
						: 'FREE',
				authors: item.volumeInfo.authors,
				title: item.volumeInfo.title,
				description: item.volumeInfo.description,
				imageLink: item.volumeInfo.imageLinks.thumbnail,
			}
		})

		this.setState({
			books: list,
		})
	}

	handleSubmit = (event, filter) => {
		event.preventDefault()
		const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${filter.q}&filter=${filter.filter}&printType=${filter.printType}&maxResults=${filter.maxResults}`
		const options = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}

		fetch(BASE_URL, options)
			.then((res) => {
				if (res.ok) {
					return res.json()
				} else {
					throw new Error(
						'Something went wrong, please try again later'
					)
				}
			})
			.then((responseData) => this.addBooks(responseData.items))
			.catch((error) => {
				this.setState({ error: 'No Books or Magazines found' })
			})
		this.setState({ error: null })
	}
	render() {
		console.log(this.state.books)
		const error = this.state.error ? (
			<div className='error'>{this.state.error}</div>
		) : (
			''
		)
		return (
			<div data-testid='app' className='App'>
				<Header handleSubmit={this.handleSubmit} />
				{error}
				<List books={this.state.books} />
			</div>
		)
	}
}

export default App
