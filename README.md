# Chess
 [see v2 walkthorugh - Youtube](https://youtu.be/R3hvk7GSI5w)

 
 ## Tables of Contents

* [Background](#background)
* [Images](#images)
* [Technologies](#technologies)
* [Requirements to run the project](#running-the-project)


## Background
I set out to make a chess game in Spring, mainly to practice programming. It wasn't so much about making new app that does something different, as much as just having a practice project to add to my portfolio. 

## Images
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/38586415/128371710-83db9548-f420-469a-b94b-47b54411cd98.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/38586415/128371776-d904cd75-ac2d-46dd-a803-00ece9a35043.png">
<img width="1440" alt="image" src="https://user-images.githubusercontent.com/38586415/129584378-350e2fe3-f5c1-4a35-917d-b999b8e9a93a.png">


## Technologies
Technologies used in this project were:
- Spring Boot MVC
- Hibernate
- HTML
- SASS/CSS
- TypeScript/JavaScript
- Gradle
- H2 Database

## Running the project
You download the project folder. Ensure that node is installed as it uses node to compile typescript to javascript and scss to css. Cd to the diretory in the terminal.
Run `npm install` to install node dependencies.
Then run `./gradlew bootRun`
You should then shortly see a message stating the scss and typescript is compiling, followed by Spring Boot output.
If the wrapper for some reason does not work, install gradle and run the command `gradle bootRun` instead.
