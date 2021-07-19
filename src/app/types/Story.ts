export type StoriesId = number[];

export interface Story {
    id : number;
    title : string;
    type : string;
    url : string;
    by: string;
    descendants : number,
    kids : number[],
    score : number,
    time : Date,
};