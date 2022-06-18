/*
This file consist the Activity Manager Page
*/

// All the dependecies and components

import React , { useContext } from 'react'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './ActivityManager.module.scss';
import {timelinedata,taskcontent,taskchartdata,taskchartcolors} from './ActivityManagerContent';
import { SideBarContext } from '../../../Contexts/SideBarContext';
import { PieChart, Pie, Sector, Cell, Legend ,Label} from 'recharts';
//images
import addIcon from '../CropProfile/CropProfileIcons/addIcon.png';
function ActivityManager() {
    const style = {
        top: 90,
        left: 250,
        lineHeight: '24px',
    };

    // All States
    const { sidebarHide , setSidebarHide } = useContext(SideBarContext);
    let buttontext="Timeline details >";
    
    return (
        <div>
            <SideBar selected={'activityManger'} sidebarHide = {sidebarHide}/>
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
            
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 82px)'} : {}} className={styles.activityManager__data__container}>
                <div className={styles.activityManager__top__screen}>
                    
                    <div className={styles.manager__activityManager__details}>
                        <h1>Activity Manager</h1>
                        <h3>Assign Tasks to warehouse workers and keep a close check on activities taking place in the warehouse</h3>
                    </div>

                </div>

                < div className={styles.timeline__and__task__container}>
                    <div className={styles.timeline__container}>
                        <div className={styles.top__timeline__container}>
                            <h4>Timeline</h4>
                            <button>{buttontext}</button>
                        </div>
                        <div className={styles.bottom__timeline__container}>
                        {timelinedata?.map((item , index)=>(
                            <div key={index} className={styles.timeline__container__data}>
                                <div className={styles.timeline__container__date}>
                                <h4>{item.day}</h4>
                                </div>
                            <div className={styles.timeline__container__data__box__container}>
                            {item.data?.map((content , i)=>(
                            <div key={i} className={styles.timeline__container__data__box} style={{backgroundColor:`${content.color}`}}>
                                <h3>{content.title}</h3>
                                <h4>{content.time}</h4>
                            </div>))} 
                            </div>
                            </div>))}
                            </div>
                         
                        </div>
                    
                    <div className={styles.task__container}>
                        <div className={styles.all__tasks__container}>
                            
                            <div className={styles.tasks__chart__container}>
                                <h5>All Tasks</h5>
                                    <PieChart width={400} height={260}>
                                    <text x={90} y={130} dy={8} textAnchor="middle" fill='#000'>
                                    Total: 37 tasks
                                    </text>
                                    <Pie
                                    
                                    data={taskchartdata}
                                    cx={90}
                                    cy={130}
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    >
                                    {taskchartdata?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={taskchartcolors[index]} />
                                    ))}
                                        
                                    </Pie>
                                    // <Label value="Total:37 tasks" offset={2} position="center" />
                                    <Legend iconSize={10} width={140} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />

                                </PieChart>

                            </div>

                            <div className={styles.open__tasks__and__assignees__tasks__container}>
                                <div className={styles.open__tasks}>
                                    <h4>Open Tasks</h4>
                                    <h2>37</h2>
                                </div>
                                <div className={styles.assignees__for__tasks}>
                                <h4>Assignees</h4>
                                    <h2>4</h2>
                                </div>
                            </div>

                        </div>

                        <div className={styles.new__tasks__container}>
                                <div className={styles.new__tasks__top__container}>
                                    <h5>Tasks</h5>
                                    <button>
                                    <img src={addIcon} alt="addIcon"/>
                                    <span>Add New Tasks</span>
                                   </button>
                                </div>
                                <table className={styles.new__tasks__bottom__container}>
                                    <thead className={styles.new__tasks__bottom__container__headings}>
                                        <tr>
                                            <th>Title & Description</th>
                                            <th>Assigned to</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className={styles.new__tasks__bottom__container__content}>
                                    {taskcontent?.map((item , index)=>(
                                        <tr key={index} className={styles.new__tasks__bottom__container__individual__content}>
                                            <td><span>{item.hex}</span>{item.Description}</td>
                                            <td>
                                                <div className={styles.profile__container}>
                                                    <img src={item.image} alt="profile-icon"/>
                                                    <p>{item.Assignedto}</p>
                                                </div>
                                            </td>
                                            <td>{item.date}</td>
                                            <td><input type="checkbox"/></td>
                                    
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>

            </div>
</div>
     
    )
}

export default ActivityManager
