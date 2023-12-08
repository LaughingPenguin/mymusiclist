import React from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Login from "./loginView";

// Rendering test for text
describe("LoginText", () => {
  it("Renders the logo text", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pleaseLoginText = screen.getByText("mymusiclist");
    expect(pleaseLoginText).toBeInTheDocument();
  });
});

// Rendering test for text
describe("LoginText", () => {
  it("Renders the login text", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pleaseLoginText = screen.getByText("Please login");
    expect(pleaseLoginText).toBeInTheDocument();
  });
});

// Rendering test for text
describe("LoginText", () => {
  it("Renders the registration redirect text", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pleaseLoginText = screen.getByText("Don't have an account?");
    expect(pleaseLoginText).toBeInTheDocument();
  });
});

// Rendering test for text
describe("LoginText", () => {
  it("Renders the home redirect text", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const pleaseLoginText = screen.getByText("Back to");
    expect(pleaseLoginText).toBeInTheDocument();
  });
});

// Rendering test for input field
describe("InputField", () => {
  it("Renders the email input field", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const signInElement = screen.getByRole("textbox", {
      placeholder: "Email address",
    });
    expect(signInElement).toBeInTheDocument();
  });
});

// Rendering test for input field
describe("InputField", () => {
  it("Renders the password input field", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const signInElement = screen.getByRole("textbox", {
      placeholder: "Password",
    });
    expect(signInElement).toBeInTheDocument();
  });
});

// Link navigation test for redirection
describe("LinkNavigation", () => {
  test("Redirects to registration page", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole("link", { name: "Register here" });
    expect(linkElement).toHaveAttribute("href", "/signup");
  });
});

// User input test for form field
describe("UserInput", () => {
  test("User input into form field", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const inputElement = screen.getByRole("textbox", {
      placeholder: "Email address ",
    });
    await act(() => {
      userEvent.type(inputElement, "example@gmail.com");
    });
    expect(inputElement).toHaveValue("example@gmail.com");
  });
});
