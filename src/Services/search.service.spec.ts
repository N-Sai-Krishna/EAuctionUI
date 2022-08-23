import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchService', () => {
  
  let service: SearchService;
  
    beforeEach( () => {
     TestBed.configureTestingModule({});
     service = TestBed.inject(SearchService)
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
