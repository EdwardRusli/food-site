# food-site api
### Documentation
- path/api/register/
  - buat register akun baru, `POST` kesini dengan data username, password, email
- path/api/login/
  - buat login ke akun, `POST` kesini dengan data username, password. bakal di return `token` kalo butuh
- path/api/logout/
  - buat logout dari akun, `POST` kesini tanpa data apapun, bakal logout dari akun
- path/api/all_foods/
  - `GET` kesini buat dapetin list semua makanan dari semua user
- path/api/get_user_food_history/
  - `GET` kesini buat dapetin semua makanan yg pernah dicatet user yg lagi login
- path/api/add_food/
  - buat nambahin makanan ke catetan user yang lagi login, `POST` kesini dengan data nama makanan, carb, fat, protein, calorie

### Contoh
misalnya lagi dihost di `https://ayamgoreng.com`  
- register akun
  - `POST` ke `ayamgoreng.com/api/register` dengan data  
    ```
    {
        "username":"test123",
        "password":"12345678",
        "email":"test123@gmail.com"
    }
    ```
- tambahin makanan
  - `POST` ke `ayamgoreng.com/api/add_food/` dengan data  
    ```
    {
      "name":"cake",
      "carb":59000,
      "fat":300,
      "protein":6000,
      "calorie":257
    }
    ```
  - NOTE pake integer, semua satuannya dalam miligram, calorie dalam satuan kalori