import { Question } from "./questionType";

export interface StageUploadRequest {
    title: string;
    description: string;
    groupType?: string,
    difficultyLevel?: string,
    questions: Question[];
}