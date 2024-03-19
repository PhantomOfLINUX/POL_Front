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
    problemList:{
        solution:problemListStatus,
        practice:problemListStatus,
        level:problemListStatus,
    }
}


const useProblemStore = create<stageListType>(set => ({
    problemList:{
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
        }
    }

}));

export default useProblemStore;


/*
    문제 선택 list checking
    probelmListName:["풀이상태","실습구분","종합 난이도"],
    probelmListCheck:[false,false,false]
    
*/

