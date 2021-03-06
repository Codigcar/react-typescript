import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//@ts-ignore
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../redux/actions/uiActions';
import { eventClearActiveEventAction,  eventStartAddNewForBackendAction, eventStartUpdateActionFromBack } from '../../redux/actions/eventsActions';
import { RootState } from '../../helpers/root-state';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const fechaTiempoAhora = moment().minutes(0).seconds(0).add(1, 'hours'); //11:00:00
const fechaTiempoAhoraPlus1 = fechaTiempoAhora.clone().add(1,'hours');




export const CalendarModal = () => {

    // abrir o cerrar modal
    // const [isOpen, setIsOpen] = useState(true);
    const [fechaInicio, setFechaInicio] = useState( fechaTiempoAhora.toDate() )
    const [fechaFin, setFechaFin] = useState(fechaTiempoAhoraPlus1.toDate());
    const [tituloValido, setTituloValido] = useState(true);

    // Obtener el modalOpen del state
    const parteDelSelector_ModalOpen = useSelector((state: RootState) => state.ui.modalOpen);
    console.log('parteDelSelector_ModalOpen: ',parteDelSelector_ModalOpen);

    const dispatch = useDispatch();

    const closeModal = () => {
        console.log('closing...');
        // setIsOpen(false);
        dispatch(uiCloseModal());
        // volver null el activeEvent
        dispatch(eventClearActiveEventAction());
        setFormValues(initEvent);
    }

    const handleStartDateChange = (e: any) => {
        setFechaInicio(e);
        setFormValues({
            ...formValues,
            start: e
        })
        console.log('handleStartDateChange: ', e);
    }

    const handleEndDateChange = (e: any) => {
        setFechaFin(e);
        setFormValues({
            ...formValues,
            end: e
        })
        console.log('handleStartDateChange: ', e);
    }

    /* Enviar datao del formulario */

    const initEvent = {
        title: '',
        notes: '',
        start: fechaTiempoAhora.toDate(),
        end: fechaTiempoAhoraPlus1.toDate()
    }

    const [formValues, setFormValues] = useState(initEvent);
    const {notes, title, start, end} = formValues;

    const handleInputChange = (e:any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitForm = (e:any) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);
        
        console.log('momentStart: ', momentStart);
        console.log('momentEnd: ', momentEnd);
        console.log('handleSubmitForm: ', formValues);
        
        // Validando que la fecha de inico no sea igual o mayor que la final
        if(momentStart.isSameOrAfter(momentEnd)){
            console.log('Fecha 2 debe de ser mayor');
            Swal.fire('Error','La fechaFin debe ser mayor a la fechaInicio','error');
            return;
        }

        if(title.trim().length < 2 ){
            return setTituloValido(false);
        }
        // EDITAR: validar si el activeEvent:null (crear nuevo), si tiene data es editar 
        if (parteDelSelector_activeEvent){
            // editar un event
            // dispatch(eventUpdatedAction(formValues));
            dispatch(eventStartUpdateActionFromBack(formValues));
        } else {
            // crear un nuevo event
            
            // TODO: Realizar grabacion base de datos 
            dispatch(eventStartAddNewForBackendAction({
                ...formValues,
                // Data en duro, ya no ser?? necesario
              /*   
                    id: new Date().getTime(),
                    user: {
                        _id:'123',
                        name:'Carlos'
                    } 
                */
            }));
        }



        setTituloValido(true);
        closeModal();
    }

    /* end... Enviar datao del formulario */

    // Obtener el activeEvent del state
    const parteDelSelector_activeEvent = useSelector((state: RootState) => state.calendar.activeEvent);
    console.log('parteDelSelector_activeEvent: ',parteDelSelector_activeEvent);

    useEffect(() => {
        if (parteDelSelector_activeEvent){
            // console.log(parteDelSelector_activeEvent);
            setFormValues(parteDelSelector_activeEvent);
        } else {
            // limpiar formulario al eliminar el evento cuando activeEvent=null
            setFormValues(initEvent);
        }
    }, [parteDelSelector_activeEvent, setFormValues])

    

    return (
        <Modal
            isOpen={parteDelSelector_ModalOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"

            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            {/* <h1>Hola Modal</h1>
            <hr />
            <span>Relleno</span> */}

            <h1> {(parteDelSelector_activeEvent? "Editar evento": "Nuevo evento" )} </h1>
            <hr />
            <form className="container" onSubmit={handleSubmitForm}>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={fechaInicio}
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={fechaFin}
                        minDate={fechaInicio}
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${ !tituloValido && 'is-invalid'}`}
                        placeholder="T??tulo del evento"
                        name="title"
                        autoComplete="off"
                        // para enviar datos una vez presionado el boton enviar
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripci??n corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        // type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows={5}
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Informaci??n adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
