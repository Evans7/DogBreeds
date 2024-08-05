import { Component, inject } from '@angular/core';
import { DogBreed, DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {

  dogBreeds: DogBreed[] = [];
  private dogService = inject(DogsService);

  ngOnInit(): void {
    this.dogService.getDogBreeds().subscribe(response => {
      this.dogBreeds = response.data;
    });
  }
}
