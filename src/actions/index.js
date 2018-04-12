export const MENU_TOGGLED = 'MENU_TOGGLED';
export const TRACK_PLAYED = 'TRACK_PLAYED';
export const MEDIA_PLAYING = 'MEDIA_PLAYING';
export const MEDIA_PAUSED = 'MEDIA_PAUSED';
export const MEDIA_LOADING = 'MEDIA_LOADING';
export const SUBSCRIBE_MODAL_TOGGLED = 'SUBSCRIBE_MODAL_TOGGLED';
export const SHARE_MODAL_TOGGLED = 'SHARE_MODAL_TOGGLED';

export const toggleMenu = () => ({
  type: MENU_TOGGLED,
});

export const playTrack = src => ({
  type: TRACK_PLAYED,
  payload: src,
  a: console.log('playTrack', new Date().getTime())
});

export const setMediaPlaying = () => ({ type: MEDIA_PLAYING, a: console.log('setMediaPlaying', console.log(new Date().getTime())) });
export const setMediaPaused = () => ({ type: MEDIA_PAUSED, a: console.log('setMediaPaused', console.log(new Date().getTime())) });
export const setMediaLoading = () => ({ type: MEDIA_LOADING, a: console.log('setMediaLoading', console.log(new Date().getTime())) });

export const toggleSubscribeModal = () => ({ type: SUBSCRIBE_MODAL_TOGGLED });
export const toggleShareModal = (shareUrl) => ({ type: SHARE_MODAL_TOGGLED, payload: shareUrl });
