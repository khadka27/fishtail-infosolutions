export type LocationData = {
  name: string
  country: string
  coordinates: [number, number] // LatLngTuple
  address: string
}

export const officeLocations: LocationData[] = [
  {
    name: "East Ham Office",
    country: "United Kingdom",
    coordinates: [51.538, 0.042],
    address: "182-184 High Street North, East Ham, London, E6 2JA",
  },
  {
    name: "Bear Office",
    country: "United States",
    coordinates: [39.5761, -75.611],
    address: "604 Carson Dr CAK-953 Bear, DE 19701-1450",
  },
  {
    name: "Pokhara Office",
    country: "Nepal",
    coordinates: [28.2096, 83.9856],
    address: "Prithivi Chowk, Street 31, Pokhara",
  },
  {
    name: "Delhi Office",
    country: "India",
    coordinates: [28.6010, 77.0787] as [number, number],
    address: "Mahavir Enclave, South West Delhi, New Delhi, 110045",
  },
]

