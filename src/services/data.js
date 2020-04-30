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
        "note": "<h2><strong>Pura Tanah Lot</strong></h2><p>About 20 kilometers northwest of Kuta, Pura Tanah Lot (\"Pura\" means temple in Balinese) is one of Bali's most iconic temples thanks to its spectacular seaside setting on a rocky islet surrounded by crashing waves.</p><p><br></p>",
        "created_at": "2020-04-24T16:44:30.994Z",
        "updated_at": "2020-04-24T16:44:30.994Z"
      },
      {
        "_id": "5ea3179b1cb7c42a0cdb1ef9",
        "title": "Travel Notes",
        "note": "<h2><strong>Trip to Bali</strong></h2><p>One week trip, Lovely place. blablabla...</p><p><br></p>",
        "created_at": "2020-04-26T16:45:15.579Z",
        "updated_at": "2020-04-26T16:45:15.579Z"
      },
      {
        "_id": "5ea317c50fd8442a21bcfdc8",
        "title": "Sightseeing",
        "note": "<h1>testing data</h1>",
        "created_at": "2020-04-27T16:45:57.371Z",
        "updated_at": "2020-04-27T16:45:57.371Z"
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