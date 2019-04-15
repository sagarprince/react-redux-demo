// Core
import React, { Fragment } from 'react';
import { IonItem } from '@ionic/react';

// Components
import PostCard from '../../../../components/post-card/PostCard';

const PostsList = (props: any) => {
    const items = props.posts.map((p: any) => (
        <IonItem key={p.id}>
            <PostCard
                id={p.id}
                title={p.title}
                body={p.body} />
        </IonItem>
    )
    );
    return (
        <Fragment>
            {items}
        </Fragment>
    );
}

export default PostsList;