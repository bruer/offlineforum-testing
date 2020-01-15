import React from "react";
import { mount } from "enzyme";
import CreateNewComment from "../components/CreateNewComment";

test("submit a comment", () => {
  const wrapper = mount(
    <CreateNewComment postId="abc" author="Bobby" updateComments={jest.fn()} />
  );
  wrapper
    .find("[name='comment']")
    .simulate("change", { target: { name: "comment", value: [] } });

  wrapper.find("[type='submit']").simulate("submit");
  expect(wrapper.state("comment")).toBe("");
});
