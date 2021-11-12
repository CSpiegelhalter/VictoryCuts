import dynamic from 'next/dynamic'
import useInView from "react-cool-inview";
const Steps = dynamic(() => import('./steps'))
const Services = dynamic(() => import('./services'))


function MainContent() {

    const { observe, unobserve, inView } = useInView({
        onEnter: ({ unobserve }) => unobserve(),
        
        
    });
    return (
        <section>
            <Steps />
            <div ref={observe}>
                {inView && <Services />}
            </div>

        </section>
    )
}

export default MainContent;