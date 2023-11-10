create database `healthcare`;
 use `healthcare`;
 create table patients(id_patient int auto_increment primary key ,
 username varchar(12) not null,password varchar(12) not null,
 email varchar(50) not null unique, image varchar(255) );
 SELECT * FROM patients ;

 create table doctors(id_doctor int auto_increment primary key,
 username varchar(12) not null,password varchar(12) not null,
 email varchar(50) unique not null, image varchar(255) , 
 specialization varchar(20)not null,
 appoinments varchar(50) not null, price int not null,
 specialization_image varchar(255));
 
 SELECT * FROM doctors ;
 
 
 create table labs(id_lab int auto_increment primary key,
 username varchar(12) not null,password varchar(12) not null,
 email varchar(50) unique not null, image varchar(255) , 
 address varchar(50) not null, license varchar(30));

 SELECT * FROM labs ;
 
 create table pharmacies(id_pharmacy int auto_increment primary key,
 username varchar(12) not null,password varchar(12) not null,
 email varchar(50) unique not null, image varchar(255) , 
 address varchar(50) not null, license varchar(30));
 
 SELECT * FROM pharmacies ;
 
 create table friends_of_doctors(
 pat_id int(50) not null references patients (id_patient), 
 friend_doc_id int(50) not null references doctors (id_doctor), 
 primary key (pat_id, friend_doc_id));
 SELECT * FROM friends_of_doctors ;

 create table users(
 username varchar(50), email varchar(50) primary key,password varchar(50), image blob);
 SELECT * FROM users ;
SELECT users.username, users.email, users.image FROM users WHERE email ='jjjjjjjj'; 
drop table friends_of_doctors;

 SELECT doctors.id_doctor, doctors.username, doctors.image FROM doctors
	  INNER JOIN friends_of_doctors ON doctors.id_doctor = friends_of_doctors.friend_doc_id
	  WHERE friends_of_doctors.pat_id = 1;



INSERT INTO friends_of_doctors  (pat_id,friend_doc_id) 
SELECT patients.id_patient, doctors.id_doctor FROM patients 
JOIN doctors ON doctors.id_doctor=1 AND patients.id_patient=2;

