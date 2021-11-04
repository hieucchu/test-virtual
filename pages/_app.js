import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const fpsMeter = () => {
      let prevTime = performance.now(),
        frames = 0;
      requestAnimationFrame(function loop() {
        const time = performance.now();
        frames++;
        if (time > prevTime + 1000) {
          let fps = Math.round((frames * 1000) / (time - prevTime));
          prevTime = time;
          frames = 0;
          console.log('FPS:', fps);
        }
        requestAnimationFrame(loop);
      });
    };
    fpsMeter();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
