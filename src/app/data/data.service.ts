import { Injectable } from '@angular/core';

export interface DrawingData {
  id: number;
  name: string;
  description: string;
  category: string;
  imageName: string;
  imageType: string;
  latest: boolean;
}
@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor() { }

  data: DrawingData[] = [
    {
      id: 1,
      name: 'Sadhu',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Gesture Drawing',
      imageName: 'sadhu.jpeg',
      imageType: 'long',
      latest: true
    },
    {
      id: 2,
      name: 'Child',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Gesture Drawing',
      imageName: 'child.jpeg',
      imageType: 'long',
      latest: false,

    },
    {
      id: 3,
      name: 'Vadya',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Gesture Drawing',
      imageName: 'newchild.jpeg',
      imageType: 'long',
      latest: false,

    },
    {
      id: 4,
      name: 'Musical Instruments',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Figure Drawing',
      imageName: 'musical_instrument.jpeg',
      imageType: 'long',
      latest: true,

    },
    {
      id: 5,
      name: 'Cute Child Sketch',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Sketch',
      imageName: 'bittusketch.jpeg',
      imageType: 'long',
      latest: true,

    },
    {
      id: 6,
      name: 'Ganesh Chaturthi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Figure Drawing',
      imageName: 'ganesh.jpeg',
      imageType: 'long',
      latest: false,
    },
    {
      id: 7,
      name: 'Child with hat',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Sketch',
      imageName: 'child_hat.jpeg',
      imageType: 'long',
      latest: true

    },
    {
      id: 8,
      name: 'Cute Child 2 ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Sketch',
      imageName: 'cute_child.jpeg',
      imageType: 'long',
      latest: false

    },
    {
      id: 9,
      name: 'Girl Dancing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
      category: 'Figure Drawing',
      imageName: 'girl_dancing.jpeg',
      imageType: 'long',
      latest: false

    },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
    // {
    //   id: 1,
    //   name: 'Drawing 1',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore expedita, aperiam maiores, reiciendis rem iste impedit facilis aliquam beatae tenetur asperiores consequuntur quia officiis fugit ipsum ratione, facere iusto vel.',
    //   category: 'category 1',
    //   imageName: 'image',
    //   imageType: 'long / wide'

    // },
  ]

  getDrawingData(category?: string) {
    let data: any = []
    if (!category) {
      data = this.data;
      return data;
    } else if (category !== 'latest') {

      data = this.data.filter((drawing) => {
        if (drawing.category === category) {
          return true
        }
        return false

      })
      return data
    } else if (category === 'latest') {
      data = this.data.filter((drawing) => {
        if (drawing.latest) {
          return true
        }
        return false
      })
      return data
    }
    return data
  }
}
