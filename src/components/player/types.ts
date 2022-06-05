export interface IVideoData {
    poster: string;
    video: string;
    audio: string;
    text: string;
    trans: string;
};

export interface IVideoJSONData {
    image: {
        file: string;
        audio: string;
    };
    video: string;
    text: string;
    text_trans: string;
}