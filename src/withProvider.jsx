import { useContext } from "react";
import { AlertContext, CartContext, UserContext } from "./Context";

function withProvider(provider){
    function myHOC(IncomingComponent){
        function OutGoingComponent(props){
            const ContextValue=useContext(provider);
            return <IncomingComponent  {...props} {...ContextValue}/>
        }
        return OutGoingComponent;
}
return myHOC;
}
export default withProvider;

export const withUser=withProvider(UserContext);
export const withCart=withProvider(CartContext);
export const withAlert=withProvider(AlertContext);