
/** @jest-environment jsdom */
import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import ActionBar from '../ActionBar';
import renderWithQueryClient from '../../../../util/tests/renderWithQueryClient';

const renderElement = () => {
  renderWithQueryClient(<ActionBar handleSort={() => { }}
  searchValue=""
  setValue={() => { }}
  setSelectedAuthor={() => { }}
  selectedAuthor="" />);
}

describe("New Post Button",  () => {

  it("is rendered correctly", async () => {

    renderElement();
  
  const button = await screen.findByRole("link", {name: /add new post/i});
  expect(button).toBeInTheDocument()
  })

  it("Navigates to /new", async () => {
    renderElement();

    const button = await screen.findByRole("link", {name: /add new post/i});

    expect(button).toHaveAttribute("href", "/new")

  } )
})
