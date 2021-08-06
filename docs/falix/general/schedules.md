---
layout: default
title:  "Schedules"
parent: General
grand_parent: Falix
permalink: /falix/general/schedules
tags: schedules automatic
---

# Guide on how to use Schedules

### What are scedules?
scedules are like time tables, they run commands/functions at a specified date or time

### What are scedules useful for? 
schedules run certain tasks at a specified time or date, one example might be turning a server off after 4 hours or turning it on every day at 10 am.

### What functions can schedules run?
They can:

+ Run a power action
+ Create a backup
+ Run any command in the console



## Getting started
## Step 1: Creating A Schedule

1. Go to the [panel](https://panel.falixnodes.net) and click on the server you want
2. Click on "Schedules" at the top of the page
3. Click on "New schedule" 
4. Give it any name you want, the name helps you remember what the schedule is used for, in my case I want to turn off the server, so I will call it `Shutdown`
5. Fill in the Blank boxes according to the table below

|Field Name         |Allowed Values     |Allowed special Characters                     |
|-------------------|-------------------|-----------------------------------------------|
|Minutes            |0-59               |, - * /                                        |
|-------------------|-------------------|-----------------------------------------------|
|Hours              |0-23               |, - * /                                        |
|-------------------|-------------------|-----------------------------------------------|
|Day of the month   |1-31               |, - * /                                        |
|-------------------|-------------------|-----------------------------------------------|
|Month              |1-12 OR JAN-DEC    |, - * /                                        |
|-------------------|-------------------|-----------------------------------------------|
|Day of the Week    |1-7  OR SUN-SAT    |, - * /                                        |


#### Special Characters

|Character          |Purpose                                        |Example                                                           |
|-------------------|-----------------------------------------------|------------------------------------------------------------------|
| *                 |Specifies all possible values for a field      |Inserting * into the "Minute field" refers to every minute in an hour |
|-------------------|-----------------------------------------------|------------------------------------------------------------------|
| -                 |Specifies a range of values                    |1-5 is equal to 1,2,3,4,5                                         |
|-------------------|-----------------------------------------------|------------------------------------------------------------------|
| ,                 |Specifies a list of values or multiple values  |1,3,4,6,9                                                         |
|-------------------|-----------------------------------------------|------------------------------------------------------------------|
| /                 |Skips a given number of values                 |*/3 in the minute time field is equivalent to 0,3,6,9,12,15,18,21... The asterisk ( * ) specifies “every hour,” but the /3 means only the first, fourth, seventh. You can also use numbers instead of *         |


### NOTES:
> The names of months and days of the week are not case sensitive. MON is the same as mon. 
>
> You must use the * character in either the day-of-week or day-of-month fields. Specifying both fields in the same cron expression is not supported.
>
> The time the schedules follow are dependent on the node location, in this case Germany.
>
> Scedules do not support mixing / and - special characters in the same expression.


## Step 2: Adding Tasks

1. Click on the Schedule you just made
2. Click on "NEW TASK" at the top right of the page
3. Click on "ACTIONS" and select whichever task you want the scedules to do


### Send command
Send command sends any command to the console, before inserting a command make sure it works, some examples of commands:
+ Tps
+ Op
+ timings report
+ kill
+ say

`TIME OFFSET` is the amount of time to wait after the previous task executes before running this one. If this is the first task on a schedule this will not be applied.

PAYLOAD is where you will type in your commands, if you are using multiple commands then type each on a separate line



### Send power action
Send power action either shuts down your server, restarts it or terminates it.

`TIME OFFSET` is the amount of time to wait after the previous task executes before running this one. If this is the first task on a schedule this will not be applied.

PAYLOAD is where you will select the action you want the scedules to preform

### Create backup
Create backup creates a clone or copy of all your server files and stores it for you to use in the future

`TIME OFFSET` is the amount of time to wait after the previous task executes before running this one. If this is the first task on a schedule this will not be applied.

If you want the scedules to ignore multiple files, then type each files path on a different line.

Make sure you have added backups to your server, you can do so in the [client page](https://client.falixnodes.net)
