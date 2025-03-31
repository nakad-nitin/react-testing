import UserList from "../src/components/UserList";
import { screen, render } from "@testing-library/react";

describe("UserList", () => {
  it("should render user list", () => {
    const users = [
      { id: 1, name: "Nitz" },
      { id: 2, name: "Nitin", isAdmin: true },
    ];
    render(<UserList users={users} />);
    const userList = screen.getByRole("list");
    expect(userList).toBeInTheDocument();
  });

  it("should render user names", () => {
    const users = [
      { id: 1, name: "Nitz" },
      { id: 2, name: "Nitin", isAdmin: true },
    ];
    render(<UserList users={users} />);
    const userName1 = screen.getByText(/Nitz/i);
    const userName2 = screen.getByText(/Nitin/i);
    expect(userName1).toBeInTheDocument();
    expect(userName2).toBeInTheDocument();
  });

  it("should have links for each user", () => {
    const users = [
      { id: 1, name: "Nitz" },
      { id: 2, name: "Nitin", isAdmin: true },
    ];
    render(<UserList users={users} />);
    users.forEach((user) => {
      const userLink = screen.getByRole("link", { name: user.name });
      expect(userLink).toBeInTheDocument();
      expect(userLink).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
