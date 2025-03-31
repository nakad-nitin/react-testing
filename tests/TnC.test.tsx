import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("Terms & Conditions", () => {
  it("should render terms & condition with header, checkbox and button", () => {
    render(<TermsAndConditions />);

    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(/Terms.*Conditions/i);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should enable button, when checkbox checked", async () => {
    render(<TermsAndConditions />);

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const user = userEvent.setup();
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();
  });
});
