-- explore all of the objects in the database
SELECT * FROM information_schema.tables;

-- explore all of the tables and filtering out the system tables and views that PostgreSQL uses internally.
SELECT
    table_catalog,
    table_schema,
    table_name,
    table_type
FROM
    information_schema.tables
WHERE
    table_schema NOT IN ('pg_catalog', 'information_schema');

-- explore all of the tables in the public schema
SELECT
    table_catalog,
    table_schema,
    table_name,
    table_type
FROM
    information_schema.tables
WHERE
    table_schema = 'public';

-- explore all of the columns in the public schema
SELECT
    table_catalog,
    table_schema,
    table_name,
    column_name,
    data_type,
    ordinal_position
FROM
    information_schema.columns
WHERE
    table_schema = 'public';

-- see if there are any tables with a specific name
SELECT * FROM information_schema.tables WHERE table_schema = 'public' AND TABLE_NAME = 'users';

-- Select specific columns from a table named 'products' in the public schema
SELECT "text", "authorId" FROM public.comments;


