const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// آرایه‌ای برای ذخیره تسک‌ها
let tasks = [];
let taskIdCounter = 1; // شمارنده شناسه تسک‌ها

// تنظیمات CORS
app.use(cors());

// دریافت تسک‌ها
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// افزودن تسک جدید
app.post('/tasks', (req, res) => {
  const { id, subject, typeTask, timeRegisterTheTask, description, timeStartTask, timeEndTask, endTask, startTask, role } = req.body;

  // اضافه کردن تسک به آرایه
  // افزودن تسک به آرایه
  const newTask = {
    id: taskIdCounter++, // استفاده از شمارنده برای تولید شناسه جدید
    subject,
    typeTask,
    timeRegisterTheTask,
    description,
    startTask,
    endTask,
    timeStartTask,
    timeEndTask,


    role
  };
  tasks.push(newTask);

  res.status(201).json({ message: 'تسک با موفقیت اضافه شد' });
});

// حذف تسک بر اساس شناسه
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  // جستجوی تسک با شناسه مورد نظر
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  // اگر تسک موجود بود، آن را حذف کن
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'تسک با موفقیت حذف شد' });
  } else {
    res.status(404).json({ message: 'تسکی با این شناسه یافت نشد' });
  }
});

// { subject , typeTask , description, startTask , timeStartTask , endTask , timeEndTask }
// ویرایش تسک براساس شناسه
// app.put('/tasks/:id', (req, res) => {
//   const taskId = parseInt(req.params.id);
//   const { subject, typeTask, description, timeStartTask, endTask, startTask, timeEndTask, role } = req.body;

//   // جستجوی تسک با شناسه مورد نظر
//   const task = tasks.find(task => task.id === taskId);

//   // اگر تسک موجود بود، ویرایش کن
//   if (task) {
//     if (subject) {
//       task.subject = subject;
//     }
//     if (typeTask) {
//       task.typeTask = typeTask;
//     }
//     if (description) {
//       task.description = description;
//     }
//     if (timeStartTask) {
//       task.timeStartTask = timeStartTask;
//     }
//     if (startTask) {
//       task.startTask = startTask;
//     }
//     if (endTask) {
//       task.endTask = endTask;
//     }
//     if (timeEndTask) {
//       task.timeEndTask = timeEndTask;
//     }
//     if (role) {
//       task.role = role;
//     }

//     res.json({ message: 'تسک با موفقیت ویرایش شد' });
//   } else {
//     res.status(404).json({ message: 'تسکی با این شناسه یافت نشد' });
//   }
// });

// ویرایش تسک بر اساس شناسه
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { subject, typeTask, timeRegisterTheTask, description, timeStartTask, timeEndTask, endTask, startTask, role } = req.body;
  
  // جستجوی تسک با شناسه مورد نظر
  const task = tasks.find(task => task.id === taskId);
  
  // اگر تسک موجود بود، آن را ویرایش کن
  if (task) {
    task.subject = subject || task.subject;
    task.description = description || task.description;
    task.typeTask = typeTask || task.typeTask;
    task.timeStartTask = timeStartTask || task.timeStartTask;
    task.endTask = endTask || task.endTask;
    task.startTask = startTask || task.startTask;
    task.timeEndTask = timeEndTask || task.timeEndTask;
    task.role = role || task.role;
    task.timeRegisterTheTask=timeRegisterTheTask || task.timeRegisterTheTask;
    res.json({ message: 'تسک با موفقیت ویرایش شد' });
  } else {
    res.status(404).json({ message: 'تسکی با این شناسه یافت نشد' });
  }
});

// اجرای سرور
app.listen(3000, () => {
  console.log('سرور در حال اجراست...');
});