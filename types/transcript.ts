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
