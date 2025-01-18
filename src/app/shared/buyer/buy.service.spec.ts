import { TestBed,inject,async } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http'
import { BuyService } from './buy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('BuyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: BuyService = TestBed.get(BuyService);
    expect(service).toBeTruthy();
  });
  it('to add data on post',async(inject([BuyService],(buyservice)=>{
    return buyservice.buy().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })));
  it('to add data on post',async(inject([BuyService],(buyservice)=>{
    return buyservice.property_location().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })))
  it('to add data on post',async(inject([BuyService],(buyservice)=>{
    return buyservice.getuserdata().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })))
});
