import App from "../App";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {
  Router,
  Link,
  createHistory,
  createMemorySource,
  LocationProvider,
} from "@reach/router";
import "@testing-library/jest-dom/extend-expect";
import { ImageStoreContext, ImageSearchStore } from "../store";

function renderWithRouter(
  ui,
  { route = "/", history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(
      <LocationProvider history={history}>
        <ImageStoreContext.Provider value={new ImageSearchStore()}>
          {ui}
        </ImageStoreContext.Provider>
      </LocationProvider>
    ),
    history,
  };
}

test("Renders 100 search results when searching with mars query on page 3", async () => {
  const {
    container: appContainer,
    history: { navigate },
  } = renderWithRouter(<App />);

  expect(appContainer.innerHTML).toMatch("Please make a search 🔎");

  await navigate("/search/mars/3");

  const test = await waitFor(() => screen.findByTestId("image-grid"));
  expect(test.children).toHaveLength(100);
});
