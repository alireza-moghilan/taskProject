import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export const VideoPlayer = (props) => {
  return (
    <>
      <MediaPlayer className='rounded-4 shadow-darkMode' title={props.textBelowVideo} src={props.srcVideo}>
        <MediaProvider />
        <Poster
          className="vds-poster rounded-4"
          src={props.videoPoster}
          alt="posterVideo"
        />
        <DefaultVideoLayout className='rounded-4' icons={defaultLayoutIcons} />
      </MediaPlayer>
    </>
  )
}