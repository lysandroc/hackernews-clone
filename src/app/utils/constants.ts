export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const getNewsURL = () => `${BASE_URL}/newstories.json?print=pretty`;
    
export const getStoryURL = (item:number) => `${BASE_URL}/item/${item}.json?print=pretty`;

export const getCommentURL = (item:number) => `${BASE_URL}/item/${item}.json?print=pretty`;