# Self Development Website
![Screenshot 2024-06-15 213803](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/8f4261c6-04e1-4f0e-a9d1-99999bb8cf99)


Welcome to the Self Development website! This platform is designed to help you organize your daily life with various tools and resources. 
## Technical Implementation
- The Self Development website is built using HTML, CSS, and JavaScript. The front-end interface is designed with HTML and styled using CSS to provide a visually appealing and user-friendly experience. JavaScript is utilized to handle the functionality of various features and manage user interactions.

### Local Storage
   Local storage is used to persist user data across sessions. This includes:

- User Data: Usernames and passwords are stored in local storage for authentication purposes.
- TODO List: Tasks added by the user are saved in local storage to ensure they are available even after the browser is closed.
- Notes: Notes created by the user are also stored locally, allowing users to retrieve their information at any time.
- Pomodoro Timer: Timer settings and session information are maintained in local storage to track work and break periods.
- Resources Manager: Resources and their categories are saved in local storage for efficient management.
- Favorite Quotes: Users can save their favorite quotes, which are stored locally for easy access later.

### JavaScript Functionality
JavaScript is employed to manage the dynamic aspects of the website:

- Form Handling: Both login and signup forms are validated using JavaScript to ensure correct input formats. Errors are displayed in modal dialogs if validation fails.
- Task Management: Adding, marking as complete, and deleting tasks in the TODO list are handled via JavaScript.
- Notes Management: Users can create and delete notes, with changes immediately reflected in the interface.
- Pomodoro Timer: JavaScript manages the countdown for work and break intervals, providing visual feedback to the user.
- Resource Management: Adding and categorizing resources are managed dynamically.
- Quotes: Daily motivational quotes are displayed, and users can browse and save their favorite quotes.
- 
### ScrollReveal Animations
- The ScrollReveal library is integrated to enhance the user interface with smooth, scroll-based animations. This makes the interaction with the website more engaging and visually appealing.


## Features

 - **TODO List**: Keep track of your tasks and stay organized.
 - **Notes**: Jot down your thoughts, ideas, and important information.
 - **Pomodoro**: Improve your productivity with the Pomodoro technique.
 - **Quotes**: Get inspired with daily motivational quotes.
 - **Resources Manager**: Manage your resources efficiently.


### TODO List
![Screenshot 2024-06-15 214123](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/b57ed958-23bc-4883-bdd0-ef455250d2da)

  - **Add Tasks**: Easily add new tasks to your to-do list to track what needs to be done.
  - **Mark as Complete**: Check off tasks as you complete them to stay motivated and see your progress.
  - **Delete Tasks**: Modify task details or remove tasks as needed to keep your list up-to-date.


### Notes
![Screenshot 2024-06-15 214417](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/39e55c60-98f8-41cb-8801-3265083e818e)
  - **Create Notes**: Write your thoughts, ideas, and important information in a structured format.
  - **Delete Notes**: Update or remove notes as your ideas evolve.

### Pomodoro
![Screenshot 2024-06-15 214452](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/2b008dcb-8583-4b32-ba05-6e608adb4206)
  - **Timer**: Use the Pomodoro technique to break work into intervals (typically 25 minutes), separated by short breaks.
  - **Track Work and Break Periods**: Monitor your work sessions and breaks to ensure balanced productivity.

### Resources Manager
![Screenshot_15-6-2024_215330_](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/52b1903a-6954-41d5-aca6-b2d6cce5a49d)
  - **Add Resources**: Keep track of various resources such as links, documents, and tools.
  - **Categorize Resources**: Organize resources into different categories for easy management and many fields like links and status.

### Quotes 
![Screenshot_15-6-2024_215345_](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/c50dcc61-32de-4098-b098-7fd1ea557b03)
  - **Daily Motivational Quotes**: Receive a new inspirational quote each day to keep you motivated.
  - **Browse Quotes**: Explore a collection of motivational quotes to find inspiration whenever you need it.
  - **Save Favorite Quotes**: Mark quotes as favorites to easily access them later.

## Registration methods 
#### login 
![Screenshot_15-6-2024_215412_](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/1c3c3766-2b1e-481b-82b8-c006c9c3d75f)

  - login functionality with local storage displays error messages in a modal if the login fails, and adds scroll-based animations to elements on the page using the ScrollReveal library.
  - check if the username in the local storage or not.
  - Redirecting to the home page upon successful login.
  - Providing user feedback through modal dialogs and enhancing the user interface with animations.

#### sign up
![Screenshot_15-6-2024_215439_](https://github.com/mohameddhanyyy/Self-Development/assets/130695667/a817f47d-18cb-4f4d-bbf6-53c4000eeb8b)

  - Validating the username and password format.
  - Ensuring the username is unique.
  - Saving valid user data to local storage.
  - Redirecting to the login page upon successful sign-up.
  - Providing user feedback through modal dialogs and enhancing the user interface with animations.

### after Registration you now can back again to our website with a saved session and if you want you can logout from Self Development  


 

