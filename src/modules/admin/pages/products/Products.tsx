// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// Store Actions
import { ProductsActions } from '../../../../store/products/actions';

// Ionic Components
import { IonHeader, IonToolbar, IonButtons, IonTitle, IonButton, IonIcon, IonMenuButton, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

import ProductsList from './ProductsList';

type Props = {
    addProduct: any
};

type State = {};

class Products extends Component<Props, State> {
    id: number = 1;

    constructor(props: Props) {
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.state = {}
    }

    addProduct() {
        this.props.addProduct({
            id: this.id,
            name: 'Product ' + this.id,
        });
        this.id = this.id + 1;
    }

    render() {
        return (
            <Fragment>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Products</IonTitle>
                        <IonButtons slot="end">
                            <IonButton icon-only onClick={this.addProduct}>
                                <IonIcon slot="icon-only" name="add"></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <ProductsList />
                    </IonList>
                </IonContent>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addProduct: (payload: any) => dispatch(new ProductsActions().addProduct(payload))
    };
}

export default connect(null, mapDispatchToProps)(Products);