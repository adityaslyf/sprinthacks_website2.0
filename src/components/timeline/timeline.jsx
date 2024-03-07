import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'
import BgImage from '../../assets/about/bg.svg'
import TimelineImage from '../../assets/timeline/Timeline.png'
import ArrowImage from '../../assets/timeline/underline(1).png'
import EndImage from '../../assets/timeline/route.png'
import StartImage from '../../assets/timeline/start.png'
const Timeline = () => {
  const event = [
    {
        time:"9:00 am",
        motto:"Inaugration Of Hackathon",
        date:"8 April"
    },
    {
        time:"12:00 noon",
        motto:"Hacking Period Start",
        date:"8 April"
    },
    {
        time:"6:00 PM - 7:00 PM",
        motto:"Mentoring Period",
        date:"8 April"
    },
    {
        time:"11:00 PM",
        motto:"First Judging Evaluation",
        date:"8 April"
    },
    {
        time:"12:00 AM",
        motto:"Recreational Activities",
        date:"9 April"
    },
    {
        time:"6:00 AM",
        motto:"Hacking Period End",
        date:"9 April"
    },
    {
        time:"6:00 AM - 8:00 AM",
        motto:"Submission Period",
        date:"9 April"
    },
    {
        time:"9:00 AM",
        motto:"Judging",
        date:"9 April"
    }, 
    {
        time:"1:00 PM",
        motto:"Result Announcement",
        date:"9 April"
    },
  ]
  return (
    <div className='main h-auto' style={{ backgroundImage: `url(${BgImage})`, backgroundSize: 'cover',  backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom", }}>
        {/* <center><h1 className="text-white text-center font-[Bluu Next] text-[75px] leading-[90px] font-semibold tracking-normal">
  TIMELINE
</h1></center> */}
<center><img className=' w-[293px] ' src={TimelineImage} alt="" />
<img className=' sm:w-[453px] w-[400px] mt-[30px]' src={ArrowImage} alt="" />

</center>

<div className=''>

{/* <div className='flex justify-center mb-3 '>
     <img className='filter invert w-12 ml-[px]' src={EndImage} alt="" />
   </div> */}
<VerticalTimeline>
           
           {event.map((data, index) => {
              return <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: '#1C1C1F', color: '#fff'}}
              contentArrowStyle={{ borderRight: '7px solid #1C1C1F'}}
              date={data.date}
              iconStyle={{background: "#1C1C1F"}}
              dateClassName="date"
            >
             <div className='flex justify-around align-center motto_box'>
              <h2 className="vertical-timeline-element-title">{data.time}</h2>
              <h2 className='timeline_motto'>
              {data.motto}  
              </h2>
             </div>
            </VerticalTimelineElement>
           })}    
           </VerticalTimeline>
            <div className='flex 2xl:justify-center  mb-3 '>
        <img className='filter invert w-12 sm
        sm:ml-[37px] md:ml-[35px] ml-6 ' src={EndImage} alt="" />
    </div>
    
</div>

        
    </div>
  )
}

export default Timeline