import { connect } from 'react-redux';
import { withMediaProps } from 'react-media-player';
import { playTrack } from '../../actions';
import FullTemplate from './full';
import HeroTemplate from './hero';
import TeaserTemplate from './teaser';
import TranscriptTemplate from './transcript';

export const query = graphql`
  fragment EpisodeFragment on MarkdownRemark {
    html,
    frontmatter {
      title
      image
      path
      date(formatString: "MMMM DD, YYYY")
      description
      audio
    }
  }
`;

const episodeFactory = Episode => withMediaProps(connect(state => ({
  currentMedia: state.media.src,
  playing: state.media.playing, // Added to ensure component rerendering (for play-pause)
}), { playTrack })(Episode));

export const FullEpisode = episodeFactory(FullTemplate);
export const HeroEpisode = episodeFactory(HeroTemplate);
export const TeaserEpisode = episodeFactory(TeaserTemplate);
export const EpisodeTranscript = episodeFactory(TranscriptTemplate);