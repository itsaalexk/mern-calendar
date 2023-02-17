import Swal from "sweetalert2";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = async () => {
    await Swal.fire("Estas seguro de que quieres eliminar este evento?");
    startDeletingEvent();
  };

  return (
    <button
      className='btn btn-danger fab-danger'
      onClick={handleDelete}
      style={{
        display: hasEventSelected ? "" : "none",
      }}>
      <i className='fas fa-trash-alt'></i>
    </button>
  );
};
