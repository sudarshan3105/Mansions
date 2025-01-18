import { TestBed } from '@angular/core/testing';
import {MatSnackBarModule} from '@angular/material'
import { GuardadminService } from './guardadmin.service';

describe('GuardadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[MatSnackBarModule]
  }));

  it('should be created', () => {
    const service: GuardadminService = TestBed.get(GuardadminService);
    expect(service).toBeTruthy();
  });
});
