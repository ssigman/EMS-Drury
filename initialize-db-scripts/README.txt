Steps to create the initial data base are: 

1. From a bash shell start the MongoDB shell using the command: 
        $ mongo
        
2. From the MongoDB shell, make the university data base the active database as follows:
        > use university
        
3. Define the frist document as variable as follows:
        > var course1 = { dept: "CSCI", number: "371", name: "Software Engineering", desc: "Stystem engineering concepts for the design and implementation of computing projects.  Course includes a group project.", creditHr: 3}
        
4. Add the first course to the courses collection as follows:
        > db.courses.insert(course1)
        
5. Verify the first course was added to the collection as follows:
        > db.courses.find()
        
6. Close the MongoDB shell as follows:
        > quit()
        
7. Import the remaining courses to the database by issuing the following command from the bash shell.
        $ mongoimport --db university --collection courses --file courses.json

Notes 1:  In the steps above the the $ is the bash shell prompt and the > is the mongo prompt.  Neither is typed as a pat of the command.

Notes 2:  The process above will create course documents that contain a system generated _id index.  Using a system generated _id index simplifies insertion of documents into a collection in that it is not necessary to generate a unique _id value for each document inserted.