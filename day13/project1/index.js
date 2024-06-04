import{
    createImageFile,
    loadImge,
    weakRefCache,
    LAYOUTS,
    images,
    THUMBNAILS_PARAMS,
    stateObj,
}from"./utils.js";
export const state=new Proxy
(stateObj,{
    set (target,property,value){
        const previousValue=target[property];
        target[property]=value;
        if(previousValue !==value){
            handlestatechange(target);
        }
    return true;
    },
});
const thumbnailsContainerEl = document.querySelector(".thumbnails-container");
const selectEl = document.querySelector(".select");
const previewContainerEl = document.querySelector(".previewContainer");
const canvasEl = document.querySelector(".canvas");
const createCollageBtn = document.querySelector(".btn-create-collage");
const startOverBtn = document.querySelector(".btn-start-over");
const downloadBtn = document.querySelector(".btn-download");
const spinnerContainerEl = document.querySelector(".spinnerContainer");
const spinnerTextEl = document.querySelector(".spinnerText");
const loggerContainerEl = document.querySelector(".loggerContainer");

images.foreach((img)=>{
    const thumbnails=document.createElement("div");
    thumbnails.classList.add("thumbnail-item");
    thumbnail.innerHTML = `
        <img src='${img.img}?${THUMBNAIL_PARAMS}' class="img">
  `;
    thumbnails.add
})