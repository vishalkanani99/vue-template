export function useSwiperEvent() {
  
  const { addEvent, romoveEvent } = useEvent();
  const { useThrottle, useDebounce } = useLodash();
  
  let draggingFn, stopDraggingFn;

  const targetRef = ref(null);
  const isDragStarted = shallowRef(false);
  const isDragging = shallowRef(false);
  const position = shallowRef(0);
  const draggedPosition = shallowRef(0);
  
  const startDragging = useThrottle((e) => {
    isDragging.value = false;
    isDragStarted.value = true;

    let pageX = e?.pageX || ( e?.touches?.length && e.touches[0]?.pageX);
    position.value = pageX;
  })

  const dragging = useThrottle((e) => {
    let pageX = e?.pageX || ( e?.touches?.length && e.touches[0]?.pageX);
    if(!isDragStarted.value || !pageX) {
      draggedPosition.value = 0;
      stopDragging();
      return;
    }
    isDragging.value = true;
    draggedPosition.value = pageX - position.value;
    setStyle('auto', 'grabbing');
    draggingFn(draggedPosition.value);
  })

  const stopDragging = useDebounce(() => {
    isDragStarted.value = false;
    if(!isDragging.value) {
      return;
    }
    isDragging.value = false;
    setStyle();
    stopDraggingFn(draggedPosition.value);
  })

  const validateDragging = (e) => {
    if(targetRef.value.contains(e.target)){
      return;
    }
    draggedPosition.value = 0;
    stopDragging();
  }

  const setStyle = (scroll = 'smooth', cursor = 'pointer') => {
    targetRef.value.style['scroll-behavior'] = scroll;
    targetRef.value.style['cursor'] = cursor;
  }

  const addSwiperEvents = ( target, draggingCB, stopDraggingCB) => {
    if(!target) {
      return;
    }
    
    targetRef.value = target;
    draggingFn = draggingCB;
    stopDraggingFn = stopDraggingCB;

    setStyle();
    addEvent(target, "mousedown", startDragging);
    addEvent(target, "touchstart", startDragging);
    addEvent(target, "mousemove", dragging);
    addEvent(target, "touchmove", dragging);
    addEvent(target, "mouseup", stopDragging);
    addEvent(target, "touchend", stopDragging);
    addEvent(document, "mousemove", validateDragging);
    addEvent(document, "touchmove", validateDragging);
  }
  
  const romoveSwiperEvents = ( target ) => {
    if(!target) {
      return;
    }
    romoveEvent(target, "mousedown", startDragging);
    romoveEvent(target, "touchstart", startDragging);
    romoveEvent(target, "mousemove", dragging);
    romoveEvent(target, "touchmove", dragging);
    romoveEvent(target, "mouseup", stopDragging);
    romoveEvent(target, "touchend", stopDragging);
    romoveEvent(document, "mousemove", validateDragging);
    romoveEvent(document, "touchmove", validateDragging);
  }

  return { addSwiperEvents, romoveSwiperEvents };
}