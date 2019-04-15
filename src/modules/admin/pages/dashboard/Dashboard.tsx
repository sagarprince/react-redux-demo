// Core
import React, { Component, Fragment } from 'react';

// Ionic Components
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonIcon, IonMenuButton, IonContent } from '@ionic/react';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Dashboard</IonTitle>
                        <IonButtons slot="end">
                            <IonButton icon-only>
                                <IonIcon slot="icon-only" name="more"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                </IonContent>
            </Fragment>
        );
    }
}

export default Dashboard;