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
  cartItems: any[] = [];
  cartItemCount = 0;
  cartTotal = 0;
  activeSubmenu: string | null = null;
  categories = [
    {
      name: 'Electronics',
      icon: 'fas fa-laptop',
      subcategories: [
        { name: 'Laptops', link: '/electronics/laptops' },
        { name: 'Smartphones', link: '/electronics/smartphones' },
        { name: 'Accessories', link: '/electronics/accessories' }
      ]
    },
    {
      name: 'Fashion',
      icon: 'fas fa-tshirt',
      subcategories: [
        { name: 'Men\'s Clothing', link: '/fashion/mens-clothing' },
        { name: 'Women\'s Clothing', link: '/fashion/womens-clothing' },
        { name: 'Footwear', link: '/fashion/footwear' },
        { name: 'Watches', link: '/fashion/watches' }
      ]
    },
    {
      name: 'Home & Kitchen',
      icon: 'fas fa-couch',
      subcategories: [
        { name: 'Furniture', link: '/home-kitchen/furniture' },
        { name: 'Home Decor', link: '/home-kitchen/home-decor' },
        { name: 'Kitchen Appliances', link: '/home-kitchen/kitchen-appliances' }
      ]
    },
    {
      name: 'Beauty & Personal Care',
      icon: 'fas fa-heart',
      subcategories: [
        { name: 'Makeup', link: '/beauty/makeup' },
        { name: 'Skincare', link: '/beauty/skincare' },
        { name: 'Haircare', link: '/beauty/haircare' },
        { name: 'Fragrances', link: '/beauty/fragrances' }
      ]
    },
    {
      name: 'Sports & Outdoors',
      icon: 'fas fa-football-ball',
      subcategories: [
        { name: 'Sportswear', link: '/sports/sportswear' },
        { name: 'Fitness Equipment', link: '/sports/fitness-equipment' },
        { name: 'Outdoor Gear', link: '/sports/outdoor-gear' }
      ]
    },
    {
      name: 'Automotive',
      icon: 'fas fa-car',
      subcategories: [
        { name: 'Car Accessories', link: '/automotive/car-accessories' },
        { name: 'Bike Accessories', link: '/automotive/bike-accessories' },
        { name: 'Car Care', link: '/automotive/car-care' }
      ]
    },
    {
      name: 'Books & Stationery',
      icon: 'fas fa-book',
      subcategories: [
        { name: 'Fiction', link: '/books/fiction' },
        { name: 'Non-Fiction', link: '/books/non-fiction' },
        { name: 'Stationery', link: '/books/stationery' }
      ]
    },
    {
      name: 'Toys & Games',
      icon: 'fas fa-gamepad',
      subcategories: [
        { name: 'Action Figures', link: '/toys/action-figures' },
        { name: 'Board Games', link: '/toys/board-games' },
        { name: 'Educational Toys', link: '/toys/educational-toys' }
      ]
    }
  ];
  
  
  constructor(public homeService: HomeService,private router: Router,public authService:AuthService) { }

  ngOnInit(): void {
  }

  toggleSubmenu(categoryName: string) {
    console.log(this.activeSubmenu);
    this.activeSubmenu = this.activeSubmenu === categoryName ? null : categoryName;
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

  removeFromCart(item: any) {}

}
