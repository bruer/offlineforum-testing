import React from "react";
import { mount } from "enzyme";
import CreateNewPost from "../components/CreateNewPost";

const wrapper = mount(<CreateNewPost author="Bobby" updatePosts={jest.fn()} />);

test("submit a post", () => {
  write("title", "my title");
  expect(wrapper.state("title")).toBe("my title");

  write("content", "this is the content");
  expect(wrapper.state("content")).toBe("this is the content");

  wrapper.find("[type='submit']").simulate("submit");
  expect(wrapper.state("title")).toBe("");
  expect(wrapper.state("content")).toBe("");
});

function write(n, v) {
  wrapper
    .find("[name='title']")
    .simulate("change", { target: { name: n, value: v } });
}
