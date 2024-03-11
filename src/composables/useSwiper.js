export function useSwiper() {
  
  const { addEvent, romoveEvent } = useEvent();
  const { useThrottle, useDebounce } = useLodash();
  
  let draggingFn, stopDraggingFn;

  const targetRef = ref(null);
  const position = shallowRef(0);
  const draggedPosition = shallowRef(0);
  
  const startDragging = useThrottle((e) => {
    let pageX = e?.pageX || ( e?.touches?.length && e.touches[0]?.pageX);
    position.value = pageX;
    addEvents(e.type);
  })

  const dragging = useThrottle((e) => {
    let pageX = e?.pageX || ( e?.touches?.length && e.touches[0]?.pageX);
    if(e.type === 'mousemove') {
      e.preventDefault();
    }

    draggedPosition.value = pageX - position.value;
    setStyle('auto', 'grabbing');
    draggingFn(draggedPosition.value);
  })

  const stopDragging = useDebounce((e) => {
    setStyle();
    stopDraggingFn(draggedPosition.value);
    clearEvents(e.type);
  })

  const setStyle = (scroll = 'smooth', cursor = 'pointer') => {
    targetRef.value.style['scroll-behavior'] = scroll;
    targetRef.value.style['cursor'] = cursor;
  }

  const addMouseEvents = (target) => {
    addEvent(target, "mousemove", dragging);
    addEvent(target, "mouseup", stopDragging);
    addEvent(target, "mouseleave", stopDragging);
  }

  const removeMouseEvents = (target) => {
    romoveEvent(target, "mousedown", dragging);
    romoveEvent(target, "mousemove", dragging);
    romoveEvent(target, "mouseup", stopDragging);
    romoveEvent(target, "mouseleave", stopDragging);
  }

  const addTouchEvents = (target) => {
    addEvent(target, "touchmove", dragging, { 'passive': true });
    addEvent(target, "touchend", stopDragging, { 'passive': true });
    addEvent(target, "touchcancel", stopDragging, { 'passive': true });
  }

  const removeTouchEvents = (target) => {
    romoveEvent(target, "touchstart", dragging);
    romoveEvent(target, "touchmove", dragging, { 'passive': true });
    romoveEvent(target, "touchend", stopDragging, { 'passive': true });
    romoveEvent(target, "touchcancel", stopDragging, { 'passive': true });
  }

  const addEvents = (type) => {
    if(type === 'mousedown') {
      addMouseEvents(targetRef.value);
    }

    if(type === 'touchstart') {
      addTouchEvents(targetRef.value);
    }
  }

  const clearEvents = (type) => {
    const isMouseEv = type === 'mouseleave' || type === 'mouseup';
    const isTouchEv = type === 'touchcancel' || type === 'touchend';

    if(isMouseEv) {
      removeMouseEvents(targetRef.value);
    }

    if(isTouchEv) {
      removeTouchEvents(targetRef.value);
    }
  }
  
  const initSwiper = ( target, draggingCB, stopDraggingCB) => {
    targetRef.value = target;
    draggingFn = draggingCB;
    stopDraggingFn = stopDraggingCB;

    setStyle();

    addEvent(target, "mousedown", startDragging);
    addEvent(target, "touchstart", startDragging, { 'passive': true });
    
  }

  const clearSwiper = ( target ) => {
    removeMouseEvents(target);
    removeTouchEvents(target);
  }

  return { initSwiper, clearSwiper };
}