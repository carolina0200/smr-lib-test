import { TestBed } from '@angular/core/testing';

import { SmrLibService } from './smr-lib.service';

describe('SmrLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmrLibService = TestBed.get(SmrLibService);
    expect(service).toBeTruthy();
  });
});
