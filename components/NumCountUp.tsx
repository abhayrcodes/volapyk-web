'use client'
import CountUp from 'react-countup';

export default function NumCountUp(props: any) {
    return <CountUp end={props.number} duration={5}/>
}
