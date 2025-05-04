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

-- find the indexes in the database excluding the system indexes
SELECT
    t.relname AS table_name,
    i.relname AS index_name,
    array_agg(a.attname) AS column_names,
    idx.indisunique AS is_unique,
    idx.indisprimary AS is_primary
FROM
    pg_catalog.pg_statio_all_tables AS st
JOIN
    pg_catalog.pg_index AS idx ON st.relid = idx.indrelid
JOIN
    pg_catalog.pg_class AS i ON idx.indexrelid = i.oid
JOIN
    pg_catalog.pg_class AS t ON st.relid = t.oid
JOIN
    pg_catalog.pg_attribute AS a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)
WHERE
    st.schemaname NOT IN ('pg_catalog', 'information_schema')
GROUP BY
    t.relname,
    i.relname,
    idx.indisunique,
    idx.indisprimary
ORDER BY
    t.relname,
    i.relname;

-- indexes in public
SELECT
    t.relname AS table_name,
    i.relname AS index_name,
    array_agg(a.attname) AS column_names,
    idx.indisunique AS is_unique,
    idx.indisprimary AS is_primary
FROM
    pg_catalog.pg_statio_all_tables AS st
JOIN
    pg_catalog.pg_index AS idx ON st.relid = idx.indrelid
JOIN
    pg_catalog.pg_class AS i ON idx.indexrelid = i.oid
JOIN
    pg_catalog.pg_class AS t ON st.relid = t.oid
JOIN
    pg_catalog.pg_attribute AS a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)
WHERE
    st.schemaname = 'public' -- Filter to the public schema
GROUP BY
    t.relname,
    i.relname,
    idx.indisunique,
    idx.indisprimary
ORDER BY
    t.relname,
    i.relname;
