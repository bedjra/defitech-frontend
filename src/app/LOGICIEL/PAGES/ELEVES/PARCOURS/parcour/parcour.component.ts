import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParcourService } from '../../../../SERVICES/parcour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcour',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './parcour.component.html',
  styleUrl: './parcour.component.css'
})
export class ParcourComponent implements OnInit {
  stats: any[] = [];
  constructor(private parcourService: ParcourService) {}

  ngOnInit(): void {
    this.loadStats();
  }

  loadStats(): void {
    this.parcourService.getStats().subscribe(data => {
      this.stats = data;
    });
  }
}