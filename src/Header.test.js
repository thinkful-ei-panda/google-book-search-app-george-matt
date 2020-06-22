import React from 'React'
import { render, getByTestId } from '@testing-library/react'
import Header from './Header'

describe('<Header />', () => {
	test('should render', () => {
		const { getByTestId } = render(<Header />)
		const linkElemenet = getByTestId('mainheader')
		expect(linkElemenet).toBeInTheDocument()
	})
})
