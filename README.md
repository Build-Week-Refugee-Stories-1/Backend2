# Backend2
Backend backup. 
https://whimsical.com/EhTUeAwAysrT4uwRm7S2Jg


## Register User
***POST <https://foodie-passport.herokuapp.com/rrp/auth/register***>
**Requirements to register:**
- first Name
- last name
- email
- password
**Example sending a request to register a new user**
  *     {   
            "fName" : "Shannon",
            "lName" : "Reed",
            "email": " shannon@gmail.com
            "password" : "thisisagoodone"
        }
### Users Schema
| Fields     	| Data Type        	| Constraints                                         	|
|------------	|------------------	|-----------------------------------------------------	|
| id         	| integer:unsigned: | auto-increments: primary key: created by database: 	|
| fName 	    | string           	| required                                            	|
| lName 	    | string           	| required                                            	|                            
| email      	| string           	| required: unique:                                    	|
| password   	| string           	| required                                            	|
## Logs user in
***POST <https://refstoriesbackend.herokuapp.com//login***>
**Returns login token when user logs in**
**Requirements to login:**
- existing email
- password
**Example sending a request to login**
  *     {   
            "username" : "nick",
            "password" : "1003"
        }
#ENDPOINTS
| Methods 	| Endpoints                         | Description                                      	|
|---------	|----------------------------------	|--------------------------------------------------	|
                             	|
| POST    	| /auth/login                  	| logs in a user                                   	|
| GET     	| /admins                       	| gets all admins                                  	|
| GET     	| /admins/id                    	| gets a user by admins id                          	|
| PUT     	| /admins/id                    	| updates a admins infomation   
##Stories
***GET all restaurants <https://refstoriesbackend.herokuapp.com/stories/3>
**Returns a array of restaurants**
*     [
      {id: 1, name: 'Alice',
        story: 'I am half English and half Welsh; I currently live in Albania where I work as a freelance writer. I left England aged 21 because I didn’t like the country and didn’t see a future there; I didn’t like the weather, the people, the government, the culture, or the way society was. I spent 10 years in Malta before living for almost a year in Cyprus. I do not consider myself English anymore and I know very little about what life is like there. Instead I prefer to consider myself a world citizen, someone who can travel, learn, and explore. Whilst I am proud of my Celtic/English heritage, it does not define me. I feel I have more to give in other places.',  
        quote: '"I enjoy having the ability to make people see beautiful things in their country that they may have previously taken for granted."' },
        {id: 2, name: 'Erin',
        story: 'I was born in the United States and lived there for 26 years before falling in love with a Scottish woman. It was impossible for her to move to the States so I came to the UK instead, pursuing a Masters in Environmental Education at the University of Edinburgh in 2008. I worked in science outreach at a variety of places including Our Dynamic Earth, the Edinburgh International Science Festival and the Dundee Science Centre before finding my current job at the University of Dundee College of Life Sciences. I believe I have contributed to the education of hundreds, if not thousands, of school children in Scotland in the past 7 years, and helped hundreds of scientists and engineers to go into primary and secondary schools to share their work and inspire children to take STEM subjects. Being in the UK as an immigrant has not always been easy;',
      quote: 'I help scientists reach out to school children and share their research and love of science',},
        {id: 3, name: 'Rotimi',
        story: 'The future belongs to those who believe in the beauty of their dreams. I didn’t really want to move out of my country, but at one point, I looked at where I was and thought this is not where I’m supposed to be, I have to take a step in order to get to where I’m going. I’m an Electrical Engineering graduate, but I havent practiced it because of the unemployment rate at home. After graduating, I went straight into business. After working for a while, I realized that I was in my comfort zone and couldnt see growth. For things to get better, I had to get better.  My sister, who lives in the USA, had been telling me I needed to move and do something more. I always answered when it’s time. Finally the time came — I contacted her, she linked me up with her husband who was in Estonia doing his Ph.D., and after speaking with him, I decided to come here.;',
        quote: '"I’m always curious to learn from people of different backgrounds. I don’t let my ego get in the way."',},
        {id: 4, name: 'Rosalie',
        story: 'Born in Guinea Bissau, Rosalie took a journey in search of a better life. At the age of fifteen, she went to Dakar to join her older sister and worked there for two yearsIn 1988 she went back to her village where she met her husband. Together they decided to migrate to MauritaniaIn Bissau there are no jobs. We are a big family so everybody needs to contribute. We chose Mauritania because, among the countries of West Africa, it is the one with more job availability and whose currency weighs more.;',
        quote: '"I prefer to stay in Africa, even if this means having less money. I prefer my country to anything else',},
        {id: 5, name: 'Rotim',
        story: ' future belongs to those who believe in the beauty of their dreams. I didn’t really want to move out of my country, but at one point, I looked at where I was and thought this is not where I’m supposed to be, I have to take a step in order to get to where I’m going. I’m an Electrical Engineering graduate, but I havent practiced it because of the unemployment rate at home. After graduating, I went straight into business. After working for a while, I realized that I was in my comfort zone and couldnt see growth. For things to get better, I had to get better.  My sister, who lives in the USA, had been telling me I needed to move and do something more. I always answered when it’s time. Finally the time came — I contacted her, she linked me up with her husband who was in Estonia doing his Ph.D., and after speaking with him, I decided to come here.;',
        quote: '" always curious to le
                
        ]

***GET restaurants by id <https://refstoriesbackend.herokuapp.com/stories/3>
##### ENDPOINTS
| Methods 	| Endpoints                         | Description                                      	|
|---------	|----------------------------------	|--------------------------------------------------	|
| GET     	| /rpp/restaurants                  | gets all restaurants                              |
| GET     	| /rpp/restaurants/id               | gets a restaurant by restaurant id                |
| GET     	| /rpp/restaurants/city/id          | gets a restaurant by city id  