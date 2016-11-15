Last login: Sun Oct  2 21:21:21 on ttys000
You have new mail.
host-155-246-143-24:~ Leigh$ cd Desktop/546/lab3/
host-155-246-143-24:lab3 Leigh$ node app2.js
here is app2

going to create a task
create successfully
{ _id: 'dfd4f230-8907-11e6-96a7-c58068f6bdf1',
  title: 'Homework1',
  description: 'exe1.3, exe1.4',
  completed: false,
  completedAt: null }

going to create another task
create successfully
{ _id: 'e0462a90-8907-11e6-96a7-c58068f6bdf1',
  title: 'Homework2',
  description: 'exe2.3, exe2.4,exe2.9',
  completed: false,
  completedAt: null }

going to complete by invalid id
completeTask failed ,No task found

going to complete by valid id
completeTask successfully
{ _id: 'dfd4f230-8907-11e6-96a7-c58068f6bdf1',
  title: 'Homework1',
  description: 'exe1.3, exe1.4',
  completed: true,
  completedAt: '9:22:41 PM' }

going to get by valid id
get successfully
{ _id: 'dfd4f230-8907-11e6-96a7-c58068f6bdf1',
  title: 'Homework1',
  description: 'exe1.3, exe1.4',
  completed: true,
  completedAt: '9:22:41 PM' }

going to get by invalid id
err occur when get: No task found

going to getall
getall successfully
[ { _id: 'dfd4f230-8907-11e6-96a7-c58068f6bdf1',
    title: 'Homework1',
    description: 'exe1.3, exe1.4',
    completed: true,
    completedAt: '9:22:41 PM' },
  { _id: 'e0462a90-8907-11e6-96a7-c58068f6bdf1',
    title: 'Homework2',
    description: 'exe2.3, exe2.4,exe2.9',
    completed: false,
    completedAt: null } ]

going to remove by invalid id
err occur when remove: Could not delete task with id of 12

going to remove by valid id
Remove successfully

going to getall again
getall successfully
[ { _id: 'e0462a90-8907-11e6-96a7-c58068f6bdf1',
    title: 'Homework2',
    description: 'exe2.3, exe2.4,exe2.9',
    completed: false,
    completedAt: null } ]

=====Demo completed, thank you!=====

