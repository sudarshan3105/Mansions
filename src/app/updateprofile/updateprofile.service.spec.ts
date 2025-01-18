import { TestBed,inject,async } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { UpdateprofileService } from './updateprofile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('UpdateprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({ imports:[
    HttpClientModule,HttpClientTestingModule
  ]}));

  it('should be created', () => {
    const service: UpdateprofileService = TestBed.get(UpdateprofileService);
    expect(service).toBeTruthy();
  });
  it('to get the wishlisted property',async(inject([UpdateprofileService],(profileservice)=>{
    return profileservice.update_profile('U1002').subscribe(res=>expect(res).toBeTruthy())
  })));
});
