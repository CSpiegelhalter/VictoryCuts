import classes from './mainContent.module.css'

function MainContent() {
    return(
        <section className={classes.about}>
            <p className={classes.p}>
                a div saying what we're about
            </p>
        </section>
    )
}

export default MainContent;