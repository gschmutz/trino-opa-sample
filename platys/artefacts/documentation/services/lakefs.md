# LakeFS

Git-like capabilities for your object storage.

**[Website](https://lakefs.io/)** | **[Documentation](https://docs.lakefs.io/)** | **[GitHub](https://github.com/treeverse/lakeFS)**

## How to enable?

```
platys init --enable-services LAKEFS, MINIO, POSTGRESQL
platys gen
```

## How to use it?

Navigate to <http://192.168.1.112:28220>

Login with username `V42FCGRVMK24JJ8DHUYG` and password `bKhWxVF3kQoLY9kFmt91l+tDrEoZjqnWXzY9Eza` (if left to defaults). 

### Using REST API

```
curl -X GET http://localhost:28220/api/v1/repositories -u "<accessKey>:<secretKey>"
```
