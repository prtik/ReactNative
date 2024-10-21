<!-- Finance Tracker App -->

A robust finance tracking app built with React Native, Material UI, and Redux. This app allows users to log their income, categorize expenses, and track their financial status in real-time.

Below point are explained in detail :

- Project Setup
- Running the App
- Overview of Key Features

<!-- -Project Setup -->

To set up this project on your local machine, follow these steps:

Prerequisites
Ensure you have the following installed on your system:

Node.js (>= 14.x)
npm or yarn
React Native CLI
Android Studio or Xcode (for iOS)

1. Clone the Repository:

Clone this repository to your local machine using the following command:
git clone https://github.com/prtik/ReactNative.git

2. Open project where clonned

3. run below cmd
   npm install

4. Run on a Simulator or Physical Device:

For Android:
npm run-android

For iOS:
npm run-ios

<!-- - Overview of Key Features -->

1. Login Screen:

The app starts with a login screen where users enter their credentials.

2. Income Input:

After logging in, users are prompted to enter their income. This information is essential for calculating the total balance and managing expenses.

3. Dashboard:

The dashboard provides a categorized overview of all expenses.
Users can view expenses grouped by categories such as Groceries, Rent, Bills, Subscriptions, etc.
The dashboard also shows the total expense and remaining balance based on the user's input income.
Users can add new expense categories.

4. Add Expenses:

Each category has an option to add expenses.
When a user clicks on a category, they can add expense details such as:

- Amount
- Description
  The app displays the updated list of expenses and calculates the total expense for each category.

5. Persistent Data:

All income, categories, and expense data are stored and persisted using Redux and Redux Persist, ensuring that data remains intact even after closing the app.

<!-- Technologies Used -->

React Native: For building the mobile application.

Redux Toolkit: For managing the application's state (income, categories, expenses).

Redux Persist: To persist the state across app restarts.

React Navigation: For handling navigation between screens (Login, Income Entry, Dashboard).

Material UI: For building a visually appealing and user-friendly interface.

<!--for app testing use below login credential-->
 <!-- email: test@gmail.com | password: 123456 -->
