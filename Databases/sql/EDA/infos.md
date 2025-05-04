# 💡

## Indexes

Indexes are a way to optimize queries by indexing specific columns of a table. They allow you to quickly find specific rows in a table without having to scan through all the rows.

To get the indexes of a table, we can use the following SQL query:

```sql
SELECT
    t.relname AS table_name,
    i.relname AS index_name,
    array_agg(a.attname) AS column_names,
    idx.indisunique AS is_unique,
    idx.indisprimary AS is_primary
FROM
    pg_catalog.pg_statio_all_tables AS st -- Statistics about all tables
JOIN
    pg_catalog.pg_index AS idx ON st.relid = idx.indrelid -- Link tables to their indexes
JOIN
    pg_catalog.pg_class AS i ON idx.indexrelid = i.oid -- Get index names
JOIN
    pg_catalog.pg_class AS t ON st.relid = t.oid -- Get table names again (using object ID)
JOIN
    pg_catalog.pg_attribute AS a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey) -- Link table columns to index columns
WHERE
    st.schemaname NOT IN ('pg_catalog', 'information_schema') -- Filter out system schemas
GROUP BY
    t.relname,
    i.relname,
    idx.indisunique,
    idx.indisprimary
ORDER BY
    t.relname,
    i.relname;
```

**Explanation of each part:**

1.  **`FROM pg_catalog.pg_statio_all_tables AS st`**:
    * `pg_catalog` is the system schema in PostgreSQL that contains information about the database itself.
    * `pg_statio_all_tables` is a view that provides statistical information about all tables. We use it here to get the object ID (`relid`) of the tables.
    * `AS st` is just an alias we give to this view for brevity (so we can refer to it as `st` later).

2.  **`JOIN pg_catalog.pg_index AS idx ON st.relid = idx.indrelid`**:
    * `pg_index` is a system table that stores information about indexes.
    * `indrelid` is a column in `pg_index` that holds the object ID of the table the index is on.
    * We `JOIN` `pg_statio_all_tables` (aliased as `st`) with `pg_index` (aliased as `idx`) using the table's object ID to link tables to their associated indexes.

3.  **`JOIN pg_catalog.pg_class AS i ON idx.indexrelid = i.oid`**:
    * `pg_class` is a system table that stores information about relations (tables, indexes, sequences, etc.).
    * `indexrelid` in `pg_index` holds the object ID of the index itself.
    * `oid` is the object ID.
    * We `JOIN` `pg_index` with `pg_class` (aliased as `i`) using the index's object ID to get the name of the index (`i.relname`).

4.  **`JOIN pg_catalog.pg_class AS t ON st.relid = t.oid`**:
    * We `JOIN` `pg_statio_all_tables` (again, using the table's object ID `st.relid`) with `pg_class` (aliased as `t`) to get the name of the table (`t.relname`). We need to join to `pg_class` again here to get the table's name in this part of the query.

5.  **`JOIN pg_catalog.pg_attribute AS a ON a.attrelid = t.oid AND a.attnum = ANY(idx.indkey)`**:
    * `pg_attribute` stores information about the columns (attributes) of tables.
    * `attrelid` is the object ID of the table.
    * `attnum` is the attribute number (column number).
    * `indkey` in `pg_index` is an array of the attribute numbers that make up the index.
    * We `JOIN` with `pg_attribute` (aliased as `a`) using the table's object ID and checking if the column's attribute number is present in the index's key attributes. This helps us identify which columns are part of the index.

6.  **`WHERE st.schemaname NOT IN ('pg_catalog', 'information_schema')`**:
    * This filters out indexes on tables within the system schemas, so you primarily see indexes on your own tables.

7.  **`GROUP BY t.relname, i.relname, idx.indisunique, idx.indisprimary`**:
    * We group the results by table name, index name, whether the index is unique, and whether it's a primary key index. This is necessary because an index can be composed of multiple columns.

8.  **`array_agg(a.attname) AS column_names`**:
    * `array_agg()` is an aggregate function that collects the names (`attname`) of all the columns that are part of the current index into an array. This is how we get a list of columns for each index.

9.  **`idx.indisunique AS is_unique`**:
    * This selects the `indisunique` flag from `pg_index`, which indicates if the index enforces uniqueness.

10. **`idx.indisprimary AS is_primary`**:
    * This selects the `indisprimary` flag from `pg_index`, which indicates if this index is the primary key constraint for the table.

11. **`ORDER BY t.relname, i.relname`**:
    * Finally, we order the results first by table name and then by index name for better readability.

**In simpler terms, this query navigates through several of PostgreSQL's internal tables to piece together the information about each index:**

* It starts with the list of all tables.
* For each table, it finds the associated indexes.
* It then gets the names of those indexes.
* It identifies which columns of the table are included in each index.
* It determines if the index is unique or if it's the primary key.

While more complex than querying `information_schema`, this approach gives you detailed information about the indexes in your database.

To see indexes specifically within the `public` schema, you would add a `WHERE` clause to filter by the schema name:

```sql
WHERE
    st.schemaname = 'public'
```

This would only return indexes within the `public` schema.

