# Recombee API

## [Working Demo Video Link](https://drive.google.com/file/d/1zgB6rpyrewHXmGdeK9jsVXtW21BFd-EG/view?usp=sharing)
### It has following 2 main features

1. Sending Interactions between User and Product
2. Getting Recommendations from Recombee


## 1. Interactions (POST API)

**URL:** [/0/item/itemID/user/userID/interaction/interactionID](/0/item/itemID/user/userID/interaction/interactionID)

Paramter | Value | Type
------------ | ------------- | -------------
itemID | Product SKU | String
userID | between 1 and 99 | Integer
interactionID | purchase,view | String


### Response
Status | Value |
------------ | -------------
200 | Interaction successfully sent
400 | Request Error
441 | InteractionID error




## 2. Recommendations (GET API)
### It has two types

1. Recommend Items to Item
2. Recommend Items to User

## 1. Recommend Items to Item (GET API)

**URL:** [/1/user/userID/recommendations/NUM](/1/user/userID/recommendations/NUM)

Paramter | Value | Type
------------ | ------------- | -------------
userID | between 1 and 99 | Integer
NUM | 3, 6 or 9 | Integer

### Response
Status | Value |
------------ | -------------
200 | Returns Recommended Products
400 | Request Error
431 | Please enter recommendation number as 3, 6 or 9

### Response Body
```
{
    "recommId": "ca0ebb3da7dfbf058185fc3cfe118bad",
    "recomms": [
        {
            "id": "D-2215"
        },
        {
            "id": "D-1652"
        },
        {
            "id": "D-2197-b"
        }
    ],
    "numberNextRecommsCalls": 0
}
```
## 2. Recommend Items to User (GET API)

**URL:** [/2/item/itemID/user/userID/recommendations/NUM](/2/item/itemID/user/userID/recommendations/NUM)

Paramter | Value | Type
------------ | ------------- | -------------
itemID | Product SKU | String
userID | between 1 and 99 | Integer
NUM | 3, 6 or 9 | Integer

### Response
Status | Value |
------------ | -------------
200 | Returns Recommended Products
400 | Request Error
431 | Please enter recommendation number as 3, 6 or 9

### Response Body
```
{
    "recommId": "c56b6e00c820a080e95134c788bc9d57",
    "recomms": [
        {
            "id": "d-2159",
            "values": {
                "IMAGE": "https://cdn.shopify.com/s/files/1/0496/5738/1019/products/product-01_ef13f8b5-d6a2-4b32-a383-fa05bb529d25.png?v=1604642544",
                "PRICE": 1750,
                "COST": 2500,
                "URL": "https://xenon-store.com/products/casual-3-piece-linen-unstitched-embroidered-dress-with-printed-dupatta",
                "NAME": "Casual 3 Piece Tan Linen Unstitched Embroidered Dress with Embroidered Neck",
                "INSTOCK": "Yes"
            }
        },
        {
            "id": "d-2263",
            "values": {
                "IMAGE": "https://cdn.shopify.com/s/files/1/0496/5738/1019/products/Untitled-1_58210d21-89eb-44a0-928d-24e43a7d3f8e.png?v=1604647872",
                "PRICE": 1750,
                "COST": 2500,
                "URL": "https://xenon-store.com/products/classic-3-piece-linen-unstitched-suit-with-embroidered-front",
                "NAME": "Classic 3 Piece Linen Unstitched Suit with Embroidered Front",
                "INSTOCK": "Yes"
            }
        },
        {
            "id": "d-2156",
            "values": {
                "IMAGE": "https://cdn.shopify.com/s/files/1/0496/5738/1019/products/product-01_d91df95d-257e-4a54-a17b-b44afb5b4599.png?v=1604643340",
                "PRICE": 1750,
                "COST": 2500,
                "URL": "https://xenon-store.com/products/classic-3-piece-mehroon-linen-unstitched-embroidered-dress-with-printed-dupatta",
                "NAME": "Classic 3 Piece Mehroon Linen Unstitched Embroidered Dress with Printed Dupatta",
                "INSTOCK": "Yes"
            }
        }
    ],
    "numberNextRecommsCalls": 0
}
```


