import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service'


@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
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

  createAppointment(testimonial: any) {
    this.appointmentService.createAppointment(testimonial).subscribe({
      next: (data: any) => {
        console.log('Appointment created successfully:', data);
        this.fetchAppointments();
      },
      error: (error: any) => {
        console.error('Error creating appointment:', error);
      }
    });
  }

  updateAppointment(id: string, testimonial: any) {
    this.appointmentService.updateAppointment(id, testimonial).subscribe({
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
