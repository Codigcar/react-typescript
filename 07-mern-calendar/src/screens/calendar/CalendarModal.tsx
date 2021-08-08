import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//@ts-ignore
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

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

    const [isOpen, setIsOpen] = useState(true);
    const [fechaInicio, setFechaInicio] = useState( fechaTiempoAhora.toDate() )
    const [fechaFin, setFechaFin] = useState(fechaTiempoAhoraPlus1.toDate());

    const closeModal = () => {
        console.log('closing...');
        setIsOpen(false);
    }

    const handleStartDateChange = (e: any) => {
        setFechaInicio(e);
        console.log('handleStartDateChange: ', e);
    }

    const handleEndDateChange = (e: any) => {
        setFechaFin(e);
        console.log('handleStartDateChange: ', e);
    }

    return (
        <Modal
            isOpen={isOpen}
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
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container">

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
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        // type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows={5}
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
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
