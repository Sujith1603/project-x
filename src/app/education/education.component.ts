import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = [
    {
      label: 'High School',
      institution: 'St. Aloysius Anglo-Indian High School',
      years: '2016–2019',
      score: '88% ICSE',
     checkpointIcon1: 'assets/banner.png',  
      checkpointIcon2: 'assets/banner2.png'
    },
    {
      label: 'Pre-University',
      institution: 'Narayana Junior College',
      years: '2020–2021',
      score: '95% MPC-BIEAP',
      checkpointIcon1: 'assets/banner.png',  
      checkpointIcon2: 'assets/banner2.png' 

    },
    {
      label: 'Bachelor\'s',
      institution: 'Centurion University of Technology and Management',
      years: '2021–2025',
      score: '75% Btech-CSE',
       checkpointIcon1: 'assets/banner.png',  
      checkpointIcon2: 'assets/banner2.png'
      

    }
  ];

  currentImageIndex: number[] = [];
  ngOnInit() {
    this.initializeImageToggles();
  }

  // Function to initialize toggling for each event
  initializeImageToggles() {
    this.education.forEach((_, index) => {
      this.currentImageIndex[index] = 0; // Start with the first image for each event
      setInterval(() => {
        this.currentImageIndex[index] = this.currentImageIndex[index] === 0 ? 1 : 0;
      }, 1000); // Toggle between the images every second (1000ms)
    });
  }

  // Method to get the current image URL for each event
  getCheckpointIcon(index: number) {
    return this.currentImageIndex[index] === 0 ? this.education[index].checkpointIcon1 : this.education[index].checkpointIcon2;
  }

}
