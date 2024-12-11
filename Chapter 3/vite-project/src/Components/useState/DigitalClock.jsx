import {useState} from 'react'

const DigitalClock = () => {

    let time=new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    const refreshTime = () => {
        time=new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(refreshTime,1000);

    return (
    <div>
        {currentTime}
    </div>
    )
}

export default DigitalClock
