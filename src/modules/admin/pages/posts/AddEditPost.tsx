import React, { Component } from 'react'
import { IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/react';

type Props = {
    open: boolean;
    onClose: any;
    onAddPost: any;
    success: any;
    error: any;
    isLoading: boolean;
}

var buttonStyle = {
    marginTop: '20px'
};

class AddEditPost extends Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showModal: props.open ? props.open : false,
            title: '',
            body: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.open !== prevProps.open) {
            console.log('TOGGLE MODAL - ' + this.props.open);
            this.setState(() => ({ showModal: this.props.open }))
        }

        if (this.props.success !== prevProps.success) {
            if (this.props.success !== null) {
                this.resetForm();
                this.close();
                setTimeout(() => {
                    alert(this.props.success.message);
                }, 500);
            }
        }

        if (this.props.error !== prevProps.error) {
            if (this.props.error !== null) {
                alert(this.props.error.message);
            }
        }
    }

    handleChange(event: any) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSave(event: any) {
        console.log(this.state);
        if (this.state.title.trim() !== '' && this.state.body.trim() !== '') {
            this.props.onAddPost({
                title: this.state.title,
                body: this.state.body
            });
        }
        event.preventDefault();
    }

    resetForm() {
        this.setState({
            title: '',
            body: ''
        });
    }

    close() {
        this.setState(() => ({ showModal: false }));
        this.props.onClose(false);
    }

    render() {
        return (
            <IonModal
                isOpen={this.state.showModal}
                onDidDismiss={() => this.close()}
            >
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonButton color="light" onClick={() => this.close()}>
                                <IonIcon name="arrow-back"></IonIcon>
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Add New Post</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent padding>
                    <form onSubmit={this.onSave}>
                        <IonItem>
                            <IonLabel position="stacked">Title</IonLabel>
                            <IonInput type="text" name="title" value={this.state.title} onInput={this.handleChange}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="stacked">Body</IonLabel>
                            <IonTextarea name="body" value={this.state.body} onInput={this.handleChange}></IonTextarea>
                        </IonItem>
                        <IonButtons style={buttonStyle}>
                            <IonButton color="primary" expand="full" fill="solid" type="submit" disabled={this.props.isLoading}>
                                SAVE
                            </IonButton>
                        </IonButtons>
                    </form>
                </IonContent>
            </IonModal>
        );
    }
}

export default AddEditPost;