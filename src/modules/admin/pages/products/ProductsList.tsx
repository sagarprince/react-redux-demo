// Core
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { IonItem, IonLabel } from '@ionic/react';

const mapStateToProps = (state: any) => {
    return { products: state.products.entities };
};

const ProductsList = (props: any) => {
    const items = props.products.map((p: any) => (
        <IonItem key={p.id}>
            <IonLabel>{p.name}</IonLabel>
        </IonItem>
    )
    );
    return (
        <Fragment>
            {items}
        </Fragment>
    );
}

export default connect(mapStateToProps)(ProductsList);