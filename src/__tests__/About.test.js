import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../src/components/About'; // Adjust the import path as needed

test("renders a default image when no image prop is provided", () => {
  render(<About />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src.endsWith("https://via.placeholder.com/215")).toBe(true);
});

test("renders an image when the image prop is provided", () => {
  const customImage = "https://example.com/custom-image.png"; // Provide a custom image URL
  render(<About image={customImage} />);
  const img = screen.queryByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toBe(customImage);
});

test("renders a <p> element with the about text", () => {
  const aboutText = "About this blog"; // Provide the about text
  render(<About about={aboutText} />);
  const p = screen.getByText(aboutText);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

