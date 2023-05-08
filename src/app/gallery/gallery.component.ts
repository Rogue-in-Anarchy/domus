import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeDBService } from '../service/fake-db.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any;
  constructor(
    private readonly service: FakeDBService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.service.getProjects().subscribe((response) => {
      this.images = response;
      console.log(this.images)
    })
  }

  loadDetails(id: any) {
    this.router.navigate(['/project-details', id])
  }
}
