# Routes
The base route for all api calls in version 1 is [/api/v1/](https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/health)

[API health check](https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/health)
# Cars

- [Car object](#car-object)
- [GET cars](#get-cars)
- [GET car](#get-car)
- [Consumption](#get-consumption)
- [Comparison](#get-comparison)

## Car object
A car object contains the car id and its fuel flow per 100km at velocity of 1km/h. Example of a car object.
```JS
{
  "id": String,
  "fuelFlowPer100Kilometers": Number
}
```

## Result object
Returned object for consumption and comparison calculations. The object contains four properties. `info`, `data1`, `data2` and `difference`. Note that `data2` and `difference` properties are null if no second velocity is given.

### `info`
contains common request information for all requests.
```JS
info: {
  distance: Number,
  carId: String,
}
```

### `data1` and `data2`
Contains consumption information for given velocity. Data1 contains data for the firs given velocity and data2 for the second given velocity.

```JS
data1: {
  carId: String,
  velocity: Number,
  distance: Number,
  time: Number,
  fuel: Number,
}
```

### `difference`
Contains fuel and time differences for given velocities.
```JS
difference: {
  time: Number,
  fuel: Number,
}
```

## GET cars
[https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars](https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars)

### Returns
Returns a list of car objects.
```JS
[
  carObject1,
  carObject2,
  carObject3,
]
```
## GET car
[https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars/:id](https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars/:id)

Returns the car object with the same ID as given in the route params.

### Params
- Car id `:id`

### Returns
```JS
{
  ...carObjectProperties
}
```

## GET consumption
[https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars/:id/:distance/:velocity](https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars/:id/:distance/:velocity)

Returns used fuel and required time to cover given distance with specified vehicle.
### Params
- Car id `:id`
- Distance `:distance`
- Velocity `:velocity1`
### Returns
```JS
{
  ...resultObjectProperties
}
```

## GET comparison
[https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars/:id/:distance/:velocity1/:velocity2](https://trip-calculator-koodihaaste-21.herokuapp.com/api/v1/cars/:id/:distance/:velocity1/:velocity2)

Returns consumption and comparison information for two velocities for specified car.

### Params
- Car id `:id`
- Distance `:distance`
- Base velocity `:velocity1`
- Comparison velocity `:velocity2`

### Returns
```JS
{
  ...resultObjectProperties
}
```