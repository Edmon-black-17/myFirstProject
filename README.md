# WESTZONE

# Step 1
1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository

# Step 2 /List Products\
1. Create Products Array
2. Add Product Images
3. Render Products
4. Style Products

# Step 3 /Add Page Routing\
1. |npm i react-router-dom|
2. Create Route For HomeScreen
3. Create Router For ProductScreen

# Step 4 /Create Node.js Server\
1. Run |npm init| In Root Folder
2. Update package.json Set` type: "module"
3. Add .js To Imports
4. |npm install express|
5. Create` server.js File
6. Add Start Command as node backend/server.js
7. Require Express
8. Create Route For / Return Backend is Ready
9. Move` products.js(data.js) From Frontend To Backend
10. Create Route For` /api/products
11. Return Products
12. Run |npm start|
13. From (chrome.google.com) Download` JSON Viewer

# Step 5 /Fetch Products From Backend\
1. Set` proxy In package.json
2. |npm install axios|
3. Use` useState Hook
4. Use` useEffect Hook
5. Use` useReducer Hook

# Step 6 /Manage State By Reducer Hook\
1. Define Reducer
2. Update Fetch Data
3. Get State From useReducer
4. |npm install use-reducer-logger --force|

# Step 7 /Add Bootstrap UI Framework\
1. |npm install react-bootstrap bootstrap|
2. |npm install react-router-bootstrap| for LinkContainer
3. Update` App.js With Using` Layout and Components from react-bootstrap

# Step 8 /Create Product and Rating Component\
1. Create Rating Component
2. Create Product Component
3. Use Rating Component in Product Component

# Step 9 /Create Product Details Screen\
1. Fetch Product from Backend
2. Create 3 Columns for Image, Into and Action
3. Showing Product Name in the Title |npm install react-helmet-async|

# Step 10 /Create Loading and Message Component\
1. Create Loading Component
2. Use Spinner Component
3. Create Message Component
4. Create` utils.js to Define getError Function

# Step 11 /Implement Add to Cart\
1. Create React Context
2. Define Reducer
3. Create Store Provider
4. Implement Add to Cart Button Click Handler

# Step 12 /Complate Add to Cart\
1. Check Exist Item in the Cart
2. Check Count in Stock in Backend

# Step 13 /Create Cart Screen\
1. Create 2 Columns
2. Display Items List
3. Create Action Column

# Step 14 /Complate Cart Screen\
1. Click Handler for inc/dec Item
2. Click Handler for Remove Item
3. Click Handler for Checkout


# I'M GONNA TO IMPROVE MY PROJECT WITH { REDUX } AND BUILD IT FROM SCRATCH...

# *Step 1 /Installing Tools\
1. Install |VS Code| Editor
2. Install |google.com/chrome| Browser
3. Install |node.js|
4. Install |mongoDB.| Database
5. Install |POSTMAN| Platform for API

# *Step 2 /Design Website Template\
1. Create Very Basic Template 
2. Create Header, Main and Footer

# *Step 3 /Display Products\
1. Create Products div
2. Add Product Attributes
3. Add Link, Image, Name, Rating and Price

# *Step 4 /Create React App\
1. |npx create-react-app frontend|
2. |npm start|
3. Remove Unused Files
4. Transfer the Items of Initial Folder to React App

# *Step 5 /Create Rating and Product Component\
1. Create Components/Rating.js
2. Create div.rating
3. Style div.rating, span and Last span
4. Create Product Component
5. Use Rating Component

# *Step 6 /Build Product Screen\
1. Install |npm install react-router-dom|
2. Use BrowserRouter and Route for HomeScreen
3. Create HomeScreen.js
4. Adding Product List Code There
5. Create ProductScreen.js
6. Add New Route from Product Details to App.js
7. Create 3 Columns for Product Image, Info and Action

# *Step 7 /Create Node.js Server\
1. Run |npm init| in Root Folder
2. Update` package.json Set` type: "module"
3. Add` .js to Imports
4. Install |npm install express|
5. Create` server.js File
6. Add Start Command as Node backend/server.js
7. Require express
8. Create Route for / Return Backend is Ready.
9. Move` product.js from Frontend to Backend
10. Create Route for /api/products
11. Return Products
12. Run |npm run serverDev| then |npm start|
13. From (chrome.google.com) Download` JSON Viewer
14. Install |npm install --save-dev nodemon|

# *Step 8 /Load Products from Backend\
1. Setting` proxy
2. Edit` HomeScreen.js
3. Define Products, Loading and Error
4. Create` useEffect Hook
5. Define` async fetchData and Call it
6. Install |npm install axios|
7. Get Data from /api/products
8. Show Them in the List
9. Create Loading Component
10. Create Message Box Component
11. Use Them in HomeScreen

# *Step 9 /Install ESlint for Code Linting\
1. Install VS-Code ESlint extension
2. |npm install -D eslint|
3. Run ./node_modules/.bin/eslint --init
4. Create ./frontend/.env
5. Add SKIP_PREFLIGHT_CHECK=true

# *Step 10 /Add Redux to HomeScreen\
1. Install |npm install redux react-redux --force|
2. Install |npm install redux-thunk|
3. Create` store.js
4. InitState = {products: []}
5. Reducer = {state, action} => switch LOAD_PRODUCTS: {products: action.payload}
6. Export default createStore(reducer, initState)
7. /Add to Chrome\ the` Redux DevTools from google.com
8. Edit` HomeScreen.js
9. ShopName = useSelector(state => state.products)
10. Const dispatch = useDispatch()
11. UseEffect(() => dispatch({type: LOAD_PRODUCTS, payload: data}))
12. Add Store to index.js

# *Step 11 /Add Redux to ProductScreen\
1. Create Product Details Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in ProductScreen.js
4. Add` /api/product/:id to Backend api

# *Step 12 /Handle Add to Cart Button\
1. Handle Add to Cart in ProductScreen.js
2. Create` CartScreen.js

# *Step 13 /Implement Add to Cart Action\
1. Create` addToCart Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in CartScreen.js
4. Render` cartItems.length

# *Step 14 /Build Cart Screen\
1. Create 2 Columns for Cart Items and Cart Action
2. CartItems.length === 0 ? cart is empty
3. Show Item Image, Name, Qty and Price
4. Proceed to Checkout Button
5. Implement Remove from Cart Action

# *Step 15 /Implement Remove from Cart Action\
1. Create` removeFromCart Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in CartScreen.js

# *Step 16 /Connect to MongoDB\
1. Install |npm install mongoose| in the Root Folder
2. Install |npm install bcrypt| in the Root Folder
3. Install |npm install express-async-handler| in the Root Folder
4. Connect to MongoDB
5. Create` config.js
6. Install |npm install dotenv|
7. Export MONGODB_URL
8. Create` models/userModel.js
9. Create` userSchema and userModel
10. Create` models/productModel.js
11. Create` productSchema and productModel
12. Create` userRoute
13. Seed Sample Data

# *Step 17 /Create Sample Products in MongoDB\
1. Create` models/productModel.js
2. Create` productSchema and productModel
3. Create` productRoute
4. Seed Sample Data

# *Step 18 /Create Sign-in Backend\
1. Create` /signin api
2. Check Email and Password
3. Generate Token
4. Install` |npm install jsonwebtoken| in the Root Folder
5. Create` utils.js in Backend Folder
6. Install` |npm install dotenv| in the Root Folder
7. Return Token and Data
8. Test it by using Postman

# *Step 19 /Design SignIn Screen\
1. Create` SigninScreen
2. Render` email and password Fields
3. Update` Header Based on User Login

# *Step 20 /Implement SignIn Action\
1. Create` Signin Constants, Actions and Reducers
2. Add Reducer to store.js
3. Use Action in SigninScreen.js

# *Step 21 /Create Register Screen and Backend API\
1. Create` API for /api/users/register
2. Insert New User to Database
3. Return User Info and Token
4. Create` RegisterScreen.js
5. Add Fields
6. Style Fields
7. Add Screen to App.js