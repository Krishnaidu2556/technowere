import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  isSidePanelVisibel: boolean = false;
  productObj: any = {
      productId: 0,
      productSku: "",
      productName: "",
      productPrice: 0,
      productShortName: "",
      productDescription: "",
      createdDate: "new Date()",
      deliveryTimeSpan: "",
      categoryId: "",
      productImageUrl: "",
      userId: 0
    }

    categoryList: any[] = [];
    productList: any[] = [];

    constructor(private productSrv: ProductService){
       
    }

    ngOnInit(): void {
      this.getAllCategory();
    }

    getAllCategory() {
      this.productSrv.getCategory().subscribe((res: any) => {
        this.categoryList = res.data;
      });
    }
    getAddProduct() {
      this.productSrv.getProduct().subscribe((res: any) => {
        this.productList = res.data;
      });
    }

    onSave() {
      this.productSrv.saveProduct(this.productObj).subscribe((res: any) => {
        console.log(res);
        debugger
        if(res.status === 200) {
          alert("Product Saved Successfully");
        }
        else {
          alert("Product Not Saved");
        }
      });
    }

  openSidePanel() {
    this.isSidePanelVisibel = !this.isSidePanelVisibel;
  }
  closeSidePanel() {
    this.isSidePanelVisibel = !this.isSidePanelVisibel;
  }


}
