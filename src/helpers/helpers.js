export const addListener = ( el, nodeEvent, cb )=>{
    el.addEventListener(nodeEvent, cb )
}
export const removeListener = ( el, nodeEvent, cb )=>{
    el.removeEventListener(nodeEvent, cb )
}