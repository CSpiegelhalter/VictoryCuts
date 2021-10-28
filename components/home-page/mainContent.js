import classes from './mainContent.module.css'

function MainContent() {
    return(
        <section className={classes.about}>
            <h1 className={classes.tit}>
                The very best lawn care service in Pensacola.
            </h1>
            
            <div className={classes.start}>
                <h2 className={classes.tit}>Get started in 2 easy stepped</h2>
                <div>
                    <h3>Call for a quote</h3>
                </div>
            </div>
        </section>
    )
}

export default MainContent;