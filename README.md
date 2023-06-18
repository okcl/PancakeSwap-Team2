** We are now converting this to [react native version](https://github.com/okcl/React-App-Team2). **




# Pancakeswap project

1. [About Trello](#trello)
2. [Developing landing page](#app-html)
3. [How to work with branches](#branches)
    1. [Creating a task branch](#creating-a-task-branch)
    2. [Getting the updates for your branch from development](#getting-the-updates-for-your-branch-from-development)
    3. [Incorporating a finished task on development](#incorporating-a-finished-task-on-development)


---
# Trello
You need to join trello -->
    [Our Trello Page](https://trello.com/invite/b/MO9jiL4e/ATTIf428aa9db880d6832a5e3330fc0274aeF8E5AD87/web-development)


## You choose the task that you wanted to do from to-do list and click it
![trello main page](https://i.imgur.com/Jn7S9PG.png)


## You have to click join to claim the task and start working on it.
![trello task selection](https://i.imgur.com/Og2dl6L.png)

---

# App html

This is the page that we are currently working on. Task parts are divided clearly. You just put your code at your part.

![branch working system](https://i.imgur.com/Fop1OCO.png)


---
# Branches

We work on development branch but **we don't** make changes on it. You will **create new branch** for the task that you assigned yourself.




![branch working system](https://i.imgur.com/DwiR2BF.png)


## Creating a task branch

This is an exapmle to work on for the task1, so you have to change it depending on yours.

```
$ git checkout development

Switches to branch to development

$ git pull origin development

Get all up to date changes from development branch

$ git checkout -b task1 development

Switched to a new branch "task1"

```

## Getting the updates for your branch from development

```
$ git checkout development

Switches to branch to development

$ git pull origin development

Get all up to date changes from development branch

$ git checkout task1

Switches to your working branch

$ git merge development

Merges the updates to your branch
```


## Incorporating a finished task on development

After pushing the code to your own branch you need to make a pull request from the webpage.


**Simply click on branches**
![github main page](https://i.imgur.com/WY7Eq9F.png)


**Click "Pull Request" for the branch that you want to merge**
![github main page](https://i.imgur.com/XxFW4aU.png)

**After choose Development for destination branch, leave a comment about the changes that you did and make the pull request.**
![github main page](https://i.imgur.com/lvqwBZb.png)

**Now merge button will appear for you and after you click it will be merged to development**


[Go to top](#pancakeswap-project)



