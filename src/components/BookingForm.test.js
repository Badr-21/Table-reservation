import BookingForm from "./BookingForm";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Submit input should be enabled when date is not empty", () => {
   render(<BookingForm />);
   const buttonSubmit = screen.getByTestId("buttonSubmit");
   expect(buttonSubmit).toBeEnabled();
});

test("Select occasion should have Birthday as default value", () => {
   render(<BookingForm />);
   const SelectOccasion = screen.getByTestId("occasion");
   expect(SelectOccasion.value).toBe("Birthday");
});
