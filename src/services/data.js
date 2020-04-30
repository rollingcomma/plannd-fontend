exports.data = {
  user: {
    "_id": "5ea37fd5960b643549675854",
    "username": "jim",
    "email": "jim@test.com",
    "profile": null
  },
  user_dropdown:[
    {
      label:'Log Out',
      link:'/logout',
      icon: '/assets/signs.svg'
    },
    {
      label: 'Profile Settings',
      link: '/profile',
      icon: '/assets/gear.svg'
    }
  ],
  project: [
    {
      "_id": "5ea208d0ce2a4e12abfcf051",
      "user": "5ea240ad94cc67144f73b540",
      "title": "daily usage",
      "description": "default category for daily routine planning ",
      "created_at": "2020-04-23T07:00:00.000Z",
      "updated_at": "2020-04-23T07:00:00.000Z"
    },
    {
      "_id": "5ea2098bce2a4e12abfcf052",
      "user": "5ea240ad94cc67144f73b540",
      "title": "Trip to Bali",
      "description": "Bali trip",
      "trip_info": {
        "depart_date": "2020-05-03T07:00:00.000Z",
        "duration": 8
      },
      "created_at": "2020-04-23T07:00:00.000Z",
      "updated_at": "2020-04-23T07:00:00.000Z"
    }],
  note: {
    "_id": "5ea3175aed33b229e2327d96",
    "project": "5ea2098bce2a4e12abfcf052",
    "notebooks": [
      {
        "_id": "5ea3176eeb66b629f682345e",
        "title": "Place to Visit",
        "note": "Wall-E&location=Earth&about=%7B%22ops%22%3A%5B%7B%22attributes%22%3A%7B%22bold%22%3Atrue%7D%2C%22insert%22%3A%22Lovely+People%22%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%2C%7B%22attributes%22%3A%7B%22color%22%3A%22%23d4d1cb%22%7D%2C%22insert%22%3A%22Max+is+the+owner+and+we+decided+to+go+with+him+after+receiving+multiple+quotes+from+other+companies.+He's+responsive%2C+organized%2C+and+attentive+to+the+details.%22%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D ",
        "created_at": "2020-04-24T16:44:30.994Z",
        "updated_at": "2020-04-24T16:44:30.994Z"
      },
      {
        "_id": "5ea3179b1cb7c42a0cdb1ef9",
        "title": "Travel Notes",
        "note": "Wall-E&location=Earth&about=%7B%22ops%22%3A%5B%7B%22attributes%22%3A%7B%22bold%22%3Atrue%7D%2C%22insert%22%3A%22Lovely+People%22%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%2C%7B%22attributes%22%3A%7B%22color%22%3A%22%23d4d1cb%22%7D%2C%22insert%22%3A%22Max+is+the+owner+and+we+decided+to+go+with+him+after+receiving+multiple+quotes+from+other+companies.+He's+responsive%2C+organized%2C+and+attentive+to+the+details.%22%7D%2C%7B%22insert%22%3A%22%5Cn%22%7D%5D%7D ",
        "created_at": "2020-04-24T16:45:15.579Z",
        "updated_at": "2020-04-24T16:45:15.579Z"
      },
      {
        "_id": "5ea317c50fd8442a21bcfdc8",
        "title": "Sightseeing",
        "note": "testing data",
        "created_at": "2020-04-24T16:45:57.371Z",
        "updated_at": "2020-04-24T16:45:57.371Z"
      },
      {
        "_id": "5ea317dab68e642a36634c16",
        "title": "Tourism",
        "note": "testing data",
        "created_at": "2020-04-24T16:46:18.387Z",
        "updated_at": "2020-04-24T16:46:18.387Z"
      }
    ]
  }
}