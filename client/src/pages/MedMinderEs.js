import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class Mapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      dueDate: '',
      dueTime: ''
    }
  }

  addReminder() {
    console.log('this.state.dueDate', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate, this.state.dueTime);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                </div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2718;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="Mapp">
        <div className="title">
          Med-Minder
        </div>
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Ingrese Medicamento"
              onChange={event => this.setState({text: event.target.value})}
            />Fecha
            <input
              className="form-control"
              type="date"
              onChange={event => this.setState({dueDate: event.target.value})}
            />Horario
            <input
              className="form-control"
              type="time"
              onChange={event => this.setState({dueTime: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Agregar Recordatorio
          </button>
        </div>
        { this.renderReminders() }
        <div
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
        >
          Borrar Recordatorios
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(Mapp);
