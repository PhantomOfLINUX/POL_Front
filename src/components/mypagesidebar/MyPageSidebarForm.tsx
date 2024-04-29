'use client'
import React from "react";
import { useState } from "react";
import useMyPageStore from "@/store/myPageStore";


const MyPageSidebarForm = () => {
<<<<<<< HEAD
    //path 태그들은 싹다 사이드바 아이콘 
    const { setSelector } = useMyPageStore();
=======
    const [myPageSelector, setMyPageSelector] = useState<number>(1);
    const { setSelector } = useMyPageStore();
    const { pageSelector } = useMyPageStore();
>>>>>>> d5b907939b025104df84e8fa8a75886851253267
    return (

        <div className="w-60 text-white p-3 bg-thema-color rounded-lg mr-36 h-1/2">
            < div className="flex items-center p-2 space-x-4" >
                {/* <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500"> */}
                < div >
                    <h2 className="text-lg font-semibold">마이페이지</h2>
                    <span className="flex items-center space-x-1">
                        <a className="text-xs hover:underline">View profile</a>
                    </span>
                </div >
            </div >
            <div className="divide-y">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
                    <li className="dark:bg-gray-800 dark:text-gray-50">
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="13.5" cy="10" r="4" stroke="white" strokeLinecap="round" />
                                <path d="M5.59102 19.6061C6.3254 17.2894 8.72723 16.1875 11.1575 16.1875H15.8425C18.2728 16.1875 20.6746 17.2894 21.409 19.6061C21.6303 20.3041 21.8082 21.0882 21.8896 21.9384C21.9422 22.4882 21.4898 22.9375 20.9375 22.9375H6.0625C5.51022 22.9375 5.05784 22.4882 5.11044 21.9384C5.19178 21.0882 5.36974 20.3041 5.59102 19.6061Z" stroke="white" strokeLinecap="round" />
                            </svg>
                            <button onClick={() => { setSelector(1) }}>
                                나의 정보
                            </button>

                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.33301 10.4165L8.33301 16.6665" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 12.5V16.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.667 8.3335V16.6668" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="3.125" y="4.1665" width="18.75" height="16.6667" rx="2" stroke="white" />
                            </svg>
                            <button onClick={() => { setSelector(2) }}>
                                활동 기록
                            </button>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 9.398C3.5 8.37292 3.5 7.86038 3.70266 7.47025C3.87343 7.14149 4.14149 6.87343 4.47025 6.70266C4.86038 6.5 5.37292 6.5 6.398 6.5H17.602C18.6271 6.5 19.1396 6.5 19.5298 6.70266C19.8585 6.87343 20.1266 7.14149 20.2973 7.47025C20.5 7.86038 20.5 8.37292 20.5 9.398V15.602C20.5 16.6271 20.5 17.1396 20.2973 17.5298C20.1266 17.8585 19.8585 18.1266 19.5298 18.2973C19.1396 18.5 18.6271 18.5 17.602 18.5H6.398C5.37292 18.5 4.86038 18.5 4.47025 18.2973C4.14149 18.1266 3.87343 17.8585 3.70266 17.5298C3.5 17.1396 3.5 16.6271 3.5 15.602V9.398Z" stroke="white" />
                                <path d="M3.5 10.5L20.5 10.5" stroke="white" strokeLinecap="round" />
                                <circle cx="6.5" cy="15.5" r="0.5" fill="white" />
                            </svg>
                            <button onClick={() => { setSelector(3) }}>
                                구독 관리
                            </button>
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1361 3.36144L14.6337 3.31169L14.1361 3.36144ZM13.9838 2.54161L13.5394 2.7708V2.77081L13.9838 2.54161ZM14.4311 4.81793L14.8286 4.51467V4.51467L14.4311 4.81793ZM15.3595 5.20248L15.2928 4.70694L15.2928 4.70694L15.3595 5.20248ZM16.5979 4.38113L16.9145 4.76811V4.76811L16.5979 4.38113ZM17.2853 3.90918L17.4375 4.38547L17.2853 3.90918ZM17.9872 3.94419L18.186 3.48541V3.48541L17.9872 3.94419ZM18.6243 4.4822L18.2707 4.83575V4.83575L18.6243 4.4822ZM19.5178 5.37567L19.8713 5.02211V5.02211L19.5178 5.37567ZM20.0558 6.01275L20.5146 5.81396L20.5146 5.81396L20.0558 6.01275ZM20.0908 6.71464L20.5671 6.8668L20.5671 6.86679L20.0908 6.71464ZM19.6188 7.4021L19.2318 7.08548V7.08548L19.6188 7.4021ZM18.7975 8.64056L18.3019 8.5739V8.5739L18.7975 8.64056ZM19.182 9.56893L18.8787 9.96645L19.182 9.56893ZM20.6385 9.86385L20.6883 9.36633L20.6385 9.86385ZM21.4584 10.0162L21.6876 9.57187L21.6876 9.57187L21.4584 10.0162ZM21.9299 10.5373L22.3949 10.3534V10.3534L21.9299 10.5373ZM21.93 13.4626L21.465 13.2788L21.465 13.2788L21.93 13.4626ZM21.4583 13.9838L21.6875 14.4282H21.6875L21.4583 13.9838ZM20.6386 14.1361L20.5889 13.6386L20.5726 13.6402L20.5564 13.6429L20.6386 14.1361ZM20.6386 14.1361L20.6884 14.6337L20.7047 14.632L20.7208 14.6293L20.6386 14.1361ZM19.1825 14.4309L18.8794 14.0333L19.1825 14.4309ZM18.7979 15.3596L18.3023 15.4264V15.4264L18.7979 15.3596ZM19.619 16.5976L19.232 16.9142L19.619 16.5976ZM20.0908 17.2848L19.6145 17.437L19.6145 17.437L20.0908 17.2848ZM20.0558 17.9869L19.597 17.7881L19.597 17.7881L20.0558 17.9869ZM19.5179 18.6238L19.8715 18.9773L19.5179 18.6238ZM18.6243 19.5174L18.2708 19.1638V19.1638L18.6243 19.5174ZM17.9873 20.0554L18.1861 20.5141L18.1861 20.5141L17.9873 20.0554ZM17.2854 20.0904L17.1332 20.5667H17.1332L17.2854 20.0904ZM16.5979 19.6184L16.9146 19.2314L16.9103 19.228L16.5979 19.6184ZM16.5979 19.6184L16.2813 20.0054L16.2856 20.0088L16.5979 19.6184ZM15.3595 18.7971L15.4262 18.3015H15.4262L15.3595 18.7971ZM14.4311 19.1816L14.8286 19.4849L14.8286 19.4849L14.4311 19.1816ZM14.1362 20.6383L13.6386 20.5886L14.1362 20.6383ZM13.9837 21.4585L13.5394 21.2292L13.5394 21.2292L13.9837 21.4585ZM13.4628 21.9299L13.2789 21.465H13.2789L13.4628 21.9299ZM10.5373 21.9299L10.7211 21.465H10.7211L10.5373 21.9299ZM10.0162 21.4584L10.4606 21.2292L10.0162 21.4584ZM9.86385 20.6385L9.36634 20.6883L9.86385 20.6385ZM9.56892 19.182L9.17139 19.4853L9.17139 19.4853L9.56892 19.182ZM8.64057 18.7975L8.57392 18.3019H8.57392L8.64057 18.7975ZM7.40208 19.6189L7.08546 19.2319L7.07754 19.2384L7.06989 19.2452L7.40208 19.6189ZM7.40206 19.6189L7.71868 20.0058L7.7266 19.9994L7.73424 19.9926L7.40206 19.6189ZM6.71458 20.0908L6.86673 20.5671H6.86673L6.71458 20.0908ZM6.01272 20.0558L5.81394 20.5146H5.81394L6.01272 20.0558ZM5.37561 19.5178L5.72916 19.1642H5.72916L5.37561 19.5178ZM4.48217 18.6243L4.12861 18.9779H4.12861L4.48217 18.6243ZM3.94414 17.9873L4.40292 17.7885L3.94414 17.9873ZM3.90913 17.2854L4.38542 17.4375L3.90913 17.2854ZM4.3811 16.5979L4.76808 16.9145L4.3811 16.5979ZM5.20247 15.3594L5.69801 15.4261L5.20247 15.3594ZM4.81792 14.4311L5.12119 14.0335H5.12119L4.81792 14.4311ZM3.36143 14.1361L3.31168 14.6337H3.31168L3.36143 14.1361ZM2.54161 13.9838L2.77081 13.5394H2.77081L2.54161 13.9838ZM2.07005 13.4627L1.60507 13.6465H1.60507L2.07005 13.4627ZM2.07008 10.5372L1.60513 10.3533L1.60513 10.3533L2.07008 10.5372ZM2.54152 10.0163L2.31229 9.57193L2.31228 9.57193L2.54152 10.0163ZM3.36155 9.86384V9.36384H3.33661L3.3118 9.36633L3.36155 9.86384ZM3.36156 9.86384V10.3638H3.3865L3.41131 10.3614L3.36156 9.86384ZM4.81842 9.56881L4.5151 9.17132L4.51509 9.17132L4.81842 9.56881ZM5.20287 8.64066L5.69841 8.57408H5.69841L5.20287 8.64066ZM4.38128 7.40182L4.76826 7.0852L4.38128 7.40182ZM3.90914 6.71405L4.38545 6.56197H4.38544L3.90914 6.71405ZM3.94413 6.01243L3.48532 5.81371L3.48532 5.81371L3.94413 6.01243ZM4.48233 5.37509L4.83589 5.72864L4.83589 5.72864L4.48233 5.37509ZM5.37565 4.48177L5.0221 4.12822H5.0221L5.37565 4.48177ZM6.01277 3.94373L5.81398 3.48494H5.81398L6.01277 3.94373ZM6.71463 3.90872L6.86677 3.43243L6.71463 3.90872ZM7.4022 4.38076L7.71882 3.99378V3.99378L7.4022 4.38076ZM8.64044 5.20207L8.70718 4.70654L8.64044 5.20207ZM9.56907 4.81742L9.17149 4.51422L9.56907 4.81742ZM9.86387 3.36131L10.3614 3.41106V3.41106L9.86387 3.36131ZM10.0162 2.5417L9.57179 2.31255L9.57179 2.31256L10.0162 2.5417ZM10.5374 2.07001L10.7212 2.535L10.7212 2.535L10.5374 2.07001ZM13.4627 2.07005L13.6465 1.60507L13.6465 1.60507L13.4627 2.07005ZM14.6337 3.31169C14.6126 3.10146 14.5947 2.91945 14.5695 2.7696C14.5435 2.61482 14.5051 2.46166 14.4281 2.31242L13.5394 2.77081C13.5497 2.79088 13.5658 2.8308 13.5833 2.93519C13.6017 3.04449 13.6163 3.18775 13.6386 3.41119L14.6337 3.31169ZM14.8286 4.51467C14.8173 4.49983 14.7806 4.43872 14.7421 4.22451C14.7044 4.01507 14.6755 3.73051 14.6337 3.31169L13.6386 3.41119C13.6788 3.81323 13.7116 4.14432 13.7579 4.40161C13.8033 4.65413 13.8731 4.91083 14.0335 5.12119L14.8286 4.51467ZM15.2928 4.70694C15.1148 4.73089 14.9375 4.65749 14.8286 4.51467L14.0335 5.12118C14.3604 5.54967 14.892 5.76987 15.4261 5.69801L15.2928 4.70694ZM16.2813 3.99415C15.9555 4.26069 15.7339 4.44152 15.5592 4.56296C15.3804 4.68717 15.3113 4.70445 15.2928 4.70694L15.4261 5.69801C15.6883 5.66274 15.9192 5.53055 16.1298 5.38412C16.3445 5.23493 16.6018 5.02396 16.9145 4.76811L16.2813 3.99415ZM17.1332 3.4329C16.9732 3.484 16.8377 3.56512 16.7099 3.65619C16.5861 3.74436 16.4448 3.86037 16.2813 3.99415L16.9145 4.76811C17.0883 4.62591 17.1999 4.53493 17.2902 4.47062C17.3764 4.4092 17.416 4.39234 17.4375 4.38547L17.1332 3.4329ZM18.186 3.48541C17.853 3.3411 17.4789 3.32244 17.1332 3.4329L17.4375 4.38547C17.5527 4.34865 17.6774 4.35487 17.7884 4.40297L18.186 3.48541ZM18.9778 4.12865C18.8285 3.97925 18.6993 3.84975 18.5849 3.74971C18.4668 3.64638 18.3401 3.55217 18.186 3.48541L17.7884 4.40297C17.8092 4.41195 17.8469 4.43267 17.9265 4.50236C18.01 4.57534 18.112 4.67697 18.2707 4.83575L18.9778 4.12865ZM19.8713 5.02211L18.9778 4.12865L18.2707 4.83575L19.1642 5.72922L19.8713 5.02211ZM20.5146 5.81396C20.4478 5.65988 20.3536 5.53314 20.2503 5.41502C20.1502 5.30065 20.0207 5.17151 19.8713 5.02211L19.1642 5.72922C19.323 5.88801 19.4246 5.99001 19.4976 6.07343C19.5673 6.1531 19.588 6.19082 19.597 6.21155L20.5146 5.81396ZM20.5671 6.86679C20.6775 6.52106 20.6589 6.147 20.5146 5.81396L19.597 6.21154C19.6451 6.32255 19.6513 6.44724 19.6145 6.56249L20.5671 6.86679ZM20.0058 7.71872C20.1396 7.5552 20.2556 7.41382 20.3438 7.29006C20.4348 7.16224 20.516 7.02676 20.5671 6.8668L19.6145 6.56249C19.6076 6.58401 19.5908 6.62359 19.5293 6.7098C19.465 6.80008 19.374 6.91168 19.2318 7.08548L20.0058 7.71872ZM19.293 8.70721C19.2955 8.68872 19.3128 8.61958 19.437 8.44084C19.5584 8.2661 19.7393 8.0445 20.0058 7.71872L19.2318 7.08548C18.976 7.3982 18.765 7.65547 18.6158 7.87015C18.4694 8.08084 18.3372 8.31168 18.3019 8.5739L19.293 8.70721ZM19.4853 9.1714C19.3424 9.06244 19.2691 8.88524 19.293 8.70721L18.3019 8.5739C18.2301 9.108 18.4503 9.63959 18.8787 9.96645L19.4853 9.1714ZM20.6883 9.36633C20.2694 9.32445 19.9849 9.29562 19.7754 9.25793C19.5612 9.21938 19.5001 9.18271 19.4853 9.1714L18.8787 9.96645C19.0891 10.1269 19.3458 10.1967 19.5983 10.2421C19.8556 10.2884 20.1867 10.3212 20.5888 10.3614L20.6883 9.36633ZM21.6876 9.57187C21.5384 9.49489 21.3852 9.45645 21.2304 9.43046C21.0805 9.4053 20.8985 9.38736 20.6883 9.36633L20.5888 10.3614C20.8122 10.3837 20.9555 10.3983 21.0648 10.4167C21.1692 10.4342 21.2091 10.4503 21.2292 10.4606L21.6876 9.57187ZM22.3949 10.3534C22.2615 10.0159 22.0102 9.73825 21.6876 9.57187L21.2292 10.4606C21.3367 10.5161 21.4205 10.6086 21.465 10.7211L22.3949 10.3534ZM22.5 11.3682C22.5 11.157 22.5003 10.9741 22.4901 10.8224C22.4797 10.6658 22.4567 10.5096 22.3949 10.3534L21.465 10.7211C21.4733 10.7421 21.4853 10.7835 21.4924 10.8891C21.4997 10.9997 21.5 11.1437 21.5 11.3682H22.5ZM22.5 12.6319V11.3682H21.5V12.6319H22.5ZM22.395 13.6464C22.4567 13.4903 22.4797 13.3341 22.4901 13.1775C22.5003 13.026 22.5 12.8431 22.5 12.6319H21.5C21.5 12.8564 21.4997 13.0003 21.4924 13.1109C21.4853 13.2165 21.4733 13.2578 21.465 13.2788L22.395 13.6464ZM21.6875 14.4282C22.0101 14.2618 22.2615 13.984 22.395 13.6464L21.465 13.2788C21.4205 13.3914 21.3367 13.4839 21.2292 13.5394L21.6875 14.4282ZM20.6884 14.6337C20.8986 14.6126 21.0805 14.5947 21.2304 14.5695C21.3851 14.5436 21.5383 14.5051 21.6875 14.4282L21.2292 13.5394C21.2091 13.5498 21.1692 13.5658 21.0648 13.5833C20.9555 13.6017 20.8123 13.6163 20.5889 13.6386L20.6884 14.6337ZM20.7208 14.6293L20.7208 14.6293L20.5564 13.6429L20.5564 13.6429L20.7208 14.6293ZM19.4857 14.8285C19.5006 14.8172 19.5617 14.7805 19.7758 14.742C19.9852 14.7043 20.2697 14.6755 20.6884 14.6337L20.5889 13.6386C20.1869 13.6788 19.856 13.7115 19.5987 13.7578C19.3463 13.8032 19.0897 13.8729 18.8794 14.0333L19.4857 14.8285ZM19.2934 15.2929C19.2694 15.1148 19.3428 14.9375 19.4857 14.8285L18.8794 14.0333C18.4507 14.3602 18.2304 14.8921 18.3023 15.4264L19.2934 15.2929ZM20.006 16.281C19.7395 15.9553 19.5588 15.7338 19.4373 15.5591C19.3132 15.3805 19.2959 15.3113 19.2934 15.2929L18.3023 15.4264C18.3377 15.6885 18.4698 15.9192 18.6162 16.1298C18.7653 16.3444 18.9762 16.6016 19.232 16.9142L20.006 16.281ZM20.5671 17.1326C20.5159 16.9727 20.4348 16.8372 20.3438 16.7095C20.2557 16.5858 20.1397 16.4444 20.006 16.281L19.232 16.9142C19.3741 17.0879 19.4651 17.1995 19.5294 17.2897C19.5908 17.3759 19.6076 17.4155 19.6145 17.437L20.5671 17.1326ZM20.5145 18.1858C20.6589 17.8526 20.6776 17.4784 20.5671 17.1326L19.6145 17.437C19.6514 17.5523 19.6451 17.677 19.597 17.7881L20.5145 18.1858ZM19.8715 18.9773C20.0208 18.828 20.1503 18.6989 20.2503 18.5846C20.3536 18.4665 20.4478 18.3398 20.5145 18.1858L19.597 17.7881C19.588 17.8088 19.5673 17.8465 19.4976 17.9261C19.4247 18.0095 19.3231 18.1115 19.1644 18.2702L19.8715 18.9773ZM18.9779 19.8709L19.8715 18.9773L19.1644 18.2702L18.2708 19.1638L18.9779 19.8709ZM18.1861 20.5141C18.3401 20.4474 18.4669 20.3532 18.585 20.2498C18.6994 20.1498 18.8285 20.0203 18.9779 19.8709L18.2708 19.1638C18.112 19.3226 18.01 19.4242 17.9266 19.4972C17.8469 19.5669 17.8092 19.5876 17.7885 19.5966L18.1861 20.5141ZM17.1332 20.5667C17.4789 20.6771 17.853 20.6585 18.1861 20.5141L17.7885 19.5966C17.6775 19.6447 17.5528 19.6509 17.4375 19.6141L17.1332 20.5667ZM16.2813 20.0054C16.4448 20.1392 16.5862 20.2552 16.7099 20.3434C16.8378 20.4344 16.9732 20.5156 17.1332 20.5667L17.4375 19.6141C17.416 19.6072 17.3764 19.5904 17.2902 19.5289C17.1999 19.4646 17.0883 19.3736 16.9145 19.2314L16.2813 20.0054ZM16.2856 20.0088L16.2856 20.0089L16.9103 19.228L16.9103 19.228L16.2856 20.0088ZM15.2928 19.2926C15.3113 19.2951 15.3805 19.3124 15.5592 19.4366C15.7339 19.558 15.9555 19.7389 16.2813 20.0054L16.9145 19.2314C16.6018 18.9756 16.3446 18.7646 16.1299 18.6154C15.9192 18.469 15.6884 18.3368 15.4262 18.3015L15.2928 19.2926ZM14.8286 19.4849C14.9376 19.3421 15.1148 19.2687 15.2928 19.2926L15.4262 18.3015C14.892 18.2297 14.3604 18.4499 14.0336 18.8784L14.8286 19.4849ZM14.6337 20.6881C14.6756 20.2692 14.7044 19.9846 14.7421 19.7751C14.7807 19.5608 14.8173 19.4997 14.8286 19.4849L14.0336 18.8784C13.8731 19.0887 13.8033 19.3455 13.7579 19.598C13.7116 19.8553 13.6789 20.1865 13.6386 20.5886L14.6337 20.6881ZM14.4281 21.6877C14.5051 21.5385 14.5435 21.3852 14.5695 21.2304C14.5947 21.0805 14.6127 20.8984 14.6337 20.6881L13.6386 20.5886C13.6163 20.8121 13.6017 20.9554 13.5833 21.0648C13.5658 21.1692 13.5497 21.2092 13.5394 21.2292L14.4281 21.6877ZM13.6467 22.3949C13.9841 22.2614 14.2617 22.0102 14.4281 21.6877L13.5394 21.2292C13.4839 21.3367 13.3914 21.4205 13.2789 21.465L13.6467 22.3949ZM12.6316 22.5C12.843 22.5 13.0259 22.5003 13.1776 22.4901C13.3342 22.4797 13.4905 22.4566 13.6467 22.3949L13.2789 21.465C13.2579 21.4733 13.2166 21.4853 13.1109 21.4924C13.0003 21.4997 12.8563 21.5 12.6316 21.5V22.5ZM11.3682 22.5H12.6316V21.5H11.3682V22.5ZM10.3534 22.3949C10.5096 22.4567 10.6658 22.4797 10.8224 22.4901C10.9741 22.5003 11.157 22.5 11.3682 22.5V21.5C11.1437 21.5 10.9997 21.4997 10.8891 21.4924C10.7835 21.4853 10.7421 21.4733 10.7211 21.465L10.3534 22.3949ZM9.57187 21.6876C9.73824 22.0102 10.0159 22.2615 10.3534 22.3949L10.7211 21.465C10.6086 21.4205 10.5161 21.3367 10.4606 21.2292L9.57187 21.6876ZM9.36634 20.6883C9.38736 20.8985 9.4053 21.0805 9.43046 21.2304C9.45645 21.3852 9.49489 21.5384 9.57187 21.6876L10.4606 21.2292C10.4503 21.2091 10.4342 21.1692 10.4167 21.0648C10.3983 20.9555 10.3837 20.8122 10.3614 20.5888L9.36634 20.6883ZM9.17139 19.4853C9.18271 19.5001 9.21938 19.5612 9.25793 19.7754C9.29562 19.9849 9.32445 20.2695 9.36634 20.6883L10.3614 20.5888C10.3212 20.1867 10.2884 19.8556 10.2421 19.5983C10.1967 19.3458 10.1269 19.0891 9.96644 18.8787L9.17139 19.4853ZM8.70722 19.293C8.88525 19.2691 9.06244 19.3425 9.17139 19.4853L9.96644 18.8787C9.63958 18.4503 9.10801 18.2301 8.57392 18.3019L8.70722 19.293ZM7.71869 20.0058C8.04448 19.7393 8.26609 19.5584 8.44084 19.437C8.61958 19.3128 8.68872 19.2955 8.70722 19.293L8.57392 18.3019C8.3117 18.3372 8.08085 18.4694 7.87015 18.6158C7.65547 18.765 7.39819 18.976 7.08546 19.2319L7.71869 20.0058ZM7.73424 19.9926L7.73426 19.9926L7.06989 19.2452L7.06988 19.2452L7.73424 19.9926ZM6.86673 20.5671C7.0267 20.516 7.16218 20.4349 7.29001 20.3438C7.41377 20.2557 7.55516 20.1396 7.71868 20.0058L7.08544 19.2319C6.91164 19.3741 6.80003 19.4651 6.70976 19.5294C6.62354 19.5908 6.58395 19.6077 6.56244 19.6145L6.86673 20.5671ZM5.81394 20.5146C6.14696 20.6589 6.521 20.6776 6.86673 20.5671L6.56244 19.6145C6.44719 19.6514 6.32251 19.6451 6.21151 19.597L5.81394 20.5146ZM5.02205 19.8713C5.17146 20.0207 5.3006 20.1503 5.41497 20.2503C5.5331 20.3536 5.65985 20.4479 5.81394 20.5146L6.21151 19.597C6.19078 19.5881 6.15306 19.5673 6.07339 19.4977C5.98996 19.4247 5.88796 19.323 5.72916 19.1642L5.02205 19.8713ZM4.12861 18.9779L5.02205 19.8713L5.72916 19.1642L4.83572 18.2708L4.12861 18.9779ZM3.48535 18.186C3.55212 18.3401 3.64632 18.4669 3.74966 18.585C3.84971 18.6994 3.97922 18.8285 4.12861 18.9779L4.83572 18.2708C4.67693 18.112 4.57529 18.01 4.50232 17.9266C4.43262 17.8469 4.4119 17.8092 4.40292 17.7885L3.48535 18.186ZM3.43284 17.1332C3.3224 17.479 3.34106 17.853 3.48535 18.186L4.40292 17.7885C4.35482 17.6775 4.34861 17.5528 4.38542 17.4375L3.43284 17.1332ZM3.99413 16.2813C3.86033 16.4448 3.74432 16.5862 3.65614 16.7099C3.56507 16.8378 3.48395 16.9733 3.43284 17.1332L4.38542 17.4375C4.39229 17.416 4.40915 17.3764 4.47058 17.2902C4.53489 17.1999 4.62588 17.0883 4.76808 16.9145L3.99413 16.2813ZM4.70694 15.2928C4.70445 15.3113 4.68716 15.3804 4.56295 15.5592C4.4415 15.7339 4.26067 15.9555 3.99413 16.2813L4.76808 16.9145C5.02394 16.6018 5.23491 16.3445 5.38411 16.1298C5.53054 15.9192 5.66274 15.6883 5.69801 15.4261L4.70694 15.2928ZM4.51466 14.8286C4.65749 14.9375 4.73088 15.1147 4.70694 15.2928L5.69801 15.4261C5.76986 14.892 5.54966 14.3604 5.12119 14.0335L4.51466 14.8286ZM3.31168 14.6337C3.73051 14.6755 4.01507 14.7044 4.2245 14.7421C4.43871 14.7806 4.49983 14.8173 4.51466 14.8286L5.12119 14.0335C4.91083 13.8731 4.65413 13.8033 4.40161 13.7579C4.14432 13.7116 3.81322 13.6788 3.41118 13.6386L3.31168 14.6337ZM2.31242 14.4281C2.46166 14.5051 2.61482 14.5435 2.7696 14.5695C2.91945 14.5947 3.10145 14.6126 3.31168 14.6337L3.41118 13.6386C3.18774 13.6163 3.04449 13.6017 2.93519 13.5833C2.8308 13.5658 2.79088 13.5497 2.77081 13.5394L2.31242 14.4281ZM1.60507 13.6465C1.73852 13.9841 1.98984 14.2618 2.31242 14.4281L2.77081 13.5394C2.66328 13.4839 2.57951 13.3914 2.53502 13.2789L1.60507 13.6465ZM1.5 12.6318C1.5 12.8431 1.49974 13.0259 1.50987 13.1776C1.52033 13.3341 1.54333 13.4904 1.60507 13.6465L2.53502 13.2789C2.52672 13.2578 2.5147 13.2165 2.50764 13.1109C2.50026 13.0003 2.5 12.8563 2.5 12.6318H1.5ZM1.5 11.3683V12.6318H2.5V11.3683H1.5ZM1.60513 10.3533C1.54335 10.5095 1.52034 10.6658 1.50987 10.8224C1.49974 10.9741 1.5 11.157 1.5 11.3683H2.5C2.5 11.1437 2.50026 10.9997 2.50765 10.8891C2.51471 10.7834 2.52673 10.7421 2.53504 10.7211L1.60513 10.3533ZM2.31228 9.57193C1.98981 9.73829 1.73857 10.0159 1.60513 10.3533L2.53504 10.7211C2.57952 10.6086 2.66327 10.5161 2.77076 10.4606L2.31228 9.57193ZM3.3118 9.36633C3.10152 9.38735 2.91947 9.4053 2.76957 9.43047C2.61476 9.45647 2.46156 9.49492 2.31229 9.57193L2.77076 10.4606C2.79084 10.4503 2.83076 10.4342 2.93518 10.4167C3.04452 10.3983 3.1878 10.3837 3.4113 10.3614L3.3118 9.36633ZM3.36155 9.36384H3.36155V10.3638H3.36155V9.36384ZM3.36156 9.36384H3.36155V10.3638H3.36156V9.36384ZM4.51509 9.17132C4.50025 9.18265 4.43914 9.21933 4.22487 9.25789C4.01538 9.2956 3.73074 9.32443 3.31181 9.36633L3.41131 10.3614C3.81346 10.3211 4.14464 10.2884 4.402 10.2421C4.65458 10.1966 4.91135 10.1268 5.12174 9.9663L4.51509 9.17132ZM4.70732 8.70725C4.73124 8.88524 4.65786 9.06238 4.5151 9.17132L5.12174 9.9663C5.55004 9.63946 5.77016 9.10804 5.69841 8.57408L4.70732 8.70725ZM3.9943 7.71844C4.26093 8.04432 4.44182 8.26599 4.5633 8.4408C4.68756 8.61959 4.70484 8.68875 4.70732 8.70725L5.69841 8.57408C5.66317 8.31178 5.53094 8.08087 5.38448 7.87012C5.23524 7.65537 5.0242 7.39802 4.76826 7.0852L3.9943 7.71844ZM3.43283 6.86614C3.48393 7.02617 3.56508 7.16171 3.65618 7.28959C3.74439 7.4134 3.86045 7.55484 3.9943 7.71844L4.76826 7.0852C4.62599 6.91132 4.53497 6.79966 4.47063 6.70935C4.40918 6.6231 4.39232 6.58349 4.38545 6.56197L3.43283 6.86614ZM3.48532 5.81371C3.34112 6.14663 3.32247 6.52052 3.43283 6.86614L4.38544 6.56197C4.34866 6.44676 4.35488 6.32213 4.40294 6.21116L3.48532 5.81371ZM4.12878 5.02153C3.97933 5.17099 3.84977 5.30018 3.74969 5.41459C3.64632 5.53276 3.55209 5.65955 3.48532 5.81371L4.40294 6.21116C4.41192 6.19042 4.43264 6.15269 4.50236 6.07299C4.57536 5.98953 4.67704 5.88749 4.83589 5.72864L4.12878 5.02153ZM5.0221 4.12822L4.12878 5.02154L4.83589 5.72864L5.72921 4.83532L5.0221 4.12822ZM5.0221 4.12821L5.0221 4.12822L5.72921 4.83532L5.72921 4.83532L5.0221 4.12821ZM5.81398 3.48494C5.65989 3.55171 5.53315 3.64591 5.41502 3.74925C5.30065 3.8493 5.1715 3.97881 5.0221 4.12821L5.72921 4.83532C5.888 4.67653 5.99001 4.57489 6.07343 4.50191C6.15311 4.43221 6.19082 4.41149 6.21155 4.40251L5.81398 3.48494ZM6.86677 3.43243C6.52105 3.32199 6.147 3.34065 5.81398 3.48494L6.21155 4.40251C6.32256 4.35442 6.44724 4.3482 6.56248 4.38501L6.86677 3.43243ZM7.71882 3.99378C7.55526 3.85997 7.41386 3.74394 7.29008 3.65575C7.16225 3.56467 7.02675 3.48354 6.86677 3.43243L6.56248 4.38501C6.58399 4.39188 6.62359 4.40874 6.70982 4.47018C6.80011 4.53451 6.91175 4.62551 7.08558 4.76774L7.71882 3.99378ZM8.70718 4.70654C8.6887 4.70405 8.61957 4.68676 8.44085 4.56255C8.26613 4.44111 8.04455 4.26029 7.71882 3.99378L7.08558 4.76774C7.39826 5.02357 7.6555 5.23451 7.87013 5.38369C8.08078 5.5301 8.31156 5.66229 8.57371 5.69759L8.70718 4.70654ZM9.17149 4.51422C9.06252 4.6571 8.88526 4.73052 8.70718 4.70654L8.57371 5.69759C9.10797 5.76954 9.63975 5.54927 9.96665 5.12062L9.17149 4.51422ZM9.36635 3.31155C9.32448 3.73026 9.29566 4.01474 9.25799 4.22412C9.21945 4.43828 9.1828 4.49938 9.17149 4.51422L9.96665 5.12062C10.127 4.9103 10.1968 4.65367 10.2422 4.40121C10.2885 4.14399 10.3212 3.81299 10.3614 3.41106L9.36635 3.31155ZM9.57179 2.31256C9.49485 2.46176 9.45643 2.61489 9.43046 2.76962C9.4053 2.91943 9.38737 3.10139 9.36635 3.31155L10.3614 3.41106C10.3837 3.18768 10.3983 3.04447 10.4167 2.93519C10.4342 2.83083 10.4502 2.79092 10.4606 2.77085L9.57179 2.31256ZM10.3536 1.60501C10.016 1.73847 9.73818 1.98986 9.57179 2.31255L10.4606 2.77085C10.5161 2.66329 10.6086 2.57949 10.7212 2.535L10.3536 1.60501ZM11.3681 1.5C11.1569 1.5 10.974 1.49974 10.8225 1.50986C10.6659 1.52031 10.5097 1.54331 10.3536 1.60501L10.7212 2.535C10.7422 2.5267 10.7835 2.51469 10.8891 2.50764C10.9997 2.50026 11.1436 2.5 11.3681 2.5V1.5ZM12.6318 1.5H11.3681V2.5H12.6318V1.5ZM13.6465 1.60507C13.4904 1.54333 13.3341 1.52033 13.1776 1.50987C13.0259 1.49974 12.8431 1.5 12.6318 1.5V2.5C12.8563 2.5 13.0003 2.50026 13.1109 2.50764C13.2165 2.5147 13.2578 2.52672 13.2789 2.53502L13.6465 1.60507ZM14.4281 2.31242C14.2618 1.98984 13.9841 1.73852 13.6465 1.60507L13.2789 2.53502C13.3914 2.57951 13.4839 2.66328 13.5394 2.7708L14.4281 2.31242ZM15.5 12C15.5 13.933 13.933 15.5 12 15.5V16.5C14.4853 16.5 16.5 14.4853 16.5 12H15.5ZM12 8.5C13.933 8.5 15.5 10.067 15.5 12H16.5C16.5 9.51472 14.4853 7.5 12 7.5V8.5ZM8.5 12C8.5 10.067 10.067 8.5 12 8.5V7.5C9.51472 7.5 7.5 9.51472 7.5 12H8.5ZM12 15.5C10.067 15.5 8.5 13.933 8.5 12H7.5C7.5 14.4853 9.51472 16.5 12 16.5V15.5Z" fill="white" />
                            </svg>
                            <button onClick={() => { setSelector(4) }}>
                                계정 설정
                            </button>
                        </a>
                    </li>
                </ul>
                <ul className="pt-4 pb-2 space-y-1 text-sm">
                    <li>
                        <a className="flex items-center p-2 space-x-3 rounded-md">
                            <span>example</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 space-x-3 rounded-md">
                            <span>example</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div >
    )
}


export default MyPageSidebarForm;