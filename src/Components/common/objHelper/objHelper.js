export const updateObjInArray = (items, objPropName, itemId, newObjProp) => {
    return items.map(f => {
        if(f[objPropName] === itemId){
            return {...f, ...newObjProp}
        }
        return f
    })
}