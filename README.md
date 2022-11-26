# ffplay

Easily play audio files with ffplay and promises.

[FFMPEG](https://ffmpeg.org/) is required for this package to work.

## Install

`npm install @nymh/ffplay`

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
