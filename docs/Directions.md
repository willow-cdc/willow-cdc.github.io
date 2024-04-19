---
sidebar_position: 2
---

# Installation & Usage

To install and start up Willow, clone this [repo](https://github.com/willow-cdc/willow_docker) and run:
```
docker compose up
```

Navigate to Willow's home page at `https://localhost:3000`.

## Create a Pipeline

To initialize pipeline setup, click the "CREATE A CDC PIPELINE" button.

<figure>
  <img src="/img/case-study/3.2-1_home.png" className="diagram screenshot" alt="Willow's home page." width="80%"/>
</figure>

Enter PostgreSQL database details, including:
- The host and port to access the PostgreSQL server
- The database name containing the tables to replicate
- The username and password for Willow to use when replicating from PostgreSQL

<figure>
  <img src="/img/case-study/3.2-2_source.png" className="diagram screenshot" alt="Willow's form for connecting to a source database." width="80%"/>
</figure>

Select which tables and columns to replicate and provide a unique source connection name. Primary keys (identified with PK) cannot be deselected. Tables without primary keys are not able to be replicated and are not shown.

<figure>
  <img src="/img/case-study/3.2-3_select_data.png" className="diagram screenshot" alt="Willow's form for selecting which data should be replicated from the source database." width="80%"/>
</figure>

Enter Redis cache details, including:
- The URL for the Redis cache. Must start with `redis://`.
- The username and password for Willow to use when replicating to Redis.

Click the "VERIFY" button to verify that the Redis cache is accessible.

<figure>
  <img src="/img/case-study/3.2-4_sink.png" className="diagram screenshot" alt="Willow's form for selecting which data should be replicated from the source database." width="80%" />
</figure>

Provide a unique sink connection name and click "SUBMIT" to finish CDC pipeline creation.

<figure>
  <img src="/img/case-study/3.2-5_sink_name.png" className="diagram screenshot" alt="Willow's form for selecting which data should be replicated from the source database." width="80%" />
</figure>

After pipeline creation, an initial snapshot of the selected tables is taken to prepopulate the cache. Subsequent `INSERT`, `UPDATE`, `DELETE`, and `TRUNCATE` commands that affect the selected tables will be reflected in the cache.

## View Existing Pipelines

All existing pipelines can be viewed at `https://localhost:3000/pipelines`.

<figure>
  <img src="/img/docs/all_pipelines.png" className="diagram screenshot" alt="Willow's page for displaying all running pipelines." width="80%" />
</figure>

A single pipeline can be clicked on to view details on the associated source and sink connectors.

<figure>
  <img src="/img/docs/single_pipeline.png" className="diagram screenshot" alt="Willow's page for displaying a single pipeline's details." width="80%" />
</figure>

## Teardown a Pipeline

Pipelines can be torn down by clicking the trash can icon.

<figure>
  <img src="/img/docs/delete_pipeline.png" className="diagram screenshot" alt="The trash can icon for a single pipeline is boxed in red on Willow's page showing all pipelines.." width="80%" />
</figure>