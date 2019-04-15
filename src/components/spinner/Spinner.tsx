// Core
import React from 'react';
import { IonSpinner } from '@ionic/react';

// Styles
import styles from './Spinner.module.css';

type SpinnerProps = {
    show: boolean;
}

const Spinner = (props: SpinnerProps) => {
    if (props.show) {
        return (
            <div className={styles.container}>
                <IonSpinner class={styles.spinner} color="secondary" name="crescent"></IonSpinner>
            </div>
        );
    }
    return null;
}

export default Spinner;