export const useSnackbar = defineStore("snackbar", () => {
  const messages = ref({
    top: [],
    bottom: [],
  });
  
  const create = (message = {}) => {
    if (
      message &&
      (message.constructor !== Object || Object.keys(message).length === 0)
    )
      return;
  
    let launchFrom = message.hasOwnProperty("launchFrom")
      ? message.launchFrom
      : "bottom";
  
    let formatedMessage = {
      timestamp: Date.now(),
      icon: message.hasOwnProperty("icon") ? message.icon : null,
      title: message.hasOwnProperty("title") ? message.title : "",
      hasCancelBtn: message.hasOwnProperty("hasCancelBtn")
        ? message.hasCancelBtn
        : true,
      text: message.hasOwnProperty("text") ? message.text : "",
      color: message.hasOwnProperty("color") ? message.color : "info",
      position: message.hasOwnProperty("position") ? message.position : "center",
      html: message.hasOwnProperty("html") ? message.html : false,
      lifetime: message.hasOwnProperty("lifetime")
        ? parseInt(message.lifetime)
        : 3000,
    };
  
    messages.value[launchFrom].push(formatedMessage);
  };

  const cancel = (timestamp, launchFrom = "bottom") => {
    const messagesToCancel = [];
    
    messages.value[launchFrom].forEach((message) => {
      if (timestamp !== message.timestamp) {
        messagesToCancel.push(message);
      }
    });
    messages.value[launchFrom] = messagesToCancel;
  };

  return { messages, create, cancel };
});
