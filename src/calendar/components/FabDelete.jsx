import Swal from "sweetalert2";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleDelete = async () => {
    await Swal.fire({
      title: "Estas seguro de querer eliminar el evento?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        startDeletingEvent();
      }
    });
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
