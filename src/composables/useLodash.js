import _debounce from 'lodash/debounce';
import _throttle from 'lodash/throttle';

export function useLodash() {
  const useDebounce = _debounce;
  
  const useThrottle = _throttle;
  
  return { useDebounce, useThrottle };
}