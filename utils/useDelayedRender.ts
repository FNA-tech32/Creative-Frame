import { useState, useEffect } from "react";

interface DelayedRenderOptions {
  enterDelay?: number;
  exitDelay?: number;
}

export default function useDelayedRender(
  active: boolean,
  options: DelayedRenderOptions = {}
) {
  const { enterDelay = 0, exitDelay = 0 } = options;
  const [mounted, setMounted] = useState(active);
  const [rendered, setRendered] = useState(active);

  useEffect(() => {
    let enterTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;

    if (active) {
      setMounted(true);
      enterTimer = setTimeout(() => {
        setRendered(true);
      }, enterDelay);
    } else {
      setRendered(false);
      exitTimer = setTimeout(() => {
        setMounted(false);
      }, exitDelay);
    }

    return () => {
      if (enterTimer) clearTimeout(enterTimer);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [active, enterDelay, exitDelay]);

  return { mounted, rendered };
}
