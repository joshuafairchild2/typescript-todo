class Task {
  done: boolean = false;

  constructor(public description: string, public priority: string) {}

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
