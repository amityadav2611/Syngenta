# Syngenta_nodejs

##  : Digital Agriculture APIs and Database Integration Assignment 

### Discription of developed Assignmnet

- Tech Stack
  1) Nodejs
  2) ExpressJs
  3) MongoDB

- Packages Used 
  1) JWT(jasonWebToken) for creation of token used for Authentication and Authorization

- Database Collections
  1) Organization Colletion _ [Details of organization]
```yaml
    Name: {
        type: String,
        require: true,
        trim : true
    },
    Mobile: {
        type: Number,
        required: true,
        unique: true,
        trim: true
      },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true
      }, 
    Password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
      }
},{timestamps: true})

```
  2) Property Collection _  [here we had connected with the Organization collection and crop collection]
```yaml
    Region: {
        type: String,
        trim : true
    },
    Field: {
        type: String,
        trim: true
      },
    OrganizationId: {
        type: ObjectId,
        ref: "organization"
    },
    CropId: {
        type: ObjectId,
        ref: "crop"
    }
    
},{timestamps: true})
```
  2) Crop Collection _  [here we had connected with the Property collection]
```yaml
    Propertyid: {
        type: ObjectId,
        ref: "property"
    },
    Cropname: {
        type: String,
        trim: true
      },
    Cropcyclestage: {
        type: String,
        trim: true
    },
},{timestamps: true})
```

## Features 

- Type 
  1) There will two type of group one is Organization and other is Property 
  2) The Property will be created and referred the Organization and Crop
  3) The Crop will be created after creating Property
  4) After all we had to assign each property of each organization and crop
  5) We can do CRUD operations for All [Organization, Property, Crop]
 
## Routes

### Organization Routes
-  POST '/login'
   1) Used for login the organization by there Mobile and Password

- POST '/organization'
  1) Used for creating the Organization details

- GET '/organization'
  1) Used for fetching all the organization details



### Property Routes
- POST '/property'
  1) Used for creating  of Property details

- GET '/property'
  1) Used for fetching all the properties and inside property we saw to each organization and crop



### Crop Routes
- POST '/crop'
  1) Used for creating of Crop details and inside crop we pushed to property

- GET '/crop'
  1) Used for fetching all the Crop 

