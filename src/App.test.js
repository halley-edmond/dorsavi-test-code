import { render, screen,fireEvent ,waitFor} from '@testing-library/react';
import App from './App';

test('app able to find record by pet name', async () => {
  //it should return garfield
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

test('app able to find record by owner name', async () => {
  //it should return garfield
  render(<App />);
  const searchField = screen.getByPlaceholderText(/Type name of pets or the owner/i);
  const submitButton = screen.getByText(/Go!/i)


  fireEvent.change(searchField, { target: { value: 'Bob' } })

  fireEvent.click(submitButton,  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))

  await waitFor(() => screen.getByText(/Bob/i))

});

test('app able to find record by pet type', async () => {
  //it should return garfield
  render(<App />);
  const PetTypeDropdown = screen.getByLabelText(/Pet Type/i);

  fireEvent.change(PetTypeDropdown, {
    target: { value: "Dog" },
  });

  const submitButton = screen.getByText(/Go!/i)
  fireEvent.click(submitButton,  new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }));

  await waitFor(() => screen.getByText(/Jame/i))
});
