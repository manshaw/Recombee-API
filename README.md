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


## 2. Recommend Items to User (GET API)

**URL:** [/2/item/itemID/user/userID/recommendations/NUM](/2/item/itemID/user/userID/recommendations/NUM)

Paramter | Value | Type
------------ | ------------- | -------------
itemID | Product SKU | String
userID | between 1 and 99 | Integer
NUM | 3, 6 or 9 | Integer


