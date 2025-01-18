import { TestBed,inject,async } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { SellService } from './sell.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('SellService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: SellService = TestBed.get(SellService);
    expect(service).toBeTruthy();
  });
  it('to add data on post',async(inject([SellService],(sservice)=>{
    return sservice.roleput().subscribe(res=>expect(res.nModified).toBeGreaterThan(0))
  })))
  it('to add property for sale',async(inject([SellService],(sservice)=>{
    return sservice.sellProperty().subscribe(res=>expect(res).toBeTruthy())
  })))
});
