import classes from './mainContent.module.css'
import Image from 'next/image';
import mower from '../images/lawnmower.png'
import quotation from '../images/quotation.png'

function MainContent() {
    return (
        <section className={classes.about}>
            <div className={classes.gg}></div>
            <h1 className={classes.tit}>
                The very best lawn care service in Pensacola.
            </h1>
            <div className={classes.line}></div>
            <div className={classes.start}>
                <h2 className={classes.tit}>Get started in 2 easy steps</h2>
                <div className={classes.containsection}>
                    <div className={classes.sections}>
                        <h3>Call for a quote</h3>
                        <div className={classes.icons}>
                            <Image src={quotation} alt='Call for quote' />
                        </div>
                    </div>
                    <div className={classes.sections}>
                        <h3>Recieve Service</h3>
                        <div className={classes.icons}>
                            <Image src={mower} alt='lawn mower' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainContent;