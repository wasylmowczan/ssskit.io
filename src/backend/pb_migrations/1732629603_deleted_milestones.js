/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zbj3w9gquei28z3");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "zbj3w9gquei28z3",
    "created": "2024-11-12 08:17:55.148Z",
    "updated": "2024-11-21 09:29:47.963Z",
    "name": "milestones",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cxjfh3ug",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "sy2qesov",
        "name": "notes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "2ffx7sje",
        "name": "goal_id",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "eysw4vicofta2ab",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": "user_id = @request.auth.id",
    "viewRule": "user_id = @request.auth.id",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "user_id = @request.auth.id",
    "deleteRule": "user_id = @request.auth.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
