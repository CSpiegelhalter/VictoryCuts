import { Fragment } from 'react';
import dynamic from 'next/dynamic'

function Thanks() {
    const ThankYou = dynamic(() => import("../components/thanks/thanks"));
    return(
        <Fragment>
            <ThankYou />
        </Fragment>
    )
}

export default Thanks