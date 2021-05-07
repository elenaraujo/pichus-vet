[![license-img]][license-url] [![linkedin-img]][linkedin-url] [![behance-img]][behance-url]

<p>
  <a href="https://github.com/elenaraujo/pichus-vet">
    <img src="images/banner.png" alt="Pichus logo" width="900">
  </a>
</p>

***⚠ This project still doesn't have a MVP, so it is not available in production yet. ⚠***
<br>

### 📚 About the project
This is a personal project that I idealized by my self with the purpose of learning the basics about how to develop an end-to-end web system, from the mockup prototype *(that will be available on Behance soon)* to the backend API and database. The project interface is in Brazilian Portuguese.

**Hope you appreciate my project, and if you do, let me know that by giving it a star ⭐.**
<br>

### 🐱 What does it do
Pichus-Vet is the web system of Associated Veterinarians Pichus, where the customer can schedule appointments for their pets and check exams results online. Associated veterinarians can also use the system to register a new appointment, generate a medical prescription with QR code and upload exams results.
<br>

### 🔧 Setup
At the very first time you clone the repository you'll need to setup both **api** and **front** project before running it locally. Therefore, acess the `api` folder from the root directory and run the command `make setup`. Await while the project dependencies are downloaded. After that, go back to root folder, acess the `front` folder and run the command `make setup` again. Await the download.
<br>

### 🏃🏼‍♀️ Running locally
**Database**
To run the project locally you will need `mongodb` installed and running. I do not recommend installing and running mongo directly on your machine. Run a Docker container instead. The official Mongodb Docker image can be obtained [here][mongo-docker].

**API**
With mongo running, just access the `api` folder from the root directory and run the `make run` command. The api will be listening by default on port `8080`.

**INTERFACE**
To run the interface, simply access the `front` folder from the root directory and run the `make run` command. The interface will be available by default on port `3001`, which can be accessed by the web browser at http://localhost:3001.
<br>

<!-- ASSIGNMENTS -->
### 💌 Assigns
**Original logo made with love by [Rafael Karv][rafaelkarv] ❤**

**Icons from [www.flaticon.com][flaticon]**
- Icons made by [Freepik][freepik]
- Linkedin logo icons in free vector created by [Google][google]

**Photos from Unsplash by** [Jorge Salvador][jorgesalvador], [Glenn Han][glennhan], [Evan Wise][evanwise], [Sara Kurfeß][sarakurfeß]

<!-- LINKS AND IMAGES SETUP -->
[license-img]: https://img.shields.io/badge/license-MIT-c97f86
[license-url]: https://github.com/elenaraujo/pichus-vet/blob/master/LICENSE.txt
[linkedin-img]: https://img.shields.io/badge/linkedin-elenaraujo-%2373c3bc
[linkedin-url]: https://www.linkedin.com/in/elenaraujo/
[behance-img]: https://img.shields.io/badge/behance-araujoelen-c97f86
[behance-url]: https://www.behance.net/araujoelen/

[mongo-docker]: https://hub.docker.com/_/mongo

[jorgesalvador]: https://unsplash.com/@jsshotz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[glennhan]: https://unsplash.com/@sageforest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[evanwise]: https://unsplash.com/@evanthewise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
[sarakurfeß]: https://unsplash.com/@stereophototyp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText

[freepik]: https://www.freepik.com
[flaticon]: https://www.flaticon.com/br/
[google]: https://www.flaticon.com/br/icone-gratis/logipto-do-linkedin_61109?term=linkedin
[rafaelkarv]: https://www.behance.net/rafaelkarv
