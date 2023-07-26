# Week 2 Code Challenge
## Author:  Robert Njung'e
## Project Description
#### Introduction
For this challenge, you will be working on Flataculties, an app where you can vote for the cutest animal! You will use a local API and build out the frontend for our app, Flatacuties.
## Project Guidelines
Your project should conform to the following set of guidelines:
Core Deliverables
As a user, I can:
See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data
GET /characters

Example Response:

   {

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },

   {

     "id": 2,

     "name": "Mx. Monkey",

     "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

     "votes": 0   }, ….]
Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details 
GET /characters/:id

Example Response:
{

     "id": 1,

     "name": "Mr. Cute",

     "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

     "votes": 0

   },
 
When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.
### Running application
<a src = "">