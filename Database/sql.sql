create database cyberchase;

use cyberchase;

create table Categories(CategoryID integer primary key auto_increment, 
	CategoryName varchar(50) , CategoryStatus varchar(50));


create table Challenges(ChallengeID integer primary key auto_increment, 
	QuestionTitle varchar(500), CategoryID integer, Question longtext,
	Answer varchar(100), Hints longtext,
	Attempts integer, ChallengeStatus varchar(50), 
	HintScore integer,TotalScore integer);


create table Team (TeamID integer primary key auto_increment, TeamName varchar(50), TeamPassword varchar(30),TeamStatus varchar(50),
	CreationDate datetime, CreatedBy varchar(20));
 
create table User(UserID integer primary key auto_increment, FirstName varchar(20), LastName varchar(20), 
	StudentID varchar(20), Status varchar(50), CreationDate datetime, UserType varchar(30), SchoolName varchar(100));
    
create table Members(MemberID integer primary Key auto_increment, TeamID integer,
	UserID integer, AddedDate datetime,
	MemberStatus varchar(50));
 
 create table Submit(SubmitID integer primary key auto_increment, ChallengeID integer,
	MemberID integer, HintsUsed Boolean, Answer varchar(100), SubmitionDate datetime, 
    AttemptCount integer);
    
