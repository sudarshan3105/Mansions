import { TestBed,inject,async } from '@angular/core/testing';

import {HttpClientModule} from '@angular/common/http'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RegisterService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientModule,HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
  

});
