export const publicPath = (folder = null, file = null) => {
  if(folder && file) {
    return  `/vue-template/public/${folder}/${file}`; 
  }
  if(folder) {
    return  `/vue-template/public/${folder}/`; 
  }
  if(file) {
    return  `/vue-template/public/${file}`; 
  }
  return  `/vue-template/public/`;
}