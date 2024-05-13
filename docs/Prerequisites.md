---
sidebar_position: 1
---

# Prerequisites

In order for Willow to successfully replicate from PostgreSQL to Redis, the following prerequisites must be met:

- PostgreSQL server is set up for logical replication
- Docker is installed on the server running Willow
- Redis server must have RedisJSON and RediSearch modules installed

## PostgreSQL

Instructions are written based on [Debezium's documentation](https://debezium.io/documentation/reference/stable/connectors/postgresql.html#setting-up-postgresql) for configuring PostgreSQL. The following instructions assume that the PostgreSQL user used for replication is named `willow`.

### Configuration

Ensure your PostgreSQL server is configured to support logical replication with the `pgoutput` plugin. This includes:

1. Using PostgreSQL version 10+.
2. Setting the WAL (write-ahead log) level to logical.

```sql
ALTER SYSTEM SET wal_level = logical;
```

3. Adding entries to your PostgreSQL's `pg_hba.conf` file to allow the server running Willow to replicate from the PostgreSQL host.

```
local   replication   willow                      trust
host    replication   willow     127.0.0.1/32     trust
host    replication   willow     ::1/128          trust
```

4. Restart the PostgreSQL server for the changes to take effect.

### Using a Minimum Privileged User

In order to replicate data from PostgreSQL's WAL, you must provide Willow with a PostgreSQL user. This user can either be a `SUPERUSER` or have the minimum required privileges.


The following SQL command can be run in the PostgreSQL terminal to create a `SUPERUSER`. Be sure to provide a unique password

```sql
CREATE ROLE willow WITH LOGIN SUPERUSER PASSWORD <password>
```

Minimum privileged users must have the following privileges:

- `REPLICATION`
- `LOGIN`
- database level `CREATE`
- table level `SELECT`

The following SQL commands can be run in the PostgreSQL terminal to create a minimum privileged user:

```sql
/* Create a willow user with the REPLICATION and LOGIN permissions */
CREATE ROLE willow REPLICATION LOGIN PASSWORD <password>;


/* Create a willow_replication group for sharing table level privileges with original table owners */
CREATE ROLE willow_replication;


/* Repeat the following command for all databases containing tables you wish to replicate */

/* Provide willow_replication with database level CREATE privileges */
GRANT CREATE ON DATABASE <database_name> TO willow_replication;


/* Repeat the remaining commands for all tables you wish to replicate. */

/* Place the willow user and the original table owner in the willow_replication group */
GRANT willow_replication TO <original_table_owner>;
GRANT willow_replication TO willow;

/* Make the willow_replication group the table owner and grant SELECT permissions */
ALTER TABLE <table_name> OWNER TO willow_replication;
GRANT SELECT ON <table_name> TO willow_replication;
```

## Redis

Ensure your Redis cache has both the RedisJSON and RediSearch modules installed. [Redis Stack](https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/) by default includes both of these modules and is a simple way to ensure your Redis cache is compatible with Willow.
