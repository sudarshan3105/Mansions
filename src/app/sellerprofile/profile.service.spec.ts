import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('ProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });
  
});
