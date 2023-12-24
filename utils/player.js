// player.js
import ReactPlayer from 'react-player';

export function ReactPlayerAsVideo(props) {
  let { asset, src, poster, blurDataURL, ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return <ReactPlayer url={src} config={config} {...rest} />;
}
