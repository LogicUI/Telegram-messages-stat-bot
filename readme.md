## Project Description (In progress)
Telegram message stats bot is an interactive bot used to keep track of messages display them on a stat chart


## Coding Standards

The project coding standard will use Airbnb style guide and prettier which is enforced by ESLINT more details can be found in the links below

[Quick Guide in setting up eslint, airbnb and prettier](https://dev.to/bigyank/a-quick-guide-to-setup-eslint-with-airbnb-and-prettier-3di2)
[airBnB style guide link](https://github.com/airbnb/javascript)


## Git Branching Model & Release Strategy

### Master Branch

The source code of HEAD always reflects a production-ready-state.

- Permanent
- Protected from deletion
- Modification from pull request only

### Develop Branch

The source code of the HEAD always reflects a state with the latest delivered development changes for the next release.

- Permanent
- Protected from deletion
- Modification by pull request only

### Supporting branch

- Temporary
- Should be deleted when merged

| Types of Supporting Branch | Description                                                                                                        | Branch off from           | Merge back into           | Naming Conversion      | Example                               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------- | ------------------------- | ---------------------- | ------------------------------------- |
| Feature                    | Used to develop new features                                                                                       | develop                   | develop                   | feature/ticket-summary | feature-recipe-title                  |
| Bugfix                     | Arise from the necessity act upon an undesired state of development                                                | develop, release branches | develop, release branches | bugfix/ticket-summary  | bugfix-title-does-not-display-clearly |
| hotfix                     | Hotfix branch arises from the necessity to act immediately upon an undesired state of a live production version.   | master                    | master develop            | hotfix/ticket-summary  | hotfix/login-error                    |
| Release                    | Release branch supports the preparation of a new production release, reflects the desired state of the new release | develop                   | master, develop           | release/release-number | release/1.0.0                         |

### Commit Messages

Commit messages should follow based on the branch name assigned. E.g Feature/title.

Any feedback or changes made after a PR is made should edit the existing commit name instead of creating a new commit.

this can be done using the following command

```
after adding some changes to local git repo..
git commit --amend ( modifies the existing branch with new changes)
```

### Merge Strategy

**Squash, fast-forward the only** is set to the default and only merge strategy. If the source code is out of date with the target branch. reject merge request. Otherwise, combine all commits into one new squash commit on the target branch.

### Overview of the branch model

![image.png](https://images.zenhubusercontent.com/5d7605a095e20f0001868d8c/f101c94e-46fe-47ca-8a7d-eb9895e32fe2)


## Pull Request Template

```
#### What does this Pr do?

This pull request is ...

#### How is this PR implemented

<insert link to task from board > : technical specs in points form



### Pull request rules

1. Follow the pull request format

1. Each pull request requires approval from @LogicUI before merging is done.

1. Each pull request requires at least one successful CI build.

1. Ensure your branch is updated with the latest change from develop/master by applying the following steps
   - Ensure your master branch is up to date by using the command` git pull` on the master branch
   - If there are no changes on the master branch proceed to raise a PR
   - If there are changes in your master branch checkout to the branch you want to raise PR and run the command `git rebase master` this will merge the master to your PR branch in a linear sequence without an additional merge commit [more info](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)


### Deployment Strategies

The Master branch will be used for the production build
Develop branch will be used for development build