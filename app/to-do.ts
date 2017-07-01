class Task {
  done: boolean
  description: string
  priority: string

  constructor(description: string, priority: string) {
    this.done = false;
    this.description = description;
    this.priority = priority;
  }

  markDone() {
    this.done = true;
  }
}

const tasks: Task[] = [];
tasks.push(new Task('Take out the trash', "Medium"));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

for(const task of tasks)
  console.log(task);
