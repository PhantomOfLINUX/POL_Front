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

interface stageListType {
    solution:problemListStatus,
    practice:problemListStatus,
    level:problemListStatus,
    setProblemListCheck:(name:"solution"|"practice"|"level",checked:boolean) => void
    setProblemItemCheck:(name:"solution"|"practice"|"level",value:string,checked:boolean) => void
}


const useProblemStore = create<stageListType>(set => ({
        solution:{
            problemListKoName:"풀이상태",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"true", problemItemKoName:"풀이완료", problemItemCheck:false},
                {problemItemName:"true", problemItemKoName:"도전 진행 중", problemItemCheck:false},
                {problemItemName:"false", problemItemKoName:"시도 안 함", problemItemCheck:false}
            ]
        },
        practice :{
            problemListKoName:"실습 구분",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"",problemItemKoName:"입문", problemItemCheck:false},
                {problemItemName:"",problemItemKoName:"심화", problemItemCheck:false},
                {problemItemName:"",problemItemKoName:"모의 테스트", problemItemCheck:false}
            ]
        },
        level:{
            problemListKoName:"종합 난이도",
            problemListCheck:false,
            problemListUl:[
                {problemItemName:"",problemItemKoName:"L1", problemItemCheck:false},
                {problemItemName:"",problemItemKoName:"L2", problemItemCheck:false},
                {problemItemName:"",problemItemKoName:"L3", problemItemCheck:false},
                {problemItemName:"",problemItemKoName:"L4", problemItemCheck:false},
                {problemItemName:"",problemItemKoName:"L5", problemItemCheck:false}
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
                if(ele.problemItemKoName===value)
                    ele.problemItemCheck = checked
                return ele
            }),
            },
        }))
    }
}));

export default useProblemStore;
