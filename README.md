# ffplay

Easily play audio files with ffplay and promises.

## Usage

    // Play audio
    import { playAudio } from  "./playAudio";

    playAudio(./myAudio.mp3);

    // or
    await playAudio(./myAudio.mp3);

    // Kill audio
    import { killAudio } from  "./playAudio";

    killAudio();

    // or
    await killAudio();
