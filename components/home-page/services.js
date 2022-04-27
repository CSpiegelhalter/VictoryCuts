import Image from 'next/image';
import classes from './services.module.css'
import lawnMower from '../../public/lawn2.webp'
import hedges from '../../public/hedges.webp'
import landscaping from '../../public/landscaping.webp'

function Services() {

    

    return (
        <div className={classes.about}>
            <div>
                <div className={classes.why}>

                    <h2 className={classes.head}>Services we provide:</h2>

                    <div className={classes.services}>
                        <div className={classes.left}>
                            <div className={classes.imageContainer}>
                                <Image
                                    src={lawnMower}
                                    alt={'Lawn Mowing'}
                                    layout='fill'

                                    width={1}
                                    height={1}
                                />
                            </div>
                            <ul className={classes.each}>
                                <li>Lawn Mowing</li>
                                <li>Edging</li>
                                <li>Hedge Trimming</li>
                                <li>Fertilization</li>
                            </ul>
                        </div>
                        <div className={classes.left}>
                            <ul className={classes.each}>
                                <li>Weed-eating</li>
                                <li>Raking Services</li>
                                <li>Weeding</li>
                                <li>Tree Trimming</li>
                            </ul>
                            <div className={classes.imageContainer}>
                                <Image
                                    src={hedges}
                                    alt={'Hedge Trimming'}
                                    layout='fill'
                                    width={1}
                                    height={1}
                                />
                            </div>
                        </div>

                        <div className={classes.left}>
                            <div className={classes.imageContainer}>
                                <Image
                                    src={landscaping}
                                    alt={'Landscaping'}
                                    layout='fill'
                                    width={1}
                                    height={1}
                                />
                            </div>
                            <ul className={classes.each}>
                                <li>Landscaping</li>
                                <li>Planting</li>
                                <li>Lawn Fertilizing</li>
                                <li>Leaf Removal</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;