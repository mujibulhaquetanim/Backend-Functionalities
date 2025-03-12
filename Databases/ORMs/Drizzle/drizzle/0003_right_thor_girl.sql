ALTER TABLE "users" ADD COLUMN "first_name" varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "last_name" varchar(32) NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "fname";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "lname";