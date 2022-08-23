import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {SearchService} from 'src/Services/search.service';
import {BidDetailsModel} from '../Models/BidDetailsModel'
import { ProductBidDetailsModel } from '../Models/ProductBidDetailsModel';

@Component({
    selector: "app-product",
    templateUrl: './product.component.html',
    styleUrls: ['/product.component.css']
})

export class ProductComponent implements OnInit, OnDestroy {

    productBidDetailsSubscription: Subscription | null = null;
    productDetails : ProductBidDetailsModel |null = null;

    constructor(private searchService: SearchService) { }

    ngOnInit(): void {

        this.productBidDetailsSubscription = this.searchService.productBidDetailsObservable.subscribe(
            (result) => this.productDetails = result
        );
    }

    ngOnDestroy(): void {

        this.productBidDetailsSubscription?.unsubscribe();
    }
}