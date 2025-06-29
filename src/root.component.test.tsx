import { render } from "@testing-library/react";
import { App } from "./frontend/routes/App";
import { MemoryRouter } from "react-router-dom";

describe("App component", () => {
  it("should be in the document", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/agenda"]}>
        <App />
      </MemoryRouter>
    );

    expect(getByText(/Ordenar/i)).toBeInTheDocument();
  });
});
