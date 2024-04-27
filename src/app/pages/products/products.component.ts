import { Component, Inject, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // impoiratne importar el Common modulse en cada parte
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  proudctList: IProduct[] = []

  private _apiService = inject(ApiService);
  private _router= inject(Router);

  ngOnInit(): void {
      this._apiService.getProducts().subscribe((data: IProduct[]) => {
          console.log(data);
          this.proudctList = data;
      });
  }

  navigate(id: number): void {
    this._router.navigate(['/products', id]);
  }

}
