import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor() { }
  list=[
    {
        title: "gta vice city",
        demo: "game vera level thala",
        imageUrl:
          "https://s2.gaming-cdn.com/images/products/352/271x377/grand-theft-auto-vice-city-cover.jpg",
        price: "free",
        category: "games"
      },
      
      {
        title: "gta san andreas",
        demo: "game vera level thala",
        imageUrl:
          "https://cdn.toucharcade.com/wp-content/uploads/2013/12/GTA_SA1.jpg",
        price: "free",
        category: "games"
      },

      {
        title: "gta liberty city",
        demo: "game vera level thala",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Grand_Theft_Auto_Liberty_City_Stories_box.jpg/220px-Grand_Theft_Auto_Liberty_City_Stories_box.jpg",
        price: "free",
        category: "games"
      },

      {
        title: "gta IV",
        demo: "game vera level thala",
        imageUrl:
          "https://www.lifewire.com/thmb/IwfiNokLNSRf9uIDLn8RJQu6Vv4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/gta-4-57bc43f75f9b58cdfd1c0773.jpg",
        price: "free",
        category: "games"
      },
      
    ];

  cart=[   
  ];

  getCart(){
    return this.cart;
  }
}