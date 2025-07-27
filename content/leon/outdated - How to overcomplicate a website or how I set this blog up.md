---
tags:
  - Webdev
---

I started using Obsidian a few years ago for note taking. As I wanted to sync with my phone and computer and couldn't spend the money, I set up a repo in GitHub and used that for the time being.

Now the idea came up to create a 3D blog and I ideally wanted it based out of my notes app. *Ideally ideally* I'd write my notes and somewhere on the internet a website showcases them. *Ideally ideally Ideally* I'd like that without paying money.

Fear not - all of this is possible with 2-6 days of research and a high tolerance for patience. 

**Disclaimer:** this solution is based on my preferences and workflow. It may not fit for you and there a tons of good alternatives, I don't want to say this is the way you have to do it - but you can.
This write up is heavily based on [obsidian-zola](https://github.com/ppeetteerrs/obsidian-zola) (I basically modified some stuff to my liking but forked it as a starting point).

## 1. Setting up Obsidian with a GitHub repository
You need a GitHub account. Download Obsidian And GitHub Desktop to set up your first repo. Point Obsidian to your cloned repository folder on your computer (it can be empty). Obsidian will now create some mandatory files to style and interpret your notes.

As a side note: Obsidian uses markdown language and the Obsidian app works as an interpreter. If you deinstall Obsidian all your notes will still be open and human readable. Some features like note linking and graph view won't be possible anymore. But that's to be expected.

## 2. Adding your first notes and content
Once the general setup is down you can continue with the fun stuff. Add my [.gitignore](https://github.com/git-submariner/oddlyspecific/blob/6139030e1ecb1cc2b555becfee85b5b7413d58a8/.gitignore) to your repo to ignore some files, that are not needed or are different between different machines.

Create a note and start writing. Maybe even connect a few notes and link them. Afterwards just commit and push your content to the repository and all your stuff is saved.

## 3. Setting up the website
To setup the website I used [Netlifly](https://www.netlify.com/). Connect your GitHub and authorise [Netlifly](https://www.netlify.com/) to use your repositoies.

Now you need a [configuration file](https://github.com/git-submariner/oddlyspecific/blob/6139030e1ecb1cc2b555becfee85b5b7413d58a8/netlify.toml) that will be used as a pointer to build your website. I linked my customised one, if you want to start clean (I'd recommend) you should use [this starting point](https://github.com/ppeetteerrs/obsidian-zola/blob/0928fd651ab0aefaa0a765ba057ade1475ae52bc/netlify.example.toml). It's from the [obsidian-zola](https://github.com/ppeetteerrs/obsidian-zola) repo that makes all of this possible. Tweak the setting you are allowed to change but keep in mind  that SITE_URL, REPO_URL and LANDING_PAGE cannot be left empty. Be aware that LANDING-PAGE is slugified and expects "-" instead of " ". 

Once everything is added to the repo folder you can push it to GitHub. If everything works finde you should see your site building and check the URL if everything shows up.