import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formulario = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    ci: new FormControl(''),
    celular: new FormControl(''),
    modelo: new FormControl(''),
    cantidad: new FormControl('')
  });

  modelos: any = ['Huawei P30 Pro', 'iPhone 11', 'Samsung A50', 'Xiaomi MI 9 Lite', 'Huawei Y9 Prime', 'iPhone 12', 'Samsung S20', 'Xiaomi Redmi Note 9 Pro'];

  precio!: number;
  subtotal!: number;
  total!: number;
  descuento!: number;
  cantidad!: number;

  process(): void {
    if(this.cantidad > 3){
      this.descuento = 15;
    }
    else{
      this.descuento = 10;
    }

    switch (this.formulario.value.modelo) {
      case 'Huawei P30 Pro':
        this.precio = 5000
        break;
      case 'iPhone 11':
        this.precio = 7800
        break;
      case 'Samsung A50':
        this.precio = 6200
        break;
      case 'Xiaomi MI 9 Lite':
        this.precio = 4200
        break;
      case 'Huawei Y9 Prime':
        this.precio = 4600
        break;
      case 'iPhone 12':
        this.precio = 8200
        break;    
      case 'Samsung S20':
        this.precio = 5300
        break;    
      case 'Xiaomi Redmi Note 9 Pro':
        this.precio = 5100
        break;    
      default:
        this.precio = 0
        break;
    }
    this.subtotal = this.precio * this.cantidad
    this.total = this.subtotal - ((this.descuento/100) * this.subtotal);
  }

}
