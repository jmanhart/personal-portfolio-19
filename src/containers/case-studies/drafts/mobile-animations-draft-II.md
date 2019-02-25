# Mobile Animations Draft II
This is the landing spot for writing up the Mobile Animations case study.
this is a Skunkworks project
------

[Everett Rogers](https://en.wikipedia.org/wiki/Everett_Rogers) defined skunkworks as an "enriched environment that is intended to help a small group of individuals design a new idea by escaping routine organizational procedures."


### Overview
As the Garmin wearable line continues to grow more complex, it became crucial to ensure users have the proper education of the various features for each device. With close to 30 devices, it was clear we needed a higher fidelity solution that was easy to maintain and simple to scale. Our current animation solution relied on a very delicate process that had many pain points.

The initial outcome was to use change the entire manner in which we conceptualize, build and maintain our animations. Guided by clearly defined animation principals and harboring one source of truth.


### Explain The Problem
Our current animation solution relied on a very delicate process that had many pain points. Stakeholders were seeing builds very late in the process and rapid changes from testing would alter the UX nearly daily. Our process put a large amount of assumption on the head of engineers to dictate and assume motion nuances. The resulted in large amounts of very expensive and stressful churn.


 Explain the problem in a few sentences tie-ing back into the overview. This needs to be short.
- Single source of truth
- Accounting for last min changes/updates
- Imporving the review process
- Improving user experience

### The Solution
1. Audit, cull, document and archive our exisiting motion patterns within our product.
2. Create a single source of truth within code.
3. Create and adhere to a strict approval and review process future projects.


### Challenges
1. Getting everyone on board - Garmin is a large organization. Many stakeholders, Product Owners and development stacks to keep mind.
2. Planning and priority - Its easy to add a new library to a product. But planning out workflows, assembling teams, and planning for roll-out is very difficult. Many great ideas fail from poor planning and lack of follow thru.
3. Time - This the definition os a skunkworks project. "enriched environment that is intended to help a small group of individuals design a new idea by escaping routine organizational procedures."

### Discovery
I'll be honest from day one of working in the existing process I knew how I wanted to address our problem. I had used Lottie for aniamtions with my previous job and knew the great power it gave for consistency and a single source of truth. Lottie was easy to implament on the project at my old job because our team was very small. 

The first step in this issue was learning the process of how changes occur within a large product team and first we needed a solid proof of concept.

1. Building the MVP.
Since a simple conversation of "Let's use this..." would not work I needed to work to create an actual demo that could really do all the explaining for me. Good rule of thumb to live by as a Product Designer is to always keep your developers happy. I approached two devs (iOS and Android). Explained the idea, showed them some github links and pleaded my case. They were on-board and in a few short days had built various test environments to test the logistics of the builds.

2. Styling the MVP.
Simply showing the library was not enough. This issue was not only one for development but also required a solution for who would create the new animations and which teams would implement the solutions. Garmin has many different in-house teams that work across various segments. One of the in-house teams was a team of motion designers that handled all of our motion based work. I had never worked with or even known this team existed! within garmin. So with mvp in hand and a developer by my side basically cold-called this team (I didn't even know existed) in the hopes they would interrupt their busy workload and help us out. Garmin does an amazing job at hiring the best people and the nicest people and after a very nervous 5 min door knock and intro we had another ally! As a product designer I have never really worked with after effects outside of the basic projects in college 5 years ago. But over the next few days and working with this team of motion designers we tested, vetted and had built quite a few actual project related prototypes to feed into our MVP.

3. Building a work process
As friendly and excited the new team I found in the basement was they were not fully dedicated to service our segment. This workflow and solution hung in the balance if we could not secure resources to build the new animations needed. The group of visual designers that supported our team also provided the png's for tutorials that consisted of the old process we used to have. They would take my documentation build out frame-by-frame animations for the developers to animate. I had developed a close working relationship with this team after countless rounds of revisions and knew they were on board for a new process as much as I was. After presenting the problem and intended solution to the team lead, I learned that not only do they handle motion work but numerous team members actually have quite a large experience with after effects and were looking to use their skills. **This was the final piece** So after a knowledge transfer between the motion designers and our dedicated visual designers the last element of the problem was ramped up and ready to start producing

4. Improving the Review Process
Using a more advanced library to create higher fidelity animations and a single source of truth was great but the simple problem of **stakeholders needed to see the work sooner** still existed. All of our documentation exsts within Confluence, which is a web-based tool for companies to use for knowledge sharing. Due to the sensitive nature of our work we could not use outside lottie previewers to show work to stake-holders. 

#### Introduce Lottie Web
Working with the Lottie web API I could use the same deliverable as dev. With some simple HTML, CSS, and JS I built a simple preview app to allow for the viewing of the animations within our confluence documentation. 

**Confluence Setup**
Confluence is tricky and relies heavy on the use of various macro's. So using an HTML macro and housing our files of a simple internal web server. I could point an iFrame to our server and allow for real-time viewing of the actual animations. With some very simple scripts was able to add some functionality 





### Bringing it all together
With the styled MVP with a real-world Garmin example loaded, a proper workflow defined and scoped out, and proper liscenseing vetted with Legal (this part was fun on my end). It was time to prep the various decision makers within our team in the hopes to implament and start rolling out solutions.

### Roadblock
With unforseable events and actions that arose this final meeting and presentation never took place. Events well without of my control put an absolute stop on this intiative and for all forseable future killed the project.

_utter deflation_

For the better part of 3 months lunches and extra time I could find within my workload seemed to be in vain. All the research, development and planning was to be shelved.





### Impact


### Project Learnings
- Presentation skills and public speaking
I had learned by trial by fire that explaining problems and solutions in some cases became more important than the actual solution. 








–––––––––––––––
The first step was basic research on what other native applications were doing to handle this issue. Turns out a lot of teams have had this issue of handling native animations between different platforms. I had at a previous 

The first step was to review every aspect of the product and try to list all important components on a paper, then group elements by their usages. For example, style group could be basic assets such as colors and fonts, and components group would include buttons, cards, tables, filters, and etc.
During this process, many inconsistencies emerged. Without worrying out them at that point, I documented everything in the form of screenshots.



This project was came from my identification of a problem and working towards a solution. I was **not** the only one working on this project and had many very talented people help in the solution but this was my own