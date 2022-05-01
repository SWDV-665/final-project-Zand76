import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsServiceService {

  tools = [
    {
      id: '01',
      name: 'Camera',
      icon: 'camera-sharp',
      image: 'screenshot',
      price: 3.99,
      desc: 'Description of the tool and how it works.'    },
    {
      id: '02',
      name: 'Light',
      icon: 'flashlight-sharp',
      image: 'screenshot',
      price: .99,
      desc: 'Description of the tool and how it works.'    },
    {
      id: '03',
      name: 'Scanner',
      icon: 'barcode-sharp',
      image: 'screenshot',
      price: 2.99,
      desc: 'Description of the tool and how it works.'    },
    {
      id: '04',
      name: 'Geolocator',
      icon: 'navigate',
      image: 'screenshot',
      price: 1.99,
      desc: 'Description of the tool and how it works.'    },
    {
        id: '05',
        name: 'File Opener',
        icon: 'document',
        image: 'screenshot',
        price: .99,
        desc: 'Description of the tool and how it works.'    },
  ];

  toolbox = [];

  constructor() { 
    console.log('Hello ToolsServices')
  }

  // Tools Array
  getItems() {
    return this.tools;
  }
  removeItem(index) {
    this.tools.splice(index, 1);
  }
  addItem(tool) {
    this.tools.push(tool);
  }


  // Toolbox Array
  getTools() {
    return this.toolbox;
  }
  removeTool(index) {
    this.toolbox.splice(index, 1);
  }
  addTool(tool) {
    this.toolbox.push(tool);
  }

  // Actions
  startTool(tool, index) {
    this.toolbox[index] = tool;
  }
}
