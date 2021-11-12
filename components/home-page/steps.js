import classes from './steps.module.css'


function Steps() {

    return (
        <section className={classes.about}>
            <div className={classes.gg}></div>
            <div className={classes.anotherHeader}>
            <h1 className={classes.tit}>
                The very best lawn care service in Pensacola.
            </h1>
            </div>
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
        </section>
    )
}

export default Steps;