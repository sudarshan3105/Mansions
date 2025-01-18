import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';
import { MatSnackBarModule } from '../../node_modules/@angular/material';

describe('GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[MatSnackBarModule]
  }));

  it('should be created', () => {
    const service: GuardService = TestBed.get(GuardService);
    expect(service).toBeTruthy();
  });
});
