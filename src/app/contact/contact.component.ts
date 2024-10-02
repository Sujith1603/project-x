import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  // Object to hold the form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Method to send the form data
  public sendEmail(): void {
    // Prepare the form data for EmailJS
    const serviceId = 'service_yr0nxda';
    const templateId = 'template_at0myw8';
    const userId = 'EV2wddznlcJlIHDvY';

    // Create a templateParams object to send to EmailJS
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    };

    // Send the form data using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert('Message sent successfully!');
        // Optionally, you can reset the form after success
        this.formData = { name: '', email: '', message: '' };
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });
  }
}
