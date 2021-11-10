import classes from './mainContent.module.css'

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
                            <img src={'../../quotation.webp'} alt='Call for quote' />
                        </div>
                    </div>
                    <div className={classes.vl}></div>
                    <div className={classes.sections}>
                        <h3>Recieve Service</h3>
                        <div className={classes.icons}>
                            <img src={'../../lawnmower.webp'} alt='lawn mower' />
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className={classes.why}>
                    <h2 className={classes.head}>Services we provide:</h2>
                    <div className={classes.contain}>
                        <div className={classes.services}>
                            <div className={classes.left}>
                                <img className={classes.examples} src={'../../lawn2.webp'} alt={'Lawn Mowing'} />
                                <img className={classes.responsive} src={'../../responsive-5/lawn2.webp'} alt={'Lawn Mowing'} />
                                <img className={classes.responsive1} src={'../../responsive/lawn2.webp'} alt={'Lawn Mowing'} />
                                <ul className={classes.each}>
                                    <li>Landscaping</li>
                                    <li>Planting</li>
                                    <li>Lawn Fertilizing</li>
                                    <li>Leaf Removal</li>
                                    <li>Area Prep</li>
                                </ul>
                                <img className={classes.examples} src={'../../hedges.webp'} alt={'Hedge Trimming'} />
                                <img className={classes.responsive} src={'../../responsive-5/hedges.webp'} alt={'Hedge Trimming'} />
                                <img className={classes.responsive1} src={'../../responsive/hedges.webp'} alt={'Hedge Trimming'} />
                            </div>


                            <div className={classes.right}>


                                <ul className={classes.each}>
                                    <li>Lawn Mowing</li>
                                    <li>Edging</li>
                                    <li>Lawn Aeration</li>
                                    <li>Hedge Trimming</li>
                                    <li>Fertilization</li>
                                </ul>

                                <img className={classes.examples} src={'../../landscaping.webp'} alt={'Landscaping'} />
                                <img className={classes.responsive1} src={'../../responsive/landscaping.webp'} alt={'Landscaping'} />
                                <img className={classes.responsive} src={'../../responsive-5/landscaping.webp'} alt={'Landscaping'} />

                                <ul className={classes.each}>
                                    <li>Weed-eating</li>
                                    <li>Raking Services</li>
                                    <li>Weeding</li>
                                    <li>Tree Trimming</li>
                                    <li>Basic Gardening</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default MainContent;