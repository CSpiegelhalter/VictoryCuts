import classes from './aboutus.module.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Aboutus() {
    return(
        <section>
            <div className={classes.start}>
                <h1 className={classes.title}>About our company</h1>
                <div className={classes.line}></div>
                <img className={classes.us} src={'../../stock.jpg'} alt={'Victor (Company owner)'} />
                <img className={classes.us1} src={'../../stock1.jpg'} alt={'Victor (Company owner)'} />
                <p className={classes.about}>Being one of the top vacation destinations in the United States, Pensacola, FL is absolutely filled with exciting things to do. If you’re looking for an adventure you could take a trip to the beach, go jet skiing, or go even go parasailing. If your stomach is craving mouthwatering food Five Sisters Blues Café, Ruby Slipper Café, McGuire’s Irish Pub, or Taqueria El Asador are always there to satisfy. Or if you just want to relax you could go fishing, walk through the Naval Aviation Museum, or (again) take a trip to the beach.</p>
                <p className={classes.about}>There are seemingly endless pursuits to entertain the whole family! So, with all these wonderful experiences, who wants to have to be at home mowing, weeding, trimming, and maintaining their lawn? Because of our year-round beautiful weather, lawn care in Pensacola is a very involved process and can be challenging to say the least. </p>
                <p className={classes.about}>Letting us turn your lawn maintenance on autopilot can save you a ton of time and stress and can get you out to enjoy all our city has to offer. Don’t let your lawn chores consume your life - Pensacola family fun is priceless!</p>
                <p className={classes.about}>No matter how big or small the task, our team of professionals are here to provide the best comprehensive lawn care services in Pensacola. From detailed landscaping to just lawn mowing and maintenance, we are fully prepared to give any lawn the manicure it deserves. We are dedicated to providing the highest quality service there is, and we can prove it!</p>
                <p className={classes.about}>We aren’t one of the big corporate lawn service companies, we are actually local, so we have the ability to focus on the needs and wants of every single customer.</p>
                <p className={classes.about}>We will spend the time and care YOU need to make sure your lawn care routine is fine-tuned to exactly how you want. We have the drive to make every one of our customers feel as though they are being given the absolute best lawn service, because that’s what we do!</p>
            </div>
        </section>
    )
}

export default Aboutus;