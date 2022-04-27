import dynamic from 'next/dynamic'


function MainContent() {

    const Steps = dynamic(() => import('./steps'))
    const Services = dynamic(() => import('./services'))

    return (
        <>
            <Steps />
            <Services />
        </>
    )
}

export default MainContent;