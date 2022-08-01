import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";
describe("Greetings Component", () => {
  test("renders Hellow World as a text", () => {
    //Arrange
    render(<Greetings />);

    // Act
    //...nothing

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you if the button was not clicked", () => {
    //Arrange
    render(<Greetings />);
    //Act
    //...nothing

    //Assert
    const paragraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });
  test("renders 'Text Changed' if the button was clicked", () => {
    //   Arrange
    render(<Greetings />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.getByText("Text Changed");
    expect(outputElement).toBeInTheDocument();
  });
  test("renders 'Good to see you' not visible", () => {
    //Arrange
    render(<Greetings />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const Coutput = screen.queryByText("good to see you", { exact: false });
    expect(Coutput).toBeNull();
  });
});
