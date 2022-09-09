import { render, screen } from '@testing-library/react'
import App from './App'

test('renders a11y link', () => {
  render(<App />)
  const linkElement = screen.getByText(/a11y/i)
  expect(linkElement).toBeInTheDocument()
})
