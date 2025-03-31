import { screen, render } from "@testing-library/react";
import UserAccount from "../src/components/UserAccount";

describe("UserAccount", () => {
  it("should render user name", () => {
    render(<UserAccount user={{ id: 1, name: "Nitz" }} />);
    const name = screen.getByText(/Nitz/i);
    expect(name).toBeInTheDocument();
  });

  it("should not contain edit button for non admin", () => {
    render(<UserAccount user={{ id: 1, name: "Nitz" }} />);
    const editButton = screen.queryByRole("button");
    expect(editButton).not.toBeInTheDocument();
  });

  it("should contain edit button for admin", () => {
    render(<UserAccount user={{ id: 2, name: "Nitin", isAdmin: true }} />);
    const editButton = screen.queryByRole("button");
    expect(editButton).toBeInTheDocument();
    expect(editButton).toHaveTextContent(/Edit/i);
  });
});
