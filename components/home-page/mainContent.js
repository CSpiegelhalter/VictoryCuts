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
                <h2 className={classes.tit2}>Get started in 2 easy steps</h2>
                <div className={classes.containsection}>
                    <div className={classes.sections}>
                        <h3>Call for a quote</h3>
                        <div className={classes.icons}>
                            <Image src={quotation} alt='Call for quote' />
                        </div>
                    </div>
                    <div className={classes.vl}></div>
                    <div className={classes.sections}>
                        <h3>Recieve Service</h3>
                        <div className={classes.icons}>
                            <Image src={mower} alt='lawn mower' />
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className={classes.why}>
                    <h2 className={classes.head}>Our services:</h2>
                    <div className={classes.services}>
                        <ul className={classes.each}>
                            <li>Lawn Mowing</li>
                            <li>Landscaping</li>
                            <li>Lawn Aeration</li>
                            <li>Lawn Winterization</li>
                        </ul>
                        <ul className={classes.each}>
                            <li>Planting</li>
                            <li>Lawn Fertilizing</li>
                            <li>Seeding</li>
                            <li>Leaf Removal</li>
                        </ul>
                        <ul className={classes.each}>
                            <li>Raking Services</li>
                            <li>Top Soil/Fill Dirt</li>
                            <li>Weeding</li>
                            <li>Tree Trimming</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainContent;