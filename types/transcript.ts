export type YTTranscriptChunk = {
  text: string;
  duration: number;
  startTime: number;
  charCount: number;
};

export type YTTranscript = {
  text: string;
  duration: number;
  offset: number;
};

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
  heading: string;
  starting_words: string;
  tags: string;
  description: string;
  text?: string;
  startTime?: number;
};
