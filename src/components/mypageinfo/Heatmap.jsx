'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css'; // 히트맵 이쁘게 나오게 해주는 외부 css 파일
import Tooltip from 'cal-heatmap/plugins/Tooltip'; // tooltip 플러그인 import
import LegendLite from 'cal-heatmap/plugins/LegendLite'; // legendLite 플러그인 import
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel'; // CalendarLabel 플러그인 import
import useMyPageHeatmapInfoStore from '@/store/myPageProblemHeatmap';

/*히트맵 사용법*/

const dayjs = [ // 캘린더 왼쪽에 들어갈 요일의 약자
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat",
]

const currentYear = new Date();
const basicYear = currentYear.getFullYear();


const HeatmapForm = () => {
    const [cal, setCal] = useState(null);
    const [year, setYear] = useState(currentYear.getFullYear());
    const { Heatmap } = useMyPageHeatmapInfoStore();
    const heatmapRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [flag, setFlag] = useState(true);

    const handleClick = (year) => {
        setYear(year); // 예시로 2023으로 변경

    };


    useEffect(() => {
        if (!heatmapRef.current) {
            console.log(year);
            heatmapRef.current = new CalHeatmap();
            heatmapRef.current.paint( // 캘린더 내부 생성
                {
                    data: { // 어떤 데이터, 형식을 사용해서 캘린더를 채울것인지
                        source: Heatmap, // 임시 배열 이름, 위의 caldata를 가져왔으며 나중에 Heatmap 배열을 사용할거임
                        type: 'csv', // 파일 타입
                        x: 'date', // x축은 날짜
                        y: 'count', // y값이 caldata에 있는 배열, 이 값에 따라서 색이 칠해점
                        groupY: 'max',
                    },
                    date: { start: new Date(`${year}-01-01`) }, // 캘린더 시작 날짜
                    range: 12, // 총 몇개의 달을 나타낼건지
                    scale: {
                        color: {
                            type: 'linear', // 선형적으로 증가
                            range: ['#8dfc98', '#4dfa5d', '#00ff18', '#00c713', '#00870d'], // 색의 범위
                            domain: [1, 3, 5, 7, 9], // 색의 범위를 어떻게 나눌것인지, 이 값과 range 조정에 따라서 value 값에 따른 색깔을 조정할 수 있음
                        },
                    },
                    domain: { // 굳이 신경 안써도 됨
                        type: 'month',
                        label: { text: 'MMM', textAlign: 'start', position: 'top' },
                    },
                    subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
                    itemSelector: '#ex-ghDay',
                },
                [
                    [
                        Tooltip, // 마우스 갖다 대면 나오는 정보
                        {
                            text: function (date, value, dayjsDate) {
                                return (
                                    (value ? value : 'No') +
                                    ' contributions on ' +
                                    dayjsDate.format('dddd, MMMM D, YYYY')
                                );
                            },
                        },
                    ],
                    [ // 우측 하단에 보이는 색깔같음
                        LegendLite,
                        {
                            includeBlank: true,
                            itemSelector: '#ex-ghDay-legend',
                            radius: 2,
                            width: 11,
                            height: 11,
                            gutter: 4,
                        },
                    ],
                    [
                        CalendarLabel, // 왼쪽 요일 약자 출력
                        {
                            width: 30,
                            textAlign: 'start',
                            text: () => dayjs.map((d, i) => (i % 2 == 0 ? '' : d)),
                            padding: [25, 0, 0, 0],
                        },
                    ],
                ]
            );
            setCal(heatmapRef.current);
        }

    }, [cal, year])

    const handleNextClick = (year) => {
        cal.jumpTo(`${year}-01-30`, true);
    }


    return (
        <div
            style={{ // 배경색, 글자색, 칸 하나하나 크기 등등
                background: '#FFFFFF',
                color: '#000000',
                borderRadius: '3px',
                padding: '1rem',
                overflow: 'hidden',
            }}

        >
            <div className='float-right pr-16'>
                <div className='pl-6 pb-3'>
                    <button onClick={() => { setIsOpen((prev) => !(prev)) }} className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button">
                        {year}
                    </button>
                </div>
                {isOpen &&
                    (

                        <div className='pl-6'>
                            <div id="dropdown" className="position: absolute z-10 border-2 bg-white divide-y divide-gray-900 rounded-lg shadow w-40 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-500"> {/* 텍스트 요소 */}
                                    <li>
                                        <a onClick={() => { setIsOpen(prev => !prev), handleNextClick(basicYear), setYear(basicYear) }} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                            {basicYear}
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => { setIsOpen(prev => !prev), handleNextClick(basicYear + 1), setYear(basicYear + 1) }} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                            {basicYear + 1}
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => { setIsOpen(prev => !prev), handleNextClick(basicYear + 2), setYear(basicYear + 2) }} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                            {basicYear + 2}
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => { setIsOpen(prev => !prev), handleNextClick(basicYear + 3), setYear(basicYear + 3) }} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                            {basicYear + 3}
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => { setIsOpen(prev => !prev), handleNextClick(basicYear + 4), setYear(basicYear + 4) }} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                            {basicYear + 4}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
            <div id="ex-ghDay" className="margin-bottom--md"></div>
            <br />
            <div style={{ float: 'right', fontSize: 12 }}>
                <span style={{ color: '#768390' }}>Less</span>
                <div
                    id="ex-ghDay-legend"
                    style={{ display: 'inline-block', margin: '0 4px' }}
                ></div>
                <span style={{ color: '#768390', fontSize: 12 }}>More</span>
            </div>
            <br />

        </div >
    )
}

export default HeatmapForm;