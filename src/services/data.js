exports.data = {
  user: {
    "_id": "5ea37fd5960b643549675854",
    "username": "Aneet Romana",
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

  notes: {
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
  },
  links: {
    "_id": "5ea25e06327de8295f439494",
    "project": "5ea2098bce2a4e12abfcf052",
    "categories": [
      {
        "_id": "5ea506b24804a2524df996dd",
        "title": "Bali",
        "created_at": "2020-04-26T03:57:38.062Z",
        "updated_at": "2020-04-26T03:57:38.062Z",
        "links": []
      },
      {
        "_id": "5ea506e24804a2524df996de",
        "title": "London",
        "created_at": "2020-04-26T03:58:26.114Z",
        "updated_at": "2020-04-26T03:58:26.114Z",
        "links": []
      },
      {
        "_id": "5ea506e94804a2524df996df",
        "title": "New York",
        "created_at": "2020-04-26T03:58:33.552Z",
        "updated_at": "2020-04-26T04:05:25.243Z",
        "links": []
      }
    ]
  },
  gallery: {
    "_id": "5ea25daf327de8295f439493",
    "project": "5ea2098bce2a4e12abfcf052",
    "albums": [
      {
        "_id": "5ea4ce9830ff324c46fb1eb7",
        "title": "Photos of Bali",
        "created_at": "2020-04-25T23:58:16.143Z",
        "updated_at": "2020-04-25T23:58:16.143Z",
        "images": []
      },
      {
        "_id": "5ea5330864854e57125ab632",
        "title": "Food must taste",
        "created_at": "2020-04-26T07:06:48.724Z",
        "updated_at": "2020-04-26T07:06:48.724Z",
        "images": []
      },
      {
        "_id": "5ea5332364854e57125ab633",
        "title": "Test updating",
        "created_at": "2020-04-26T07:07:15.173Z",
        "updated_at": "2020-04-26T07:08:02.636Z",
        "images": []
      }
    ]
  },
  todos: {
    "_id": "5ea31a38badc2c2ac4ff8dfb",
    "project": "5ea2098bce2a4e12abfcf052",
    "checklists": [
      {
        "_id": "5ea31a76974de32af81bd18d",
        "title": "Place to Visit",
        "created_at": "2020-04-24T16:57:26.588Z",
        "updated_at": "2020-04-24T16:57:26.588Z",
        "lists": []
      },
      {
        "_id": "5ea31b747b47922b185f38de",
        "title": "Things to Pack",
        "created_at": "2020-04-24T17:01:40.929Z",
        "updated_at": "2020-04-24T17:01:40.929Z",
        "lists": [
          {
            "_id": "5ea31bbfe619262b501b7629",
            "item": "Indonesia Travel",
            "is_checked": false,
            "due_date": null,
            "created_at": "2020-04-24T17:02:55.892Z",
            "updated_at": "2020-04-24T17:02:55.892Z"
          },
          {
            "_id": "5ea31bd1f9a7a92b65ed2be7",
            "item": "Baseball Hat",
            "is_checked": false,
            "due_date": null,
            "created_at": "2020-04-24T17:03:13.204Z",
            "updated_at": "2020-04-24T17:03:13.204Z"
          },
          {
            "_id": "5ea31befd5d7892b7aca0e83",
            "item": "Passport",
            "is_checked": false,
            "due_date": null,
            "created_at": "2020-04-24T17:03:43.153Z",
            "updated_at": "2020-04-24T17:03:43.153Z"
          },
          {
            "_id": "5ea31c02a61fea2b8eb896c7",
            "item": "Sandals",
            "is_checked": false,
            "due_date": null,
            "created_at": "2020-04-24T17:04:02.165Z",
            "updated_at": "2020-04-24T17:04:02.165Z"
          },
          {
            "_id": "5ea31c110b76012ba393615c",
            "item": "Plane Tickets",
            "is_checked": false,
            "due_date": null,
            "created_at": "2020-04-24T17:04:17.758Z",
            "updated_at": "2020-04-24T17:04:17.758Z"
          },
          {
            "_id": "5ea31c24431c1c2bb80c9bd3",
            "item": "Antihistamine",
            "is_checked": false,
            "due_date": null,
            "created_at": "2020-04-24T17:04:36.307Z",
            "updated_at": "2020-04-24T17:04:36.307Z"
          }
        ]
      },
      {
        "_id": "5ea52013c31a785453cef459",
        "title": "Tourisms",
        "created_at": "2020-04-26T05:45:55.890Z",
        "updated_at": "2020-04-26T05:50:07.942Z",
        "lists": []
      }
    ]
  }
}