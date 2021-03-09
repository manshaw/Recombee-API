const express = require('express');
var recombee = require('recombee-api-client');
var rqs = recombee.requests;
const app = express();
const port = 8080;
var client = new recombee.ApiClient('ncra-dev', '0rjWbZdpqVRvPOggaNiXgtqLMoXuzNYhyp3SQUH8jJ1U2bNHrp1MB26NSJYocs7N');
app.get('/1/user/:userID/recommendations/:num', (req, res) => {
    var userID = req.params.userID;
    var recommendations = req.params.num;
    if (recommendations === 3 || recommendations === 6 || recommendations || 9) { 
        client.send(new rqs.RecommendItemsToUser(userID, recommendations),
            (err, recommended) => {
                if(err) res.status(400).json(err);
                if(recommended) res.status(200).json(recommended);
            }
        );
    } else {
        res.status(441).json('Please enter recommendation number as 3, 6 or 9');
    }
});


app.get('/2/item/:itemID/user/:userID/recommendations/:num', (req, res) => {
    var itemID = req.params.itemID;
    var userID = req.params.userID;
    var recommendations = req.params.num;
    if (recommendations === 3 || recommendations === 6 || recommendations || 9) {
        client.send(new rqs.RecommendItemsToItem(itemID, userID, recommendations,
            {
                'scenario': 'product_detail',
                'returnProperties': true,
                'cascadeCreate': true
            }
        ),
            (err, recommended) => {
                if(err) res.status(400).json(err);
                if(recommended) res.status(200).json(recommended);
            }
        );
    } else {
        res.status(441).json('Please enter recommendation number as 3, 6 or 9');
    }
});


app.post('/0/item/:itemID/user/:userID/interaction/:interactionID', (req, res) => {
    var itemID = req.params.itemID;
    var userID = req.params.userID;
    var interactionID = req.params.interactionID;
    if (interactionID === 'purchase') {
        client.send(new rqs.AddPurchase(userID, itemID, { cascadeCreate: true }),
            (err, response) => {
                if (err) res.status(400).json(err);
                else if (response) res.status(200).json('interaction successfully sent');
            }
        );
    } else if (interactionID === 'view') {
        client.send(new rqs.AddDetailView(userID, itemID, { cascadeCreate: true }),
            (err, response) => {
                if (err) res.status(400).json(err);
                else if (response) res.status(200).json('interaction successfully sent');
            }
        );
    } else {
        res.status(441).json('Invalid interaction ID');
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
