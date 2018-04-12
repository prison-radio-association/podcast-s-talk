export { default as FullEpisode } from './full';
export { default as TeaserEpisode } from './teaser';
export { default as EpisodeTranscript } from './transcript';

export const query = graphql`
  fragment EpisodeFragment on MarkdownRemark {
    id
    html
    frontmatter {
      path
      title
      image
      date(formatString: "MMMM DD, YYYY")
      audio
    },
    excerpt(pruneLength: 250)
  }
`;
