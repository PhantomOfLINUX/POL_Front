import { get } from 'http'
import {create} from 'zustand'

export interface problemListItem {
    problemItemName:string,
    problemItemKoName:string,
    problemItemCheck:boolean
}

interface problemListStatus {
    problemListKoName:string,
    problemListCheck:boolean,
    problemListUl: problemListItem[]
}

interface getProblemItems {
    isCompleted:string[],
    difficultyLevels:string[],
    stageGroupTypes:string[],
}

interface stageListType {
    solution:problemListStatus,
    practice:problemListStatus,
    level:problemListStatus,
    setProblemListCheck:(name:"solution"|"practice"|"level",checked:boolean) => void
    setProblemItemCheck:(name:"solution"|"practice"|"level",value:string,checked:boolean) => void
    getProblemItem:()=>getProblemItems
}


const useProblemStore = create<stageListType>((set,get) => ({
        solution:{
            problemListKoName:"풀이상태",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"true", problemItemKoName:"풀이완료", problemItemCheck:false},
                {problemItemName:"challenge", problemItemKoName:"도전 진행 중", problemItemCheck:false},
                {problemItemName:"false", problemItemKoName:"시도 안 함", problemItemCheck:false}
            ]
        },
        practice :{
            problemListKoName:"실습 구분",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"BASIC_PROBLEMS",problemItemKoName:"입문", problemItemCheck:false},
                {problemItemName:"ADVANCED_PROBLEMS",problemItemKoName:"심화", problemItemCheck:false},
                {problemItemName:"MOCK_TESTS",problemItemKoName:"모의 테스트", problemItemCheck:false}
            ]
        },
        level:{
            problemListKoName:"종합 난이도",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"L1",problemItemKoName:"L1", problemItemCheck:false},
                {problemItemName:"L2",problemItemKoName:"L2", problemItemCheck:false},
                {problemItemName:"L3",problemItemKoName:"L3", problemItemCheck:false},
                {problemItemName:"L4",problemItemKoName:"L4", problemItemCheck:false},
                {problemItemName:"L5",problemItemKoName:"L5", problemItemCheck:false}
            ]
        },
    setProblemListCheck:(name,checked) => set((state)=>({
        ...state,
        [name]: {
          ...state[name],
          problemListCheck: checked,
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
    },
    getProblemItem:() => {
       const isCompleted = get().solution.problemListUl.reduce((acc:string[], ele) => {
        if (ele.problemItemCheck) acc.push(ele.problemItemName);
        return acc;
      }, []);
       const stageGroupTypes = get().practice.problemListUl.reduce((acc:string[], ele) => {
        if (ele.problemItemCheck) acc.push(ele.problemItemName);
        return acc;
      }, []);
       const difficultyLevels = get().level.problemListUl.reduce((acc:string[], ele) => {
        if (ele.problemItemCheck) acc.push(ele.problemItemName);
        return acc;
      }, []);
       return {isCompleted,stageGroupTypes,difficultyLevels}
    }
}));

export default useProblemStore;
