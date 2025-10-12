import { TiDeleteOutline } from "react-icons/ti";
import { withCart } from "./withProvider";

const CartRow = ({
  id,
  title,
  thumbnail,
  handleClickDelete,
  onQuantityChange,
  localCart,
  prise,
}) => {
  function handleChange(event) {
    onQuantityChange(id, +event.target.value);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2 border border-black p-2">
        <img
          src={thumbnail}
          alt={title}
          className="w-16 h-16 object-cover rounded"
        />

        <input
          className="border border-black w-16 text-center"
          key={id}
          type="number"
          value={localCart[id] ?? ""}
          onChange={(e) => handleChange(e, id)}
        />

        <span className="flex-1 sm:text-left text-sm sm:text-base">
          {title}
        </span>

        <div className="border border-black px-2 py-1 min-w-[60px] text-center mr-8">
          {localCart[id] * prise}
        </div>

        <div className="flex items-center justify-end">
          <button
            className="text-2xl text-red-600 hover:text-red-800"
            onClick={() => handleClickDelete(id)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default withCart(CartRow);
