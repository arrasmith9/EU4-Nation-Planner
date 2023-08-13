# Europa Universalis IV Nation Planner

The Europa Universalis IV Nation Planner is an application designed to provide tools to compare different nations to determine what nation you want to play next in the game "Europa Universalis IV". While initial releases will have simple, high-level comparisons, long-term functionality will include the ability to apply bonuses from religions, idea groups, government reforms, policies, and much more to a nation of your choice. This will allow the user to see the full extent of what is possible before spending the time in-game to see if it is possible.

### Structure and Use

Structurally speaking, the application in its current state is simple. The user can select a field to filter on, and see nations that fit that critera. For example, searching for "Religion" equal to "Catholic" will net all nations who are initially set to Catholic for their religion. Users can then select one or more nations to compare, and upon clicking the compare button, will be shown a series of cards providing the basic information that defines the selected nations.

Under the hood, the application is serviced by a Node.js server querying data on a Postgres SQL database. The application itself is built from the React framework. The reason behind these choices is equal parts familiarity as well as new (to me) options to learn. While I have used SQL both during school as well as on the job, I had never used Postgres to manage it. I have made Node.js servers before, and after experimenting with other languages, I found it to be the best option for the timeframe I had.

Using React was a choice that was built of my work experience, as well as the new direction they've taken it. I purposefully used hooks here in order to learn how hooks were used and to keep up with the trends of the web development world. Thus, as I have learned the way hooks are used over time, there is a level of amatuerism with the way the application is built and structured code-wise.

### Release and Use

I hesitate to formally release the project for user consumption in its current state due to the limited functionality presented as well as the amatuer-looking design. Thus, I am keeping the application on my local machine for now. Ideally, time and input from those in my personal life who are not actively working on it will be able to provide a level of feedback in terms of coloring, design, and general flow. Once I have determined that the application is visually and functionally ready, I will find myself in the next problem: domain purchasing. While the money for server hosting is not necessarily a problem, what is a problem is the name. The name is not set in stone, and a stronger application name will do wonders for the future of this project.

Once those issues have been resolved, I will proceed to make a build and push it up for all the world to judge, and ideally actual players of the game to experiment with. The release will then coincide with a more structured development path. Ideally, it would be a feature (or sub-feature) at a time to ensure a smoother release process and less opportunities for conflicting issues to arise.

Regarding local use, the application will rely on a database structure that I have put in place. That data is served by a Node.js codebase, which will be found on a separate repository. The sheer amount of data that will ultimately exist makes sharing seem like an insurmountable event, and it may rely on a domain purchase before moving forward. Having said that, the application can run on hard-coded data for most of the operations. Unsurprisingly, the network calls for data will not be captured by this choice.

If a local run is desired, the basic commands are necessary. Starting off, enter the following command to install dependencies:
```
npm install
```
Once the dependencies are installed, the application can be started. Run the following command to start up the application:

```
npm start
```

The application will then render. Remember, no network calls (that is to say, filter searching) can be used.

### Roadmap

Due to the nature of how this is being developed, as well as the fluidity of the actual game's development, the roadmap is not a concrete plan. Features may be pushed back, cut, or become obsolete as time goes on.

* Basic Nation Comparer - In Progress
* Robust Filter/Search System
* Idea Group Viewer/Selector
* Nation Planner
  - National Ideas
  - Idea Groups
  - Fluid Functionality Sliders (Stability, Army Tradition, etc.)
  - Policies
  - Government Reforms
  - Religion Bonuses
  - Estate Bonuses
  - "Trading in..." Bonuses
  - Misc. Permanent Bonuses (e.g. "Until the end of the game." bonuses)
  - Nation-unique Functionality
* Nation Planner Compare Tool