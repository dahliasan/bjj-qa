export type YTTranscriptChunk = {
  text: string;
  duration: number;
  startTime: number;
  charCount: number;
};

// type from Youtube-Transcript js
export type YTTranscript = {
  text: string;
  duration: number;
  offset: number;
};

// transcript type from timedtext -> xml method
export interface TranscriptItem {
  start: number;
  duration: number;
  text: string;
}

// Define an interface for the transcript
export interface Transcript {
  transcript: {
    text: TranscriptItem[];
  };
}

export type Source = {
  metadata: SourceMetadata;
  pageContent: string;
};

export type SourceMetadata = {
  id: number;
  chunk: string;
  videoId: string;
  _distance: number;
  "video title"?: string;
  channel?: string;
  "start time"?: string;
};

export type YTChunks = {
  title: string;
  starting_words: string;
  keywords: string;
  description: string;
  text?: string;
  startTime?: number | null;
};

export type YTVideo = {
  videoId: string;
  title: string;
  channel: string;
  thumbnailUrl: string;
  [key: string]: any;
};
