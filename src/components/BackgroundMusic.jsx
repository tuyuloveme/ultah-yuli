import { useEffect } from "react";
import { Howl } from "howler";

export default function BackgroundMusic() {
  useEffect(() => {
    const sound = new Howl({
      src: ["/music.mp3"], 
      loop: true,
      volume: 0.5,
      onplay: () => {
        sound.seek(38); // Mulai dari detik 38
      },
    });
    sound.play();
    return () => sound.stop();
  }, []);

  return null;
}
