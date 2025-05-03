import { useField } from "formik";

function FormikHoc(IncomingComponent){
   return function OutGoingComonemt(props){
    const{id,name,type,label}=props;
    const field=useField(name);
          const [data,meta]=field;
         const {onBlur,onChange,value,}=data;
         const {touched,error}=meta;
        return(
            <div>
 <IncomingComponent Blur={onBlur} onChange={onChange} value={value} touched={touched} error={error} type={type} id={id}
 name={name}  label={label}/>




            </div>
        )
    }
}
export default FormikHoc;