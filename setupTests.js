import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { screen } from "@testing-library/react";

  afterEach(() => {
    console.log(screen.debug());
  });