export type FieldValidatorType = (value: string) => string | undefined 

export const composeValidators = (...validators: FieldValidatorType[]): FieldValidatorType => (value) =>
   validators.reduce((error: string | undefined, validator) => error || validator(value), undefined);

 export const required: FieldValidatorType = (value) => (value ? undefined : "Поле не заполнено");

 export const maxLength = (maxLength: number): FieldValidatorType => (value) =>{
     if(value){
         if(value.length > maxLength) return `Колличество знаков превышает ${maxLength}`
     }
     return undefined
 } 