import { useDispatch, useSelector } from 'react-redux';
import { calendarApi } from '../api';
import { convertEvents } from '../helpers/convertEvents';
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const {user} = useSelector(state => state.auth)

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        // TODO: llegar al backend

        // Todo bien
        if( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            // Creando
            const {data} = await calendarApi.post('/events/',calendarEvent)
            console.log({data})
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user}) );
        }
    }
    

    const startDeletingEvent = () => {
        // Todo: Llegar al backend


        dispatch( onDeleteEvent() );
    }

    const startLoadingEvents =async()=>{
        try {
            const {data} = await calendarApi.get('/events')
            const events = convertEvents(data.events)
            //dispatch(onLoadEvents(events))
            
            
        }
        catch(e){
            console.log('Error cargando los elementos',e)
        }
    }
   


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents
    }
}
