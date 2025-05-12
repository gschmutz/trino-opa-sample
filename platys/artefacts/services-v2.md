# demo-trino-opa-platform - List of Services

| Service | Links | External<br>Port | Internal<br>Port | Description
|--------------|------|------|------|------------
|[iceberg-rest-catalog](./documentation/services/iceberg-rest-catalog )|[Rest API](http://192.168.1.112:28287/v1/namespaces)|28287<br>|8181<br>|Iceberg Rest Catalog
|[jupyter](./documentation/services/jupyter )|[Web UI](http://192.168.1.112:28888)|28888<br>|8888<br>|Web-based interactive development environment for notebooks, code, and data
|[markdown-viewer](./documentation/services/markdown-viewer )|[Web UI](http://192.168.1.112:80)|80<br>|3000<br>|Platys Platform homepage viewer
|[minio-1](./documentation/services/minio )|[Web UI](http://192.168.1.112:9010)|9000<br>9010<br>|9000<br>9010<br>|Software-defined Object Storage
|[minio-mc](./documentation/services/minio )||||MinIO Console
|[mongo-1](./documentation/services/mongodb )||27017<br>|27017<br>|Document NoSQL database
|[opa](./documentation/services/opa )|[Rest API](http://192.168.1.112:28332/v1/policies)|28332<br>|8181<br>|Open Policy Agent Server
|[opal-client](./documentation/services/opal )|[Rest API](http://192.168.1.112:28407)|28407<br>28408<br>|7000<br>8181<br>|Open Policy Administration Layer
|[opal-server](./documentation/services/opal )|[Rest API](http://192.168.1.112:7002)|7002<br>|7002<br>|Open Policy Administration Layer
|[postgresql](./documentation/services/postgresql )||5432<br>|5432<br>|Open-Source object-relational database system
|[redis-1](./documentation/services/redis )||6379<br>|6379<br>|Key-value store
|[trino-1](./documentation/services/trino )|[Web UI](https://192.168.1.112:28083/ui/preview)|28082<br>28083<br>|8080<br>8443<br>|SQL Virtualization Engine
|[trino-cli](./documentation/services/trino )||||Trino CLI|

**Note:** init container ("init: true") are not shown