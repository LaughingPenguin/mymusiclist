import React from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import SignUp from "./signupView";

// Rendering test for text
describe("SignUpText", () => {
  it("Renders the logo text", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const pleaseSignUpText = screen.getByText("mymusiclist");
    expect(pleaseSignUpText).toBeInTheDocument();
  });
});

// Rendering test for text
describe("SignUpText", () => {
  it("Renders the signup text", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const pleaseSignUpText = screen.getByText("Register for an account");
    expect(pleaseSignUpText).toBeInTheDocument();
  });
});

// Rendering test for text
describe("SignUpText", () => {
  it("Renders the login redirect text", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const pleaseSignUpText = screen.getByText("Already have an account?");
    expect(pleaseSignUpText).toBeInTheDocument();
  });
});

// Rendering test for text
describe("SignUpText", () => {
  it("Renders the home redirect text", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const pleaseSignUpText = screen.getByText("Back to");
    expect(pleaseSignUpText).toBeInTheDocument();
  });
});

// Rendering test for input field
describe("InputField", () => {
  it("Renders the username input field", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const signInElement = screen.getByPlaceholderText("Username");
    expect(signInElement).toBeInTheDocument();
  });
});

// Rendering test for input field
describe("InputField", () => {
  it("Renders the email input field", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const signInElement = screen.getByPlaceholderText("Email");
    expect(signInElement).toBeInTheDocument();
  });
});

// Rendering test for input field
describe("InputField", () => {
  it("Renders the password input field", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const signInElement = screen.getByPlaceholderText("Password");
    expect(signInElement).toBeInTheDocument();
  });
});

// Rendering test for input field
describe("InputField", () => {
  it("Renders the confirm-password input field", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const signInElement = screen.getByPlaceholderText("Confirm Password");
    expect(signInElement).toBeInTheDocument();
  });
});

// Link navigation test for redirection
describe("LinkNavigation", () => {
  test("Redirects to login page", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole("link", { name: "Login here" });
    expect(linkElement).toHaveAttribute("href", "/login");
  });
});

// User input test for form field
describe("UserInput", () => {
  test("User input into form field", async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const inputElement = screen.getByPlaceholderText("Username");
    await act(() => {
      userEvent.type(inputElement, "example");
    });
    expect(inputElement).toHaveValue("example");
  });
});

// Incorrect value test for form fields that are supposed to be matching
describe("IncorrectValue", () => {
  test("Value of password and cpassword do not match", async () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    const inputPassword = screen.getByPlaceholderText("Password");
    const inputCPassword = screen.getByPlaceholderText("Confirm Password");
    await act(() => {
      userEvent.type(inputPassword, "incorrectexample");
      userEvent.type(inputCPassword, "incorrectexample2");
    });
    expect(inputPassword.closest("input").value).not.toEqual(
      inputCPassword.closest("input").value
    );
  });
});
