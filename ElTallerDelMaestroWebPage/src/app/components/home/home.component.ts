import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  constructor() { }

  createContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', Validators.required),
      request: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    let h3Elements: HTMLElement[] = <HTMLElement[]><unknown>(document.querySelectorAll('#activitiesSection .activityTitleContainer h3'));
    h3Elements.forEach((elem) => {
      elem.addEventListener("mouseout", (event) => {
        h3Elements.forEach((elem2) => {
          elem2.style.color = '#FF6A00' ? (<HTMLElement>elem).style.color = '#fff' : (<HTMLElement>elem).style.color = '#FF6A00';
        });
        (<HTMLElement>elem).style.color = '#FF6A00';
      });
      elem.addEventListener("mouseover", (event) => {
        h3Elements.forEach((elem2) => {
          elem2.style.color = '#FF6A00' ? (<HTMLElement>elem).style.color = '#fff' : (<HTMLElement>elem).style.color = '#FF6A00';
        });
        (<HTMLElement>elem).style.color = '#FF6A00';
      });
    });
    document.querySelector('#activitiesSection .activityTitleContainer:nth-child(1) h3')
      ?.addEventListener("mouseover", (event) => {
        let elem = (<HTMLElement>document.querySelector('#activitiesSection'));
        elem.style.backgroundImage = 'url("/assets/image_church1.jpeg")';
        elem.style.transition = 'all 500ms ease';

      });
    document.querySelector('#activitiesSection .activityTitleContainer:nth-child(2) h3')
      ?.addEventListener("mouseover", (event) => {
        let elem = (<HTMLHeadingElement>document.querySelector('#activitiesSection'));
        elem.style.backgroundImage = 'url("/assets/image_church3.jpeg")';
        elem.style.transition = 'all 500ms ease';
        elem.style.color = 'red';
      });

    document.querySelector('#activitiesSection .activityTitleContainer:nth-child(3) h3')
      ?.addEventListener("mouseover", (event) => {
        let elem = (<HTMLElement>document.querySelector('#activitiesSection'));
        elem.style.backgroundImage = 'url("/assets/image_church5.jpeg")';
      });
    document.querySelector('#activitiesSection .activityTitleContainer:nth-child(4) h3')
      ?.addEventListener("mouseover", (event) => {
        let elem = (<HTMLElement>document.querySelector('#activitiesSection'));
        elem.style.backgroundImage = 'url("/assets/image_church4.jpeg")';
      });
    this.createContactForm();
  }

}
