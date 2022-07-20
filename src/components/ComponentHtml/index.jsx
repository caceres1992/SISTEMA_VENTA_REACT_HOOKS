import { Input, InputNumber } from "antd"
import { Controller } from "react-hook-form"


export const InputController = ({control,name}) => {
 return   <Controller
    control={control}
    name={name}
    render={({field}) => <Input className="uppercase" {...field} size="large"/>}
    />
}

export const InputNumberController = ({control,name}) => {
    return   <Controller
       control={control}
       name={name}
       
       render={({field}) => <InputNumber className="w-full" curre {...field} size="large"
       formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
       />}
       />
   }