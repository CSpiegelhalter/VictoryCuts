import Image from 'next/image';
import classes from './steps.module.css'
import quote from '../../public//quotation.webp'
import mower from '../../public/lawnmower.webp'


function Steps() {

    return (
        <section className={classes.about}>
            <div className={classes.gg}></div>
            <h1 className={classes.tit}>
                Comprehensive lawn service in Pensacola
            </h1>
            <div className={classes.line}></div>
            <div className={classes.start}>
                <h2 className={classes.tit2}>Get started in 2 easy steps</h2>
                <div className={classes.containsection}>
                    <div className={classes.sections}>
                        <h3>Call for a quote</h3>
                        <div className={classes.icons}>
                            <Image
                                width={'150px'}
                                height={'150px'}
                                src={quote}
                                alt='Call for quote' />
                        </div>
                    </div>
                    <div className={classes.vl}></div>
                    <div className={classes.sections}>
                        <h3>Recieve Service</h3>
                        <div className={classes.icons}>
                            <Image
                                src={mower}
                                width={'150px'}
                                height={'150px'}
                                alt='lawn mower' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Steps;