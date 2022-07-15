import React from 'react'

export default function CustomApp() {
  return (
    <div>
    <Clock/>
    </div>
  )
}

class Clock extends React.Component{
    constructor(props){
        super(props)
        const currentTime = new Date();
        this.state = {
            hours:currentTime.getHours(),
            minutes:currentTime.getMinutes(),
            seconds:currentTime.getSeconds(),
        }
    }
    render(){
        const {hours,minutes,seconds} = this.state;
        return(
            <div className='clock'>
                {
                    hours === 0 ? 12 : (hours > 12) ? hours - 12 : hours
                }
                :
                {
                    minutes > 9 ? minutes : `0${minutes}`
                }
                :
                {
                    seconds > 9 ? seconds : `0${seconds}`
                }
            </div>
        )
    }
}