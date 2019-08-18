const stream_en = 'Streams';
const stream_du = 'DStreams';

export function getTranslation(code, language) {
  const string = `${code}_${language}`;
  return string;
}
