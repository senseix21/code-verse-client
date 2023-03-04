import React from 'react';
import { TbCertificate, } from 'react-icons/tb';
import { FaGraduationCap } from 'react-icons/fa';
import { RiTvFill, RiBook2Fill } from 'react-icons/ri'

const Stats = () => {
    return (
        <div className='mt-5'>
            <div className="stats text-3xl stats-vertical lg:stats-horizontal bg-black px-14 mt-10 shadow">

                <div className="stat text-center">
                    <FaGraduationCap className='text-7xl text-center text-white font-bold mx-auto'></FaGraduationCap>
                    <div className="stat-title">Students Enroll</div>
                    <div className="stat-value">131K</div>
                    <div className="stat-desc">Jan 1st - May 1st</div>
                </div>

                <div className="stat">
                    <TbCertificate className='text-7xl text-white font-bold mx-auto'></TbCertificate>
                    <div className="stat-title">Satisfaction Rate</div>
                    <div className="stat-value">100%</div>
                    <div className="stat-desc">↗︎ 0 (0%)</div>
                </div>
                <div className="stat">
                    <RiBook2Fill className='text-7xl text-white font-bold mx-auto' />
                    <div className="stat-title">Course Programs</div>
                    <div className="stat-value">1200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <RiTvFill className='text-7xl text-white font-bold mx-auto'></RiTvFill>
                    <div className="stat-title">Instructors</div>
                    <div className="stat-value">150</div>
                    <div className="stat-desc">↗︎ 30 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default Stats;