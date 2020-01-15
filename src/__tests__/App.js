import React from "react";
import { render, mount } from "enzyme";
import App from "../components/App";

test("renders the app", () => {
  render(<App />);
});

test("change persona", () => {
  const wrapper = mount(<App />);

  wrapper.find("select").simulate("change", { target: { value: "Zac" } });
  expect(wrapper.state("currentPersona")).toBe("Zac");

  wrapper.find("select").simulate("change", { target: { value: "Esmeralda" } });
  expect(wrapper.state("currentPersona")).toBe("Esmeralda");
  
  wrapper.find("select").simulate("change", { target: { value: "Morgana" } });
  expect(wrapper.state("currentPersona")).toBe("Morgana");
});

test("change page", () => {
  const wrapper = mount(<App />);

  wrapper.find("button").simulate("click");
  expect(wrapper.state("currentPage")).toBe("bot");

  wrapper.find("button").simulate("click");
  expect(wrapper.state("currentPage")).toBe("home");
});
