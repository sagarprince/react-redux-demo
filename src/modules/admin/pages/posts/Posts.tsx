/*** This on Container component */

// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Ionic Components
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonIcon, IonMenuButton, IonContent, IonList, IonSpinner } from '@ionic/react';

// Store Async Actions
import { getPosts } from '../../../../store/posts/actions';

// Presentation Components
import PostsList from './PostsList';
import AddEditPostContainer from './AddEditPostContainer';
import Spinner from '../../../../components/spinner/Spinner';

type PostsProps = {
    posts: Array<any>;
    isLoading: boolean;
    getPosts: any;
};

type PostsState = {
    openAddEditDialog: boolean;
};

class Posts extends Component<PostsProps, PostsState> {
    constructor(props: PostsProps) {
        super(props);
        this.state = {
            openAddEditDialog: false
        }
    }

    componentDidMount() {
        this.props.getPosts();
    }

    onModalClose() {
        this.setState({
            openAddEditDialog: false
        });
    }

    render() {
        return (
            <Fragment>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Posts</IonTitle>
                        <IonButtons slot="end">
                            <IonButton icon-only onClick={() => this.setState(() => ({ openAddEditDialog: true }))}>
                                <IonIcon slot="icon-only" name="add"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <Spinner show={this.props.isLoading} />
                    <IonList>
                        <PostsList posts={this.props.posts} />
                    </IonList>
                </IonContent>
                <AddEditPostContainer open={this.state.openAddEditDialog} onClose={() => this.onModalClose()} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        posts: state.posts.entities,
        isLoading: state.posts.loading
    };
};

const mapDispatchToProps = { getPosts: getPosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts);