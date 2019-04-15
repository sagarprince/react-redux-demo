// Core
import React from 'react';
import { withRouter } from 'react-router-dom'

// Types
import { MenuItem } from '../../types';

// Ionic Components
import { IonIcon, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';

// Styles
import styles from './Menu.module.css';

const pages: Array<MenuItem> = [
    {
        title: 'Dashboard', path: '/dashboard', icon: 'analytics'
    },
    {
        title: 'Products', path: '/products', icon: 'cart'
    },
    {
        title: 'Posts', path: '/posts', icon: 'contacts'
    }
];

const Menu: React.SFC<any> = ({ history }) => {

    function menuItems() {
        return pages.map((p: MenuItem) => (
            <IonMenuToggle key={p.title} auto-hide="false">
                <IonItem button onClick={() => history.push(p.path)}>
                    <IonIcon slot="start" name={p.icon}></IonIcon>
                    <IonLabel>
                        {p.title}
                    </IonLabel>
                </IonItem>
            </IonMenuToggle>
        ));
    }

    return (
        <IonMenu contentId="main">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="outer-content">
                <IonList class={styles.menu_list}>
                    {menuItems()}
                </IonList>
            </IonContent>
        </IonMenu>
    );

}

export default withRouter(Menu);