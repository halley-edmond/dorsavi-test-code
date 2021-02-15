import { render, screen,fireEvent ,waitFor} from '@testing-library/react';
import App from './App';

test('app able to find record by pet name', async () => {
  //it shoukd return garfield
  render(<App />);
  const searchField = screen.getByPlaceholderText(/Type name of pets or the owner/i);
  const submitButton = screen.getByText(/Go!/i)


  fireEvent.change(searchField, { target: { value: 'Garfield' } })

  fireEvent.click(submitButton,  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))

  await waitFor(() => screen.getByText(/Garfield/i))

});
