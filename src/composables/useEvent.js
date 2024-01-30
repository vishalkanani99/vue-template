export function useEvent() {
  const addEvent = ( target, event, callback ) => {
    target.addEventListener(event, callback);
  }
  
  const romoveEvent = ( target, event, callback ) => {
    target.removeEventListener(event, callback);
  }
  
  return { addEvent, romoveEvent };
}