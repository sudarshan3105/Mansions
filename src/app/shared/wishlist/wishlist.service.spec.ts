import { TestBed,inject,async } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http'
import { WishlistService } from './wishlist.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('WishlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: WishlistService = TestBed.get(WishlistService);
    expect(service).toBeTruthy();
  });
  it('to get the wishlisted property',async(inject([WishlistService],(wishservice)=>{
    return wishservice.wishlist('U1002').subscribe(res=>expect(res).toBeTruthy())
  })));
  it('to get user data',async(inject([WishlistService],(wishservice)=>{
    return wishservice.getuserdata().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })));
  it('to get the property details',async(inject([WishlistService],(wishservice)=>{
    return wishservice.view().subscribe(res=>expect(res).toBeTruthy())
  })));
});
