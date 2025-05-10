import { TiDeleteOutline } from "react-icons/ti";

const CartRow=({id,title,thumbnail,handleClickDelete,onQuantityChange ,localCart})=>{
   
  function handleChange(event){
        onQuantityChange(id, + event.target.value);
       }

    return(
          <div >
             <div className="flex items-center justify-between mb-2 border border-black p-2">
             <img src={thumbnail} alt={title} className="w-12 h-12 object-cover rounded" />
             <input
             className="border border-black "
             key={id}
             type="number" 
             value={localCart[id]}
              onChange={handleChange}
            />
            
              <span>{title}</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 mr-48"></span>
                <button className="ml-10 text-4xl "onClick={()=>handleClickDelete(id)} ><TiDeleteOutline /></button>
              </div>
            </div>
             
           
        
    </div>
    );
}

export default CartRow;