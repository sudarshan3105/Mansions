import { TestBed,inject,async } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http'
import { SearchserviceService } from './searchservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('SearchserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: SearchserviceService = TestBed.get(SearchserviceService);
    expect(service).toBeTruthy();
  });
  it('return the location array',async(inject([SearchserviceService],(searchservice)=>{
    return searchservice.search().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })));
});
