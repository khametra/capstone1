import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    //private flashMessagesService: FlashMessagesService
  ) { }

  onLogoutClick() {
    this.authService.logout(); // Logout user
    //this.flashMessagesService.show('You are logged out', { cssClass: 'alert-info' }); // Set custom flash message
    this.router.navigate(['/']); // Navigate back to home page
  }


  ngOnInit() {
  }

}