CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"fname" varchar(32) NOT NULL,
	"lname" varchar(32) NOT NULL,
	"email" varchar(32) NOT NULL,
	"password" varchar(32) NOT NULL
);
