/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1m66dob6aivj9ot",
    "created": "2024-12-20 20:50:47.040Z",
    "updated": "2024-12-20 20:50:47.040Z",
    "name": "feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0hgmkmku",
        "name": "name",
        "type": "relation",
        "required": false,
        "presentable": true,
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
        "id": "wcbtymnk",
        "name": "feedback",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("1m66dob6aivj9ot");

  return dao.deleteCollection(collection);
})
