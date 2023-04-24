import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // social media links
  public socialMedia = [
    'https://www.facebook.com/',
    'https://twitter.com/',
    'https://www.google.com/',
    'https://www.instagram.com/',
    'https://www.linkedin.com/',
    'https://github.com/',
  ];

  // copyright Year section
  public copyRightYear: string =
    '@' + new Date().getFullYear().toString() + 'copyrights:';
  // footer link
  public hrefs = [
    {
      link: 'https://www.bacancytechnology.com/',
      title: 'BacancyBookShop.com',
    },
  ];
  // Email validation
  public emailValid: string = '';
  public emailRegex: RegExp = /^\w+([\.\-]?\w+)*@\w+([\.\-]?\w+)*(\.\w{2,})+$/;

  public validEmail(): void {
    if (this.emailRegex.test(this.emailValid)) {
      alert('Thank you for subscribe.... ;)');
    } else {
      alert('Please Enter valid email address for subscribe..');
    }
    this.emailValid = '';
  }
}
