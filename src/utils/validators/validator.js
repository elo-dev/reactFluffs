export const composeValidators = (...validators) => (value) =>
   validators.reduce((error, validator) => error || validator(value), undefined);

 export const required = (value) => (value ? undefined : "Поле не заполнено");

 export const maxLength = (maxLength) => (value) =>{
     if(value){
         if(value.length > maxLength) return `Колличество знаков превышает ${maxLength}`
     }
     return undefined
 } 