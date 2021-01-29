import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 1, post: 'Hi', likes: 12 },
        { id: 2, post: 'How are you?', likes: 5 },
    ],
}

test('new post should be added', () => {

    let action = addPostActionCreator('Hello World')
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('new post text will be correct', () => {
    let action = addPostActionCreator('Hello World')
    let newState = profileReducer(state, action);
    expect(newState.posts[0].post).toBe('Hello World');
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});