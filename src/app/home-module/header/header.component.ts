import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery:any;
  showSuggestions:any;
  searchSuggestions:any;
  showNotifications:boolean=false;
  isMenuOpen=true;
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  constructor(public homeService: HomeService,private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu() {}

  logout() {
    this.homeService.logoutUser().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          localStorage.removeItem('token');
          this.successMessage = response.message || 'Logout successfully!';
          this.router.navigate(['/api/login']);
        }
        else{
          this.errorMessage = response.message || 'Something went wrong!';
        }
      },
      error: (error) => {
        this.errorMessage = error.error.message || 'Something went wrong!';
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  onSearchInput(){  }
  hideSuggestions(){  }

  selectSuggestion(suggestion:any){  }

  toggleNotifications() {}



}
