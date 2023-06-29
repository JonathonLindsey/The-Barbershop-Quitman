import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  appointments: any[] = [];
  appointment: any;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.appointmentService.getAppointments().subscribe({
      next: (data: any) => {
        this.appointments = data;
      },
      error: (error: any) => {
        console.error('Error fetching appointments:', error);
      }
    });
  }

  fetchAppointment(id: string) {
    this.appointmentService.getAppointment(id).subscribe({
      next: (data: any) => {
        this.appointment = data;
      },
      error: (error: any) => {
        console.error('Error fetching appointment:', error);
      }
    });
  }

  createAppointment(contact: any) {
    this.appointmentService.createAppointment(contact).subscribe({
      next: (data: any) => {
        console.log('Appointment created successfully:', data);
        this.fetchAppointments();
      },
      error: (error: any) => {
        console.error('Error creating appointment:', error);
      }
    });
  }

  updateAppointment(id: string, contact: any) {
    this.appointmentService.updateAppointment(id, contact).subscribe({
      next: (data: any) => {
        console.log('Appointment updated successfully:', data);
        this.fetchAppointments();
      },
      error: (error: any) => {
        console.error('Error updating appointment:', error);
      }
    });
  }

  deleteAppointment(id: string) {
    this.appointmentService.deleteAppointment(id).subscribe({
      next: (data: any) => {
        console.log('Appointment deleted successfully:', data);
        this.fetchAppointments();
      },
      error: (error: any) => {

        console.error('Error deleting appointment:', error);
      }
    });
  }
}

