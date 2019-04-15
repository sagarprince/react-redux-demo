// Core
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';

type PostProps = {
    id: number;
    title: any;
    body: any;
}

const PostCard = (props: PostProps) => {
    return (
        <IonCard id={"post-" + props.id}>
            <IonCardHeader>
                <IonCardTitle>{props.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {props.body}
            </IonCardContent>
        </IonCard>
    );
}

export default PostCard;