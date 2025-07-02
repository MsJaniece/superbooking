import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookingForm from '../BookingForm'

describe('BookingForm', () => {
  it('updates service when option selected', async () => {
    render(<BookingForm />)
    const select = screen.getByLabelText(/service/i) as HTMLSelectElement
    await userEvent.selectOptions(select, 'cut')
    expect(select.value).toBe('cut')
  })
})
