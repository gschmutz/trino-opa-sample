import functools
import os

import pymongo

mongodb_host = os.environ.get("MONGODB_HOST", "localhost")


# @functools.lru_cache(maxsize=128)
def initialize_mongo_client():
    client = pymongo.MongoClient(f"mongodb://{mongodb_host}:27017/")
    db = client["trino"]
    return db


# @functools.lru_cache(maxsize=128)
def get_collection(collection_name: str):
    db = initialize_mongo_client()
    collection = db[collection_name]
    return collection.find({})


# @functools.lru_cache(maxsize=128)
def get_collection_by_key(collection_name: str, key: str):
    db = initialize_mongo_client()
    collection = db[collection_name]
    return collection.find({key: {"$exists": True}})


# @functools.lru_cache(maxsize=128)
def get_collection_by_key_value(collection_name: str, key: str, value):
    db = initialize_mongo_client()
    collection = db[collection_name]
    return collection.find({key: value})


# @functools.lru_cache(maxsize=128)
def get_collection_by_keys_values(collection_name: str, keys: list, values: list):
    db = initialize_mongo_client()
    collection = db[collection_name]
    query = {}
    for i in range(len(keys)):
        query[keys[i]] = values[i]
    return collection.find(query)
