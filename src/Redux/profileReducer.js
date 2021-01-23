const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    posts: [
        { id: 1, post: 'Hi', likes: 12 },
        { id: 2, post: 'How are you?', likes: 5 },
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                post: state.newPostText,
                likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state

        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export default profileReducer