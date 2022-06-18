/*
This file consist the CropHealth Monitor Page
*/

// All the dependecies and components
import React , { useContext } from 'react'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './CropHealthMonitor.module.scss';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, RadialBarChart, RadialBar} from 'recharts';
import {cropHealthMonitorContext, bottomChart1, bottomChart2, bottom_bottom_right_charts__content } from './CropHealthcontext';
import cropHealthMonitorColors from './CropHealthMonitorColors';

// Images
import communityIcon from './CropHealthMonitorIcons/communityIcon.png';
import buildingIcon from './CropHealthMonitorIcons/buildingIcon.png';
import chevronDownIcon from './CropHealthMonitorIcons/chevronDownIcon.png';
import chart1_upIcon from './CropHealthMonitorIcons/chart1_upIcon.png';

// Context for sidebar collapse state
import { SideBarContext } from '../../../Contexts/SideBarContext';

function CropHealthMonitor() {

    // SideBar Collapsed State
    const { sidebarHide , setSidebarHide } = useContext(SideBarContext);

    return (
        
        <div>
            <SideBar selected={'healthMonitor'} sidebarHide = {sidebarHide}/>
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
            
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 82px)'} : {}} className={styles.healthMonitor__data__container}>
                
                <div className={styles.healthMonitor__top__screen}>
                    <div className={styles.manager__healthMonitor__details}>
                        <h1>Crop Health Monitor</h1>
                        <h3>Get an Overview of all the commodities stored</h3>
                    </div>
                    
                    <div className={styles.healthMonitor__godown__menu}>
                        <div className={styles.individual__godown__menu}>
                            <img src={communityIcon} alt="communityIcon" />
                            Godown 1
                            <img src={chevronDownIcon} alt="chevronDownIcon" />
                        </div>
                        <div className={styles.individual__godown__menu}>
                            <img src={buildingIcon} alt="buildingIcon" />
                            Compartment 1
                            <img src={chevronDownIcon} alt="chevronDownIcon" />
                        </div>
                    </div>
                </div>
                
                <div className={styles.healthMonitor__charts}>
                    <div className={styles.commodity__information}>
                        <h3>Commodities Stored :<span>12</span></h3>
                    </div>
                <div className={styles.healthMonitor__barChart1__container}>
                    <h3>Shelf Life Overview</h3>
                    <div className={styles.healthMonitor__barChart1}>
                        <ResponsiveContainer width="100%" aspect={4}>
                            <BarChart
                                width={500}
                                height={300}
                                data={cropHealthMonitorContext}
                                margin={{
                                    top: 10,
                                    right: 25,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                            <YAxis orientation="right" axisLine={false} unit="months" tickLine={false}/>
                            <Bar dataKey="uv" fill="#82ca9d" barSize={30} background={true} radius={[50, 50, 50, 50]} >
                             {cropHealthMonitorColors.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry} />
                              ))}
                             </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className={styles.healthMonitor__bottom__charts}>
                
                    <div className={styles.bottom__left__charts}>
                        <ul>Select a commodity</ul>
                        {
                            cropHealthMonitorContext?.map((item,index)=>{
                                return (
                                    <li key={index}>{item.name}</li>
                                )
                            })
                        }
                    </div>
                    <div className={styles.bottom__right__charts}>
                        <div className={styles.top__charts}>
                        <div className={styles.top__chart1}>
                            <h4>Cumulative Health Score</h4>
                            <div className={styles.charts1__content}>
                                <h3>84/100</h3>
                                <h5><img src={chart1_upIcon} alt="upIcon"/> 2.50%</h5>
                                <h4>vs 83/100 (prev.)</h4>
                            </div>
                            <div className={styles.charts1__display}>
                            <ResponsiveContainer width="100%" aspect={4}>
                                <AreaChart
                                width={100}
                                height={100}
                                data={bottomChart1}
                                margin={{
                                    top: 10,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" hide={true}/>
                                
                                <Area type="monotone" dataKey="uv" stroke="rgba(62, 137, 113, 1)" fill="rgba(131, 196, 175, 1)" />
                                </AreaChart>
                            </ResponsiveContainer>
                            </div>
                        </div>
                         <div className={styles.top__chart2}>
                                <h4>Storage Time</h4>
                                <div className={styles.chart2__display}>
                                <ResponsiveContainer width="100%" maxHeight={350} aspect={1}>
                                <RadialBarChart cx="50%" cy="30%" innerRadius="50%" outerRadius="75%" barSize={30} data={bottomChart2}>
                                
                                <RadialBar
                                    
                                    label={{ position: 'center', fill: 'rgba(100, 102, 117, 1)' ,dataKey:'pv',width:'3'}}
                                    background={true}
                                    clockWise
                                    dataKey="uv"
                                   
                                />
                               
                                </RadialBarChart>
                            </ResponsiveContainer>
                                
                                </div>
                         </div>
                    </div>
                            <div className={styles.bottom__bottom__right__charts}>

                            {bottom_bottom_right_charts__content?.map((element)=>(
                            <div className={styles.bottom__bottom__right__chart} key={element.id}>
                            <h4>{element.name} Score</h4>
                            <div className={styles.bottom__bottom__right__charts__content}>
                                <h3>84/100</h3>
                                <h5><img src={chart1_upIcon} alt="upIcon"/> 2.50%</h5>
                                <h4>vs 83/100 (prev.)</h4>
                            </div>
                            <div className={styles.bottom__bottom__right__charts__display}>
                            <ResponsiveContainer width="100%" aspect={4}>
                                <AreaChart
                                width={100}
                                height={200}
                                data={element.data}
                                margin={{
                                    top: 10,
                                    right: 0,
                                    left: 0,
                                    bottom: 0,
                                }}
                                >
                              
                                <XAxis dataKey="name" hide={true}/>
                                
                                <Area type="monotone" dataKey="uv" stroke="rgba(62, 137, 113, 1)" fill={element.color} />
                                </AreaChart>
                            </ResponsiveContainer>
                            </div>
                            
                    </div>))}
                    </div>
                </div>
        </div>
        </div>

         </div>
    </div>
    )
}

export default CropHealthMonitor
