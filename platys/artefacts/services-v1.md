# demo-trino-opa-platform - List of Services

| Service | Web UI | Rest API 
|-------------- |------|------------
|[iceberg-rest-catalog](./documentation/services/iceberg-rest-catalog )||<http://192.168.1.112:28287/v1/namespaces>
|[jupyter](./documentation/services/jupyter )|<http://192.168.1.112:28888>|
|[markdown-viewer](./documentation/services/markdown-viewer )|<http://192.168.1.112:80>|
|[minio-1](./documentation/services/minio )|<http://192.168.1.112:9010>|
|[minio-mc](./documentation/services/minio )||
|[mongo-1](./documentation/services/mongodb )||
|[opa](./documentation/services/opa )||<http://192.168.1.112:28332/v1/policies>
|[opal-client](./documentation/services/opal )||<http://192.168.1.112:28407>
|[opal-server](./documentation/services/opal )||<http://192.168.1.112:7002>
|[postgresql](./documentation/services/postgresql )||
|[redis-1](./documentation/services/redis )||
|[trino-1](./documentation/services/trino )|<https://192.168.1.112:28083/ui/preview>|
|[trino-cli](./documentation/services/trino )|||

**Note:** init container ("init: true") are not shown