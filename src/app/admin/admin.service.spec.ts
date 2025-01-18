import { TestBed,inject,async } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing'
// import { async } from '../../../node_modules/@types/q';

describe('AdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });
  it('retreives all users',async(inject([AdminService],(aservice)=>{
    return aservice.getall().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })))

  it('retreives all property details',async(inject([AdminService],(aservice)=>{
    return aservice.propfunc().subscribe(res=>expect(res.length).toBeGreaterThan(0))
  })))

  it('delete the specified user',async(inject([AdminService],(aservice)=>{
    return aservice.delete('U1003').subscribe(res=>expect(res.message).toEqual("the deleted user is U1003"))
  })))
});
