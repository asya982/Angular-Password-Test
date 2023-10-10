import { TestBed } from '@angular/core/testing';

import { PasswordFormService } from './password-form.service';

describe('PasswordFormService', () => {
  let service: PasswordFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
