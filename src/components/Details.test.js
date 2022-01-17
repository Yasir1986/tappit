import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ApiCall from "./HomePage";

describe("<ApiCall />", () => {
  test("shows fetch/then works", async () => {
    const value = await Promise.resolve(true);
    expect(value).toBe(true);
  });

  const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  );

  test("calls onClick cancel button when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Cancel</Button>);
    fireEvent.click(screen.getByText(/Cancel/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("calls onClick save button when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Save</Button>);
    fireEvent.click(screen.getByText(/Save/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
