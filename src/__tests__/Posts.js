import React from "react";
import { mount } from "enzyme";
import Posts from "../components/Posts";

test("remove post", () => {
  localStorage.setItem(
    "posts",
    JSON.stringify([
      { title: "", content: "", id: "abc", author: "Bobby", date: "" }
    ])
  );
  const wrapper = mount(<Posts currentPersona="Bobby" />);
  expect(wrapper.state().posts).toHaveLength(1);

  wrapper.find("button").simulate("click");
  expect(wrapper.state().posts).toHaveLength(0);
});
