import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


const Experience = () => {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className='verticle-timeline-element--education'
                date="September 2021 - February 2022"
                iconStyle={{ background: '#3e497a', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className='verticle-timeline-element-title'>Thinkful Coding Bootcamp</h3>
                <p>Completed Engineering Immersion program</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='verticle-timeline-element--work'
                date="April 2022 - June 2022"
                iconStyle={{ background: '#3e497a', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className='verticle-timeline-element-title'>Truepill</h3>
                <p>Quality Assurance Representative</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='verticle-timeline-element--work'
                date="April 2022 - June 2022"
                iconStyle={{ background: '#3e497a', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className='verticle-timeline-element-title'>Thinkful Coding Bootcamp</h3>
                <p>Completed Engineering Immersion program</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='verticle-timeline-element--education'
                date="September 2021 - February 2022"
                iconStyle={{ background: '#3e497a', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className='verticle-timeline-element-title'>Thinkful Coding Bootcamp</h3>
                <p>Completed Engineering Immersion program</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience