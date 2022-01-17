import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ApiCall from "./HomePage";

describe("<ApiCall />", () => {
  test("shows async / await works", async () => {
    const value = await Promise.resolve(true);
    expect(value).toBe(true);
  });

  test("display Name, Enabled, Valid, Authorised, Palindrome text", () => {
    render(<ApiCall />);

    expect(screen.getByTestId("Name")).toHaveTextContent(
      "NameEnabledValidAuthorisedPalindrome"
    );
  });
});
