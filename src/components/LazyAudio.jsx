import { forwardRef, useEffect } from "react";

const LazyAudio = forwardRef(({ src, volume = 1, loop = false }, ref) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume / 100;
    }
  }, [volume, ref]);

  return <audio ref={ref} src={src} preload="auto" loop={loop} />;
});

export default LazyAudio;
