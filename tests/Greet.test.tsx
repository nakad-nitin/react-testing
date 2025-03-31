import { render, screen } from "@testing-library/react";
import Greet from "../src/components/Greet";

describe("Greet", () => {
  it("should render a heading when name is provided", () => {
    render(<Greet name="Nitz" />);

    const heading = screen.getByRole("heading");

    console.log(screen.debug(), heading);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Nitz/i);
  });

  it("should render a button when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Login/i);
  });
});
