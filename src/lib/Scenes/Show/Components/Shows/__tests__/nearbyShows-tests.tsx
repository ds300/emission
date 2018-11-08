import React from "react"
import "react-native"
import * as renderer from "react-test-renderer"
import { Shows } from "../index"
import { NearbyShows, NearbyShows as _nearbyShows } from "../nearbyShows"

it("returns a nearby shows ", () => {
  const show = NearbyShows.edges[0]
  expect(show).toEqual({
    node: {
      id: "j-cacciola-gallery-delicate-power-the-delicacy-and-complexity-of-egg-tempera",
      name: "Delicate Power: The Delicacy and Complexity of Egg Tempera",
      images: [
        {
          url: "https://d32dm0rphc51dk.cloudfront.net/6HYZ-tKaXLrcqXCfYxNZQQ/large.jpg",
          aspect_ratio: 0.99,
        },
      ],
      partner: {
        name: "J. Cacciola Gallery",
      },
      location: {
        address: "35 Mill Street",
        address_2: "",
        state: "NJ",
        postal_code: "07924",
      },
    },
  })
})
