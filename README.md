Code Challenge (Predicate Builder):
The basic idea is to create a UI that allows you to select different filtering criteria, and to use the chosen criteria to generate a SQL SELECT statement on the Node side. If it saves you time, you can stop short of actually including a database and just spit the resulting query out to the Node console and React view after it is generated.

Should do:
Match functionality explained in the “What it is” section.
Please keep track of the time you spent on each step (i.e. time to setup express, time spent styling, time spent building the page).
Use React and Node (preferably w/Express). Other dependencies are at your discretion.
Using Node, generate a SQL selection of all columns filtering based on this screen when the “Search” button is clicked.
Styling - match existing or come up with a variant you think looks better.

Don’t do:
Don’t implement “Today,” “Export,” “Save Preset,” “Returned 4999 results” or the white box with “Conversions” in it.
Don’t use someone else’s code without attributing it. :-)

Helpful information:
Client or server side rendering of the content is irrelevant to us for this task.
Predicate fields should be: User email, screen width, screen height, # of visits, First Name, Last Name, Page Response time (ms), Domain, Page Path.
The SQL table is as follows:
Table name: session
Columns: id, user_email, user_first_name, user_last_name, screen_width, screen_height, visits, page_response, domain, path

What it is:
A predicate builder that allows users to filter a database table.
It allows the end user to filter each field with criteria that makes sense to that field (i.e. string and number searches)

Clicking “AND” adds a new row.  Clicking “-“ removes the adjacent row.

Clicking “Search” generates a query on the server with each of the filters applied.