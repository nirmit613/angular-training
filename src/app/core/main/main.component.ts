import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public booksList = [
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
      title: 'BookOne',
      author: 'Nirmit Valand',
      description:
        "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter.",
      link: '#',
      linkTitle: 'Read More',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
      title: 'BookTwo',
      author: 'Nirmit Valand',
      description:
        "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924.",
      link: '#',
      linkTitle: 'Read More',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
      title: 'BookThree',
      author: 'Nirmit Valand',
      description:
        "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924.",
      link: '#',
      linkTitle: 'Read More',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
      title: 'BookFour',
      author: 'Nirmit Valand',
      description:
        "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924.",
      link: '#',
      linkTitle: 'Read More',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
      title: 'BookFive',
      author: 'Nirmit Valand',
      description:
        "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924.",
      link: '#',
      linkTitle: 'Read More',
    },
    {
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg',
      title: 'BookSix',
      author: 'Nirmit Valand',
      description:
        "The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924.",
      link: '#',
      linkTitle: 'Read More',
    },
  ];
}
