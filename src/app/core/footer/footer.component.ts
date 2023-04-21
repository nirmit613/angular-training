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
  public emailValid: string = ' ';
  
}
