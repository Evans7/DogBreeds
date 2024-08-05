import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DogBreed {
  id: string;
  type: string;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Attributes {
  name: string;
  description: string;
  life: LifeSpan;
  male_weight: Weight;
  female_weight: Weight;
  hypoallergenic: boolean;
}

export interface LifeSpan {
  max: number;
  min: number;
}

export interface Weight {
  max: number;
  min: number;
}

export interface Relationships {
  group: Group;
}

export interface Group {
  data: GroupData;
}

export interface GroupData {
  id: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private url: string = 'https://dogapi.dog/api/v2/breeds';

  constructor(private http: HttpClient) {}

  getDogBreeds(): Observable<{ data: DogBreed[] }> {
    return this.http.get<{ data: DogBreed[] }>(this.url);
  }
  
}
