import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	const { getByTestId } = render(<App />)
	const linkElement = getByTestId('app')
	expect(linkElement).toBeInTheDocument()
})
