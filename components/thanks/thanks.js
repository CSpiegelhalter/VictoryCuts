import classes from './thanks.module.css';


function ThankYou() {
  return (
    <section className={classes.thanks}>
      <div className={classes.contain}>
        <p className={classes.content}>Thank you! You have submitted your request.</p>
        <img className={classes.content} src={'../../thumbs-up.png'} alt={'Thumbs up'} />
        <p className={classes.content}>We will get back with you ASAP!</p>
      </div>
    </section>
  );
}

export default ThankYou;
