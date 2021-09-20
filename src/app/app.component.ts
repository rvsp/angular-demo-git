import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-directives';
  userName: any;

  obj = [
    {
      name: 'Dell Laptop',
      price: '$1299',
      stock: true,
      image:
        'https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format',
    },
    {
      name: 'HP Laptop',
      price: '$1199',
      stock: true,
      image: 'https://m.media-amazon.com/images/I/81SdJG3OUjL._SL1500_.jpg',
    },
    {
      name: 'Mouse',
      price: '$199',
      stock: false,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg',
    },
  ];
}
