import SoundPlayer from 'react-native-sound-player';
import {Sync} from '../Firebase/Sync';

export let start = () => {
  const unfrozenObj = JSON.parse(JSON.stringify(global.user));
  global.user = unfrozenObj;
  global.user.music = 'a';
  Sync();
  play();
};
let play = () => {
  try {
    // play the file tone.mp3
    SoundPlayer.playSoundFile('qc', 'mp3');
    SoundPlayer.addEventListener('FinishedPlaying', (data) => {
      console.log(data);
      if (data.success) {
        play();
      }
    });
    // or play from url
  } catch (e) {
    console.log('cannot play the sound file', e);
  }
};
export let stop = () => {
  const unfrozenObj = JSON.parse(JSON.stringify(global.user));
  global.user = unfrozenObj;
  global.user.music = 'b';
  Sync();
  SoundPlayer.stop();
};
