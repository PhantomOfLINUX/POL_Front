import { Question } from "./questionType";

export interface StageUploadRequest {
    title: string;
    description: string;
    questions: Question[];
}