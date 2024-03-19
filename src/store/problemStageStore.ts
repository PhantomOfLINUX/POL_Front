import {create} from 'zustand'

export interface problemListItem {
    problemItemName:string,
    problemItemCheck:boolean
}

interface problemListStatus {
    problemListKoName:string,
    problemListCheck:boolean,
    problemListUl: problemListItem[]
}

interface stageListType {
    solution:problemListStatus,
    practice:problemListStatus,
    level:problemListStatus,
    setProblemListCheck:(name:"solution"|"practice"|"level") => void
    setProblemItemCheck:(name:"solution"|"practice"|"level",value:string,checked:boolean) => void
}


const useProblemStore = create<stageListType>(set => ({
        solution:{
            problemListKoName:"풀이상태",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"풀이완료", problemItemCheck:false},
                {problemItemName:"도전 진행 중", problemItemCheck:false},
                {problemItemName:"시도 안 함", problemItemCheck:false}
            ]
        },
        practice :{
            problemListKoName:"실습 구분",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"입문", problemItemCheck:false},
                {problemItemName:"심화", problemItemCheck:false},
                {problemItemName:"모의 테스트", problemItemCheck:false}
            ]
        },
        level:{
            problemListKoName:"종합 난이도",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"L1", problemItemCheck:false},
                {problemItemName:"L2", problemItemCheck:false},
                {problemItemName:"L3", problemItemCheck:false},
                {problemItemName:"L4", problemItemCheck:false},
                {problemItemName:"L5", problemItemCheck:false}
            ]
        },
    setProblemListCheck:(name) => set((state)=>({
        ...state,
        [name]: {
          ...state[name],
          problemListCheck: !state[name].problemListCheck,
        },
    })),
    setProblemItemCheck:(name,value,checked) => {
        set((state)=>({
            ...state,
            [name]: {
            ...state[name],
            problemListUl: state[name].problemListUl.map(ele=>{
                if(ele.problemItemName===value)
                    ele.problemItemCheck = checked
                return ele
            }),
            },
        }))
    }
}));

export default useProblemStore;
