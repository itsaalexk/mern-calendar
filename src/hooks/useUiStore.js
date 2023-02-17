import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal, onSetModalColor } from "../store";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen, color } = useSelector((state) => state.ui);
  const openDateModal = () => {
    dispatch(onOpenDateModal());
  };

  const closeDateModal = () => {
    dispatch(onCloseDateModal());
  };

  const toggleDateModal = () => {
    isDateModalOpen ? openDateModal() : closeDateModal();
  };
  const setModalColor = (payload) => {
    dispatch(onSetModalColor(payload));
  };

  return {
    //* Propiedades
    isDateModalOpen,
    color,

    //* Métodos
    closeDateModal,
    openDateModal,
    toggleDateModal,
    setModalColor,
  };
};
