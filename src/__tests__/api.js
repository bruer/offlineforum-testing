import * as api from "../api";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

test("should get user from localStorage", () => {
  const persona = "Steffe";
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
});

test("create, store and fetch posts", () => {
  const create = (title, content, author) => api.createPostObject(title, content, author);
  const store = post => api.storePostObject([post, ...fetch()]);
  const fetch = () => api.fetchAllPosts();

  expect(fetch()).toHaveLength(0);
  expect(fetch()).toBeInstanceOf(Array);
  expect(fetch()).toEqual(expect.arrayContaining([]));

  store(create("hej", "hej då", "Al"));
  // store(create("hej", "hej då", "My"));

  expect(fetch()).toHaveLength(1);
});
