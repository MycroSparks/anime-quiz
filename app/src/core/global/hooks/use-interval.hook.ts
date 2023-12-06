import { useEffect, useRef } from "react";

export function useInterval(
  callback: () => void,
  delay: number,
  immediateTrigger?: boolean
) {
  const savedCallback = useRef<() => void>();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    if (delay !== null) {
      if (immediateTrigger) {
        tick();
      }
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, immediateTrigger]);
}
