# City Patrol

City Patrol is a fun small game where you can experience the thrill of catching criminals as well as make, update and favorite them. There are multiple cities for you to catch all the criminals and you can also catch your own criminals!

## Description

This is a local hub for creating, updating, deleting, favorite, and catch your very own criminals. but first you have to create an account and login to save your favorite criminals. You can also visit jails to look at the criminals that you caught. 

## Set up

* First Fork and clone repo to local machine.
* Second run
```
bundle install

npm install --prefix client
```
there are starter code in the db/seeds.rb so just run 
```
rails db:migrate db:seed 
```
after that to start your server run 
```
rails s

npm start --prefix client
```

## Usage

* First make an account if you haven't already then login with the account you just created  
* then read the instruction written one the welcome page, and when you're ready press the 'X' button
* Next pice a city of your choosing and click the arrow button that says "Go Here" 
* then make sure to at least look through all the criminals because the more you remember the better for the game
* And when you're ready click on the 'CATCH!' button to start playing!
* There is no time limit so you can take your time and figure out who the criminal is and who isn't
* To figure out who is the criminal you have to look at the criminals displayed on the top and see if there are any of them are in the computer down below.
* If your right it will tell your that you are right and if your wrong it will also tell your that you are wrong.

## Navigation
* From the welcome page press the 'X' button to see:
* cities, where you can select which city you want to go to, in the cities you can visit:
    * Jail to look at all the caught criminals
    * catch button to go can catch more criminals
    * back to cities button to go back to cities
    * add criminals incase you want to make your very own criminals
* logout button where you can log out
* how to play button to take you back to the welcome page where you can see how to play the game.

## Collaborating

Pull Requests are welcome on [GitHub](https://github.com/uyggnues/project). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](https://www.contributor-covenant.org/version/1/4/code-of-conduct/) code of conduct.

## License 
The program is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT)


### Walkthrough
<a href=https://youtu.be/eM1fCkEsDrw><img id="img-with-fallback" class="style-scope ytcp-img-with-fallback" src="https://i9.ytimg.com/vi_webp/8-kMNw-tcPk/mq2.webp?sqp=CJi14Z0G-oaymwEmCMACELQB8quKqQMa8AEB-AH-CIAC0AWKAgwIABABGH8gHSgTMA8=&rs=AOn4CLAU0TLT8KAHRD9w2kpUmGUYm1wSUw"/></a>