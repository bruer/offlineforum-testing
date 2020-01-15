import React from "react";
import { mount } from "enzyme";
import Comments from "../components/Comments";

test("remove comment", () => {
  localStorage.setItem(
    "comments",
    JSON.stringify([
      { comment: "", id: "abc", postId: "def", author: "Bobby", date: "" }
    ])
  );
  const wrapper = mount(<Comments postId="def" currentPersona="Bobby" />);
  expect(wrapper.state().comments).toHaveLength(1);

  wrapper.find("button").simulate("click");
  expect(wrapper.state().comments).toHaveLength(0);
});
