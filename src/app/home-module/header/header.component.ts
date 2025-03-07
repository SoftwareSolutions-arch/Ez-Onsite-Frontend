import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

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
  isLoading = false;
  isMenuOpen = false;
  constructor(public homeService: HomeService,private router: Router,public authService:AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.homeService.logoutUser().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          localStorage.removeItem('token');
          this.authService.showSuccessToast('Logout successfully!');
          this.router.navigate(['/api/login']);
        }
        else{
          this.authService.showSuccessToast('Something went wrong');
        }
      },
      error: (error) => {
        this.authService.showSuccessToast(error.error.message);
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
