import { StoriesId } from '../types/Story';

export interface Comment {
    by : string;
    id : number;
    kids : StoriesId;
    parent : number;
    text : string;
    time : number;
    type : string;
}