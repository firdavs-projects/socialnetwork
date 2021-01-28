import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => {
            dispatch(addPostActionCreator(post));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer