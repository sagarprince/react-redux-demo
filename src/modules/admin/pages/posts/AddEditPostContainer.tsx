import { connect } from 'react-redux';
import { createPost } from '../../../../store/posts/actions';
import AddEditPost from './AddEditPost';

const mapStateToProps = (state: any) => {
    return {
        success: state.posts.crud.success,
        error: state.posts.crud.error,
        isLoading: state.posts.crud.loading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddPost: (post: any) => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddEditPost);